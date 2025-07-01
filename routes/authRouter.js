import express from "express";
import { authSchema, updateSubscriptionSchema } from "../schemas/authSchema.js";
import validateBody from "../helpers/validateBody.js";
import authController from "../controllers/authControllers.js";
import auth from "../helpers/auth.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  updload.single("avatar"),
  validateBody(authSchema),
  authController.register
);
authRouter.post("/login", validateBody(authSchema), authController.login);
authRouter.get("/current", auth, authController.getCurrentUser);
authRouter.post("/logout", auth, authController.logout);
authRouter.patch(
  "/subscription",
  auth,
  validateBody(updateSubscriptionSchema),
  authController.updateUserSubscription
);

export default authRouter;
