import { Router, Request, Response } from "express";
import taskRoute from "./tasks";
import profileRoutes from "./profile-routes";
import loginRoutes from "./login-routes";
const router = Router();
router.use("/tasks", taskRoute);
router.use("/api/v1/profile", profileRoutes);
router.use("/api/v1/auth/login", loginRoutes);

export default router;
