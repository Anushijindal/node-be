import { Request, Response } from "express";
// import "../dummyData";
// import { usersData } from "../dummyData/users";
import { BadRequest, NotFound, UnAuthorized } from "../errorMessages";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { isEmailExists, validUser } from "../services/login.service";
const prisma = new PrismaClient();
export const loginUser = async (req: Request, res: Response) => {
  const { userEmail, userPassword } = req.body;
  console.log(userPassword);

  try {
    if (!userEmail) {
      throw BadRequest("Please Enter Email.");
    }
    if (!userPassword) {
      throw BadRequest("Please Enter Password.");
    }
    const emailExists: boolean = await isEmailExists(userEmail);
    if (!emailExists) {
      throw NotFound("Email doesn't exists");
    }
    const valid = await validUser(userEmail, userPassword);
    console.log(valid);

    if (valid) {
      res.send({
        data: { userId: valid.id },
        message: "You are successfully Logged in",
        statusCode: 200,
      });
      res.locals.response = {
        data: { userId: valid.email },
        message: "You are successfully Logged in",
        statusCode: 200,
      };
    } else {
      throw UnAuthorized("Invalid UserName or Password");
    }
  } catch (err: any) {
    res.status(err.statusCode || 520).send({
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
