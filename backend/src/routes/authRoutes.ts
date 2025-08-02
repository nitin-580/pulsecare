import express from "express";
import { createUser } from "../controllers/authController";
import { loginUser } from "../controllers/loginUserController";

const router = express.Router();

router.post("/auth", createUser);

export default router;