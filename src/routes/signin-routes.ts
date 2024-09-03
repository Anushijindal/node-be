import { Router, Request, Response } from "express";
import { signinUser } from "../controllers/signin-controller";

const signinRoutes = Router();
signinRoutes.post("/", (req: Request, res: Response) => {
    return signinUser(req,res);
});

export default signinRoutes;
