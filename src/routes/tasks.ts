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
  // const task = tasks.find((reqTask) => reqTask.id == parseInt(req.params.id));
  // if (!task) {
  //   res.status(404).send({
  //     status: 404,
  //     message: "Not Found",
  //     data: {
  //       result: "Task Not Found",
  //     },
  //   });
  // } else {
  //   res.send({
  //     status: 200,
  //     message: "success",
  //     data: {
  //       details: task,
  //     },
  //   });
  // }
});
taskRoute.put("/:id", (req: Request, res: Response) => {
  return editTask(req,res);
});
taskRoute.delete("/:id", (req: Request, res: Response) => {
  return deleteTask(req,res);
});
export default taskRoute;
