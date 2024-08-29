import { Request, Response, Router } from "express";
import { Task } from "interfaces/taskInterface";

const taskRoute = Router();
let tasks: Task[] = [];
taskRoute.post("/", (req: Request, res: Response) => {
  const task: Task = {
    id: tasks.length + 1,
    title: req.body.title,
    description: req.body.description,
    isCompleted: false,
  };
  tasks.push(task);
  res.status(201).send({
    status: 201,
    message: "task inserted",
    data: {
      details: task,
    },
  });
});
taskRoute.get("/", (req: Request, res: Response) => {
  res.send({
    status: 200,
    message: "success",
    data: {
      results: [
        {
          id: 1,
          title: 'Work on SSP',
          description: 'THis is taks is created to start working on ssp app.',
          isCompleted: true
        },
        {
          id: 2,
          title: 'Work on SSP',
          description: 'THis is taks is created to start working on ssp app.',
          isCompleted: true
        },
        {
          id: 3,
          title: 'Work on SSP',
          description: 'THis is taks is created to start working on ssp app.',
          isCompleted: true
        }
      ],
      totalCount: 3,
    },
  });
});
taskRoute.get("/:id", (req: Request, res: Response) => {
  const task = tasks.find((reqTask) => reqTask.id == parseInt(req.params.id));
  if (!task) {
    res.status(404).send({
      status: 404,
      message: "Not Found",
      data: {
        result: "Task Not Found",
      },
    });
  } else {
    res.send({
      status: 200,
      message: "success",
      data: {
        details: task,
      },
    });
  }
});
taskRoute.put("/:id", (req: Request, res: Response) => {
  const task = tasks.find((reqTask) => reqTask.id == parseInt(req.params.id));
  if (!task) {
    res.status(404).send({
      status: 404,
      message: "Not Found",
      data: {
        result: "Task Not Found",
      },
    });
  } else {
    (task.title = req.body.title || task.title),
      (task.description = req.body.description || task.description),
      (task.isCompleted = req.body.isCompleted || task.isCompleted);
    res.send({
      status: 200,
      message: "success",
      data: {
        details: task,
      },
    });
  }
});
taskRoute.delete("/:id", (req: Request, res: Response) => {
  const index = tasks.findIndex((reqTask) => reqTask.id === parseInt(req.params.id));
  // console.log(index);
  if (index == -1) {
    res.status(404).send({
      status: 404,
      message: "Not Found",
      data: {
        result: "Task Not Found",
      },
    });
  } else {
    tasks.splice(index, 1);
    res.status(200).send({
      status: 200,
      message: "success",
      data: {
        result: "success",
      },
    });
  }
});
export default taskRoute;
