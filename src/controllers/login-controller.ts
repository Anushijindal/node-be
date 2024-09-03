import { Request, Response } from "express";
// import "../dummyData";
// import { usersData } from "../dummyData/users";
import { Profile } from "../interfaces/profile-interface";
import { usersData } from "../dummyData/users";
import { BadRequest } from "../errorMessages";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();
export const loginUser = async (req: Request, res: Response) => {
  const { userEmail, userPassword } = req.body;
  console.log(userPassword);

  try {
    const user = await prisma.emUser.findUnique({
      where: { userEmail },
    });
    console.log(user);
    const match = await bcrypt.compare(userPassword, user!.userPassword);
    if (user && match) {
      res.send({
        data: { userId: user.userId },
        message: "You are successfully Logged in",
        statusCode: 200,
      });
      res.locals.response = {
        data: { userId: user.userId },
        message: "You are successfully Logged in",
        statusCode: 200,
      };
    } else {
      throw BadRequest("Invalid UserName or Password");
    }
  } catch (err: any) {
    res.send({
      data: {},
      message: err?.message || err?.toString() || "Unknown error",
      statusCode: err?.statusCode || 520,
    });
    res.locals.response = {
      data: {},
      message: err?.message || err?.toString() || "Unknown error",
      statusCode: err?.statusCode || 520,
    };
  }
};
