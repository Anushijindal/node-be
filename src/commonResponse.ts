import { Task } from "./interfaces/task-interface";
import { Response, Request } from "express";
interface ResponseInterface {
  status: number;
  message: string;
  data: {
    result?: object;
    details?: object;
    success?: boolean;
    totalCount?: number;
  };
}
export const commonResponse = (
  req: Request,
  res: Response,
  resp: ResponseInterface
) => {
  try {
    const response = {
      status: resp.status,
      message: resp.message,
      data: resp.data,
    };
    return res.send(response);
  } catch (err) {
    return res.send({
      status: 500,
      message: "internal Server Error",
    });
  }
};
