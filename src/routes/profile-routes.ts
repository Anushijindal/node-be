import { Router, Request, Response, NextFunction } from "express";
import { getMyProfile, editProfile } from "../controllers/profile-controller";

const profileRoutes = Router();
profileRoutes.get("/", (req: Request, res: Response,next:NextFunction) => {
  return getMyProfile(req, res,next);
});
profileRoutes.put("/", (req: Request, res: Response,next:NextFunction) => {
  return editProfile(req, res,next);
});
export default profileRoutes;
