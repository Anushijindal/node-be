import { Response, Request } from "express";
import { Task } from "../interfaces/task-interface";
import { commonResponse } from "../commonResponse";
let tasks: Task[] = [];
export const getAllTasks = (req: Request, res: Response) => {
  return commonResponse(req, res, 200, "success", tasks, tasks.length);
};
export const addTask = (req: Request, res: Response) => {
  const task: Task = {
    id: tasks.length + 1,
    title: req.body.title,
    description: req.body.description,
    isCompleted: false,
  };
  tasks.push(task);
  return commonResponse(req, res, 201, "success", task, 1);
};
export const getTask = (req: Request, res: Response) => {
  const task = tasks.find((reqTask) => reqTask.id == parseInt(req.params.id));
  if (!task) {
    return commonResponse(req, res, 404, "Not Found", { success: false }, 0);
  } else {
    return commonResponse(req, res, 201, "success", task, 1);
  }
};
export const editTask = (req: Request, res: Response) => {
  const task = tasks.find((reqTask) => reqTask.id == parseInt(req.params.id));
  if (!task) {
    return commonResponse(req, res, 404, "Not Found", { success: false }, 0);
  } else {
    (task.title = req.body.title || task.title),
      (task.description = req.body.description || task.description),
      (task.isCompleted = req.body.isCompleted || task.isCompleted);
    return commonResponse(req, res, 200, "success", task, 1);
  }
};
export const deleteTask = (req: Request, res: Response) => {
  const index = tasks.findIndex(
    (reqTask) => reqTask.id === parseInt(req.params.id)
  );
  if (index == -1) {
    return commonResponse(req, res, 404, "Not Found", { success: false }, 0);
  } else {
    tasks.splice(index, 1);
    return commonResponse(req, res, 200, "success", { success: true }, 0);
  }
};
