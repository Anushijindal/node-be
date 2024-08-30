import { Request, Response } from "express";
// import "../dummyData";
// import { usersData } from "../dummyData/users";
import { Profile } from "../interfaces/profile-interface";
import { commonResponse } from "../commonResponse";
import { usersData } from "../dummyData/users";

export const loginUser = (req: Request, res: Response) => {
  // const data:Profile
  const { userEmail, userPassword } = req.body;
  const user = usersData.find(
    (user: Profile) =>
      user.userEmail == userEmail && user.userPassword == userPassword
  );

  console.log(user);
  if (user) {
    return commonResponse(req, res, {
      status: 200,
      message: "You are successfully Logged in",
      data: { result: {userId:user.userId} },
    });
  } else {
    return commonResponse(req, res, {
      status: 401,
      message: "Invalid email or password",
      data: { success: false },
    });
  }
};
