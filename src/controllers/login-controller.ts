import { NextFunction, Request, Response } from "express";
// import "../dummyData";
// import { usersData } from "../dummyData/users";
import { BadRequest, NotFound, UnAuthorized } from "../errorMessages";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { isEmailExists, validUser } from "../services/login.service";
import { generateJwtToken } from "../services/jwt.service";
const prisma = new PrismaClient();
export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
      const profileToken = await generateJwtToken(valid);
      res.locals.response = {
        data: { success: true, jwtToken: profileToken },
        message: "You are successfully Logged in",
        statusCode: 200,
      };
      return next();
    } else {
      throw UnAuthorized("Invalid Password");
    }
  } catch (err: any) {
    res.locals.response = {
      data: {},
      message: err?.message || err?.toString() || "Unknown error",
      statusCode: err?.statusCode || 520,
    };
    return next();
  }
};
