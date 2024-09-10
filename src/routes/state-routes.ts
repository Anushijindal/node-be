import { NextFunction, Router, Response, Request } from "express";
import { stateController } from "../controllers/countryCityState-controller";

const stateRoutes = Router();
stateRoutes.post("/", (req: Request, res: Response, next: NextFunction) => {
  return stateController(req, res, next);
});
