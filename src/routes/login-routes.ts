import { Router, Request, Response, NextFunction } from "express";
import { loginUser } from "../controllers/login-controller";

const loginRoutes = Router();
loginRoutes.post("/", (req: Request, res: Response,next:NextFunction) => {
  return loginUser(req, res,next);
});
export default loginRoutes;
