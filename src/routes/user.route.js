import express from 'express';
import { register,login,logout,refreshToken} from '../controllers/user.controllers.js';
import { upload } from "../middleware/multer.middlerware.js";

const router = express.Router()

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/refreshToken", refreshToken);




export default router;