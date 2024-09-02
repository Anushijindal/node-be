import { Request, Response } from "express";
// import "../dummyData";
// import { usersData } from "../dummyData/users";
import { Profile } from "../interfaces/profile-interface";
import { usersData } from "../dummyData/users";
import { BadRequest } from "../errorMessages";

export const loginUser = (req: Request, res: Response) => {
  const { userEmail, userPassword } = req.body;
  const user = usersData.find(
    (user: Profile) =>
      user.userEmail == userEmail && user.userPassword == userPassword
  );

  console.log(user);
  try {
    if (user) {
      res.locals.response = {
        data: { userId: user.userId },
        message: "You are successfully Logged in",
        statusCode: 200,
      };
    } else {
      throw BadRequest("Invalid UserName or Password");
    }
  } catch (err: any) {
    res.locals.response = {
      data: {},
      message: err?.message || err?.toString() || "Unknown error",
      statusCode: err?.statusCode || 520,
    };
  }
};
