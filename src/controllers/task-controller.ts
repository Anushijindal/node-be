import { Request, Response } from "express";
import { Task } from "../interfaces/task-interface";

let tasks: Task[] = [];


export const getAllTasks = (req: Request, res: Response) => {
  try{
    res.locals.response = {
      data: { result: tasks, totalCount: tasks.length },
      message: 'message',
      statusCode: 200
    };
  } catch(err: any) {
    res.locals.response = {
      data: {},
      message: err?.message || err?.toString() || 'Unknown error',
      statusCode: err?.statusCode || 520
    };  
  } 
};

export const addTask = (req: Request, res: Response) => {
  const task: Task = {
    id: tasks.length + 1,
    title: req.body.title,
    description: req.body.description,
    isCompleted: false,
  };
  tasks.push(task);
  res.locals.data = { details: task };
  res.locals.status = 201;
  res.locals.message = "success";
};

export const getTask = (req: Request, res: Response) => {
  try{
    const task = tasks.find((reqTask) => reqTask.id == parseInt(req.params.id));
    if (!task?.id) {
      throw BadRequest('Not found');
    }
    res.locals.response = {
      data: { details: task },
      message: 'message',
      statusCode: 200
    };
  } catch(err: any) {
    res.locals.response = {
      data: {},
      message: err?.message || err?.toString() || 'Unknown error',
      statusCode: err?.statusCode || 520
    };  
  } 

};

export const editTask = (req: Request, res: Response) => {
  const task = tasks.find((reqTask) => reqTask.id == parseInt(req.params.id));
  if (!task) {
    res.locals.data = { success: false };
    res.locals.status = 404;
    res.locals.message = "not found";
    return;
  }
  task.title = req.body.title || task.title;
  task.description = req.body.description || task.description;
  task.isCompleted = req.body.isCompleted || task.isCompleted;
  res.locals.data = { details: task, success: true };
  res.locals.status = 200;
  res.locals.message = "updated successfully";
};

export const deleteTask = (req: Request, res: Response) => {
  const index = tasks.findIndex(
    (reqTask) => reqTask.id === parseInt(req.params.id)
  );
  if (index === -1) {
    res.locals.data = { success: false };
    res.locals.status = 404;
    res.locals.message = "not found";
    return;
  }
  tasks.splice(index, 1);
  res.locals.data = { success: true };
  res.locals.status = 200;
  res.locals.message = "deleted successfully";
};
