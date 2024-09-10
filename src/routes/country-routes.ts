import { Router, Request, Response, NextFunction } from "express";
import { countryController } from "../controllers/countryCityState-controller";
// import { NextFunction } from "express-serve-static-core";

const countryRoutes = Router();
countryRoutes.get("/", (req: Request, res: Response, next: NextFunction) => {
  return countryController(req, res, next);
});
export default countryRoutes;
