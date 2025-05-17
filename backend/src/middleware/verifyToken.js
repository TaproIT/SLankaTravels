import jwt from 'jsonwebtoken';
import { sendErrorResponse } from '../utils/responseUtil.js';
import User from '../models/user.js';

export const verifyToken = (req, res, next) => {

    const token = req.headers.authorization?.split(" ")[1]; // Format: "Bearer <token>"

    if (!token) {
        return sendErrorResponse(res, 401, "Access denied. No token provided")
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET_KEY);

        req.user = decoded;

        next();

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

export const verifyAdminToken = async(req, res, next) => {

    const token = req.headers.authorization?.split(" ")[1]; // Format: "Bearer <token>"

    if (!token) {
        return sendErrorResponse(res, 401, "Access denied. No token provided")
    }

    try {

        const { userId } = jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET_KEY);

        const adminUser = await User.findOne({ _id: userId, userRole: 'admin' });
        
         if (!adminUser) {
           return sendErrorResponse(res, 404, "Admin user not found");
         }

         req.userId = userId;

        next();

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