import { Router, Request, Response } from "express";
import { getMyProfile, editProfile } from "../controllers/profile-controller";

const profileRoutes = Router();
profileRoutes.get("/", (req: Request, res: Response) => {
  return getMyProfile(req, res);
});
profileRoutes.put("/", (req: Request, res: Response) => {
  return editProfile(req, res);
});
export default profileRoutes;
