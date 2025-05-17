//import { ApplicationServiceException } from "../exception/ApplicationServiceException.js";
import User from "../models/user.js";
import { comparePassword, compareRefreshToken, hashPassword, hashRefreshToken } from "../utils/authUtil.js";
import { sendErrorResponse, sendSuccessResponse } from "../utils/responseUtil.js";
import { generateAccessToken, generateRefreshToken } from "../utils/tokenUtil.js";
import { loginValidation, registerValidation } from "../validations/authValidation.js";
import jwt from 'jsonwebtoken';

export const registerUser  =  async (req,res) => {

    try{
        const {userRole, email, password}  = req.body;
        
        // validate user input 
        const {success, errors} = registerValidation(req.body);

        if(!success){
            return sendErrorResponse(
                res,
                400,
                "validation failed",
                errors
            );
        }
        
        // check if user already exists
        const userExists = await User.findOne({email});

        if(userExists){
            return sendErrorResponse(
                res,
                400,
                "User already exists",
                errors
            );
        
        }
        
        const hashedPassword = await hashPassword(password);

        const user = await User.create({
            userRole,
            email,
            password:hashedPassword
        });

        if(!user){
            return sendErrorResponse(
                res,
                400,
                "User registration failed"
            );
        }

        // add refresh and access token to user
        const refreshToken = generateRefreshToken(user._id);

        const accessToken = generateAccessToken(user._id);

        const hashedRefreshToken = await hashRefreshToken(refreshToken);
        
        user.refreshToken = hashedRefreshToken;

        await user.save();

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "Strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        const { refreshToken: removed, ...userWithoutRefreshToken } =
          user.toObject();

        return sendSuccessResponse(
            res,
            200,
            "User registered successfully",
            {
                user: userWithoutRefreshToken,
                accessToken,
            },
        );


    }catch (error) {
       
        return sendErrorResponse(
            res, 
            500, 
            "Internal Server Error", 
            error
        );

    }
    

}

export const loginUser = async (req,res) => {

    try{
        
        const { userName, password, userRole } = req.body;

        // validate user input
        const { success, errors } = loginValidation(req.body);

        if(!success){
            return sendErrorResponse(
                res,
                400,
                "Validation failed",
                errors
            );
        }

        // find user by userName and role
        const user = await User.findOne({
             email: userName,
             userRole: userRole
        });

        if(!user){
            return sendErrorResponse(
                res,
                404,
                "User not found"
            );
        }

        const isMatch = await comparePassword(password, user.password);

        if(!isMatch){
            return sendErrorResponse(
                res,
                400,
                "Invalid User"
            );
        }

         // add refresh and access token to user
         const refreshToken = generateRefreshToken(user._id);

         const accessToken = generateAccessToken(user._id);
 
         const hashedRefreshToken = await hashRefreshToken(refreshToken);
         
         user.refreshToken = hashedRefreshToken;
 
         await user.save();
 
         res.cookie("refreshToken", refreshToken, {
             httpOnly: true,
             secure: true,
             sameSite: "Strict",
             maxAge: 7 * 24 * 60 * 60 * 1000,
         });
 
         const { refreshToken: removed, ...userWithoutRefreshToken } =
           user.toObject();
        
        return sendSuccessResponse(
           res,
           200,
           "User log in successfully",
            {
                accessToken
            }
        );

    }catch(error){
        
        return sendErrorResponse(
            res,
            500,
            "Internal Server Error",
            error
        );
       
    }
}

export const setRefreshToken = async (req, res) => {

    try {
        
        const {refreshToken} = req.body;

        if (!refreshToken) {
            return sendErrorResponse(res, 400, "Refresh token is required");
        }

        let decodedRefreshToken
        try {

            decodedRefreshToken = jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN_SECRET_KEY);

        } catch (error) {

            if (error instanceof jwt.TokenExpiredError) {
                return sendErrorResponse(res, 401, "Access Token expired.", error);
            }

            if (error instanceof jwt.JsonWebTokenError) {
                return sendErrorResponse(res, 401, "Invalid token.", error);
            }

            return sendErrorResponse(res, 500, "Internal Server Error", error);
        }

        const user = await User.findOne({_id: decodedRefreshToken.userId});

        if (!user) {
            return sendErrorResponse(res, 404, "User not found");
        }

        const isMatch = await compareRefreshToken(refreshToken, user.refreshToken);

        if (!isMatch) {
            return sendErrorResponse(res, 400, "Invalid refresh token");
        }

        const accessToken = generateAccessToken(user._id);

        const newRefreshToken = generateRefreshToken(user._id);

        const hashedRefreshToken = await hashRefreshToken(newRefreshToken);

        user.refreshToken = hashedRefreshToken;

        await user.save();

        res.cookie("refreshToken", newRefreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "Strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return sendSuccessResponse(res, 200, "Tokens refreshed successfully", {
            accessToken,
        });

    } catch (error) {

        sendErrorResponse(res, 500, "Internal Server Error", error);
    }
}


export const logoutUser = async (req, res) => {
  try {
    const { userId } = req.user;

    const user = await User.findOne({ _id: userId});

    if (!user) {
      return sendErrorResponse(res, 404, "User not found");
    }

    const token = req.headers.authorization?.split(" ")[1];

    user.refreshToken = null;

    await user.save();

    res.clearCookie("refreshToken");

    return sendSuccessResponse(res, 200, "Logout successful");

  } catch (error) {

    sendErrorResponse(res, 500, "Internal Server Error", error);

  }
}

export const getUser = async (req, res) => {
    try {
        const { userId } = req;

        const user = await User.findById(userId);

        if (!user) {
            return sendErrorResponse(res, 404, "User not found");
        }

        const { refreshToken: removed, ...userWithoutRefreshToken } =
          user.toObject();

        return sendSuccessResponse(res, 200, "User retrieved successfully", {
            user: userWithoutRefreshToken,
        });

    } catch (error) {

        sendErrorResponse(res, 500, "Internal Server Error", error);

    }
}
