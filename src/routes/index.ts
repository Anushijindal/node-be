import { Router } from "express";
import taskRoute from "./tasks";
import profileRoutes from "./profile-routes";
import loginRoutes from "./login-routes";
import signinRoutes from "./signin-routes";
import countryRoutes from "./country-routes";
import stateRoutes from "./state-routes";
import cityRoutes from "./city-routes";

const router = Router();

router.use("/tasks", taskRoute);
router.use("/api/v1/profile", profileRoutes);
router.use("/api/v1/auth/login", loginRoutes);
router.use("/api/v1/auth/signin", signinRoutes);
router.use("/api/v1/fetchCountry",countryRoutes);
router.use("/api/v1/fetchState",stateRoutes);
router.use("/api/v1/fetchCity",cityRoutes);
export default router;
