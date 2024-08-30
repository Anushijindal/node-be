import { Response, Request } from "express";
import { Task } from "../interfaces/task-interface";
import { commonResponse } from "../commonResponse";
let tasks: Task[] = [];

export const getAllTasks = (req: Request, res: Response) => {
  return commonResponse(req, res, {
    status: 200,
    message: "success",
    data: { result: tasks, totalCount: tasks.length },
  });
  try {
    return commonResponse(req, res, {
      status: 200,
      message: "success",
      data: { result: tasks, totalCount: tasks.length },
    });
  } catch (error) {
    return commonResponse(req, res, {
      status: 500,
      message: "Internal Server Error",
      data: { success: false },
    });
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
    return commonResponse(req, res, {
      status: 201,
      message: "success",
      data: { details: task },
    });
  } catch (error) {
    return commonResponse(req, res, {
      status: 500,
      message: "Internal Server Error",
      data: { success: false },
    });
  }
};
export const getTask = (req: Request, res: Response) => {
  try {
    const task = tasks.find((reqTask) => reqTask.id == parseInt(req.params.id));
    if (!task) {
      return commonResponse(req, res, {
        status: 404,
        message: "Not Found",
        data: { success: false },
      });
    } else {
      return commonResponse(req, res, {
        status: 200,
        message: "success",
        data: { details: task },
      });
    }
  } catch (error) {
    return commonResponse(req, res, {
      status: 500,
      message: "Internal Server Error",
      data: { success: false },
    });
  }
};
export const editTask = (req: Request, res: Response) => {
  try {
    const task = tasks.find((reqTask) => reqTask.id == parseInt(req.params.id));
    if (!task) {
      return commonResponse(req, res, {
        status: 404,
        message: "Not Found",
        data: { success: false },
      });
    } else {
      (task.title = req.body.title || task.title),
        (task.description = req.body.description || task.description),
        (task.isCompleted = req.body.isCompleted || task.isCompleted);
    }
  } catch (error) {
    return commonResponse(req, res, {
      status: 500,
      message: "Internal Server Error",
      data: { success: false },
    });
  }
};
export const deleteTask = (req: Request, res: Response) => {
  try {
    const index = tasks.findIndex(
      (reqTask) => reqTask.id === parseInt(req.params.id)
    );
    if (index == -1) {
      return commonResponse(req, res, {
        status: 404,
        message: "Not Found",
        data: { success: false },
      });
    } else {
      tasks.splice(index, 1);
      return commonResponse(req, res, {
        status: 200,
        message: "Deleted Successfully",
        data: { success: true },
      });
    }
  } catch (error) {
    return commonResponse(req, res, {
      status: 500,
      message: "Internal Server Error",
      data: { success: false },
    });
  }
};
