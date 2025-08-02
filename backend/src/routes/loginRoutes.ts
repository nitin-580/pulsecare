// routes/authRoutes.ts

import express, { Router } from 'express';
import { loginUser } from '../controllers/loginUserController'; // Import the controller

const router: Router = express.Router();

router.post('/login', loginUser); // Define the login route

export default router;
