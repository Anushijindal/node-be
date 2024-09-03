import { Router, Request, Response, NextFunction } from "express";
import { signinUser } from "../controllers/signin-controller";
import { middleware } from "../middleware";

const signinRoutes = Router();

signinRoutes.post("/", (req: Request, res: Response, next: NextFunction) => {
    signinUser(req, res, next);
});
// signinRoutes.post("/",signinUser)
export default signinRoutes;
