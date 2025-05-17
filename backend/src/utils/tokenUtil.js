import jwt from 'jsonwebtoken';

export const generateAccessToken = (userId)=>{
    return jwt.sign({userId},process.env.JWT_ACCESS_TOKEN_SECRET_KEY,{expiresIn:"24h"});
}

export const generateRefreshToken = (userId)=>{
    return jwt.sign({userId},process.env.JWT_REFRESH_TOKEN_SECRET_KEY,{expiresIn:"30 days"});
}

export const verifyEncodedToken = (token, secret) => {
    
    try {

       const decodedToken = jwt.verify(token, secret);
       return decodedToken;

    } catch (error) {

        if (error instanceof jwt.TokenExpiredError) {
            return sendErrorResponse(res, 401, "Access Token expired.", error);
        }

        if (error instanceof jwt.JsonWebTokenError) {
            return sendErrorResponse(res, 401, "Invalid token.", error);
        }

        return sendErrorResponse(res, 500, "Internal Server Error", error);
    }
}