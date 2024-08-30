import express, { NextFunction, Request, Response } from "express";
import routes from "./routes/index";

const app = express();
const port = 8080;

const middleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await next();
    if (!res.headersSent) {
      const status = res.locals.status || 200;
      const message = res.locals.message || "success";
      const data = res.locals.data || null;

      res.status(status).json({
        status,
        message,
        data,
      });
    }
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      data: { success: false },
    });
  }
};

app.use(express.json());
app.use(middleware);
app.use("/", routes);

// Start the server
app.listen(port, () => {
  console.log(`app is running on port: ${port}`);
});
