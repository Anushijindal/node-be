import { Router,Request,Response } from "express";
import taskRoute from "./tasks";
const router = Router();
// router.use("/",(req:Request,res:Response)=>{
//     res.send("App is working.")
// })
router.use("/tasks", taskRoute);
export default router;