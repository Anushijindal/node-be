import { NextFunction, Router, Response, Request } from "express";
import { cityController } from "../controllers/countryCityState-controller";

const cityRoutes = Router();
cityRoutes.post("/", (req: Request, res: Response, next: NextFunction) => {
  return cityController(req, res, next);
});
export default cityRoutes;
