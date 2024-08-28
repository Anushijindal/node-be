import  { Request, Response } from "express";
const express=require("express")
import taskRoute from "./tasks";
const app = express();
const port = 8080;
app.use(express.json());
app.use("/task", taskRoute);
// const server=http.createServer(app);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Port is running!");
});
app.listen(port, () => {
  console.log(`app is running on port:${port}`);
});
