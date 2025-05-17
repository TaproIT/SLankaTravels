import express from 'express';
import { getUser, loginUser, logoutUser, registerUser, setRefreshToken } from '../controllers/user.js';
import { verifyAdminToken, verifyToken } from '../middleware/verifyToken.js';
//import { sendSuccessResponse, sendErrorResponse } from '../utils/responseUtil.js';
//import { handleErrorResponseData } from '../exception/ApplicationServiceException.js';

const router = express.Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.post('/logout', verifyToken, logoutUser);

router.post('/set-refresh-token', setRefreshToken);

//Test admin user token verification
router.get('/users', verifyAdminToken, getUser);

export {router as authRouter};