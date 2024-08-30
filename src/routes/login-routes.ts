import { Router,Request,Response } from "express";
import  {loginUser}  from "../controllers/login-controller";

const loginRoutes=Router();
loginRoutes.post("/",(req:Request,res:Response)=>{
    return loginUser(req,res)
})
export default loginRoutes;