import express from "express";
import validateBody from "../helpers/validateBody.js";
import { authRegisterSchema } from "../schemas/authSchema.js";

const authRouter = express.Router();

authRouter.post("/register", validateBody(authRegisterSchema));

export default authRouter;
