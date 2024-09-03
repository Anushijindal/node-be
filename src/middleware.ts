import { Response,Request,NextFunction } from "express";


export const middleware =  (req: Request, res: Response, next: NextFunction) => {
    try {
       next();
      if (!res.headersSent) {
        const { data, message, statusCode } = res.locals.response;
        res.status(statusCode).json({
          statusCode,
          message,
          data,
        });
      }
    } catch (err: any) {
      res.locals.response = {
        data: {},
        message: err?.message || err?.toString() || "Unknown error",
        statusCode: err?.statusCode || 520,
      };
    }
  };