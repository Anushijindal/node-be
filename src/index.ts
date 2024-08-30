import express, { NextFunction, Request, Response } from "express";
import routes from "./routes/index";
const app = express();
const port = 8080;
app.use(express.json());
// const middleware = (req: Request, res: Response,next:NextFunction) => {
//   console.log(res);

//   next()
//   //  res.send(res);
// };
app.use("/", routes);
app.listen(port, () => {
  console.log(`app is running on port:${port}`);
});
