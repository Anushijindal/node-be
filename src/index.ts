import express, { NextFunction, Request, Response } from "express";
import routes from "./routes/index";
import { PORT } from "./config";
import cors from "cors";
// import { middleware } from "./middleware";
// import signinRoutes from "./routes/signin-routes";
const jwt = require("jsonwebtoken");
const app = express();
const port = PORT;
app.use(cors());
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
app.use("/", routes);
app.use(middleware);

// Start the server
app.listen(port, () => {
  console.log(`app is running on port:${port}`);
});
