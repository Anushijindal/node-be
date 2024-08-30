import { Request, Response, Router } from "express";
import { Task } from "../interfaces/task-interface";
import { addTask, editTask, getAllTasks, getTask,deleteTask } from "../controllers/task-controller";

const taskRoute = Router();
let tasks: Task[] = [];
taskRoute.post("/", (req: Request, res: Response) => {
 return addTask(req, res);
});
taskRoute.route("/").get((req: Request, res: Response) => {
  return getAllTasks(req, res);
});
taskRoute.get("/:id", (req: Request, res: Response) => {
return getTask(req,res)
});
taskRoute.put("/:id", (req: Request, res: Response) => {
  return editTask(req,res);
});
taskRoute.delete("/:id", (req: Request, res: Response) => {
  return deleteTask(req,res);
});
export default taskRoute;
