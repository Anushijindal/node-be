import express, { NextFunction, Request, Response } from "express";
import routes from "./routes/index";
import dotenv from "dotenv";
import { PORT } from "./config";
const jwt = require("jsonwebtoken");
const app = express();
const port = PORT;
dotenv.config();
dotenv.config();
const middleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await next();
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

app.use(express.json());
app.use(middleware);
app.use("/", routes);

// Start the server
app.listen(port, () => {
  console.log(`app is running on port:${port}`);
});
