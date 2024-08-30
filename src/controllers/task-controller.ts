import { Request, Response } from "express";
import { Task } from "../interfaces/task-interface";
import { BadRequest } from "../errorMessages";

let tasks: Task[] = [];
export const getAllTasks = (req: Request, res: Response) => {
  try {
    res.locals.response = {
      data: { result: tasks, totalCount: tasks.length },
      message: "success",
      statusCode: 200,
    };
  } catch (err: any) {
    res.locals.response = {
      data: {},
      message: err?.message || err?.toString() || "Unknown error",
      statusCode: err?.statusCode || 520,
    };
  }
};

export const addTask = (req: Request, res: Response) => {
  try {
    const task: Task = {
      id: tasks.length + 1,
      title: req.body.title,
      description: req.body.description,
      isCompleted: false,
    };
    tasks.push(task);
    res.locals.response = {
      data: { details: task },
      message: "success",
      statusCode: 201,
    };
  } catch (err: any) {
    res.locals.response = {
      data: {},
      message: err?.message || err?.toString() || "Unknown error",
      statusCode: err?.statusCode || 520,
    };
  }
};

export const getTask = (req: Request, res: Response) => {
  try {
    const task = tasks.find((reqTask) => reqTask.id == parseInt(req.params.id));
    if (!task?.id) {
      throw BadRequest("Not found");
    }
    res.locals.response = {
      data: { details: task },
      message: "success",
      statusCode: 200,
    };
  } catch (err: any) {
    res.locals.response = {
      data: {},
      message: err?.message || err?.toString() || "Unknown error",
      statusCode: err?.statusCode || 520,
    };
  }
};

export const editTask = (req: Request, res: Response) => {
  try {
    const task = tasks.find((reqTask) => reqTask.id == parseInt(req.params.id));
    if (!task?.id) {
      throw BadRequest("Not found");
    }
    task.title = req.body.title || task.title;
    task.description = req.body.description || task.description;
    task.isCompleted = req.body.isCompleted || task.isCompleted;
    res.locals.response = {
      statusCode: 200,
      message: "updated successfully",
      data: { details: task, success: true },
    };
  } catch (err: any) {
    res.locals.response = {
      data: {},
      message: err?.message || err?.toString() || "Unknown error",
      statusCode: err?.statusCode || 520,
    };
  }
};

export const deleteTask = (req: Request, res: Response) => {
  try {
    const index = tasks.findIndex(
      (reqTask) => reqTask.id === parseInt(req.params.id)
    );
    if (index == -1) {
      throw BadRequest("Not found");
    }
    tasks.splice(index, 1);
    res.locals.response = {
      statusCode: 200,
      message: "deleted successfully",
      data: { success: true },
    };
  } catch (err: any) {
    res.locals.response = {
      data: {},
      message: err?.message || err?.toString() || "Unknown error",
      statusCode: err?.statusCode || 520,
    };
  }
};
