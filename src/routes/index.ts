import { Router } from "express";
import taskRoute from "./tasks";
import profileRoutes from "./profile-routes";
import loginRoutes from "./login-routes";
import signinRoutes from "./signin-routes";

const router = Router();

router.use("/tasks", taskRoute);
router.use("/api/v1/profile", profileRoutes);
router.use("/api/v1/auth/login", loginRoutes);
router.use("/api/v1/auth/signin", signinRoutes);

export default router;
