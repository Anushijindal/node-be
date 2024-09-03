import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import {
  createUser,
  validEmail,
  validPassword,
} from "../services/signin.service";
import { BadRequest } from "../errorMessages";
const prisma = new PrismaClient();
export const signinUser = async (req: Request, res: Response) => {
  const { email, password, firstname, lastname } = req.body;
  try {
    if (!email) {
      throw BadRequest("Please Enter Email");
    }
    if (!password) {
      throw BadRequest("Please Enter password");
    }
    if (!firstname) {
      throw BadRequest("Please Enter firstname");
    }
    if (!lastname) {
      throw BadRequest("Please Enter lastname");
    }
    const isEmailValid: boolean = await validEmail(email);
    if (!isEmailValid) {
      throw BadRequest("Please Enter Valid Email Address");
    }
    const pass: boolean = validPassword(password);
    // console.log(pass);

    if (!pass) {
      throw BadRequest("Please Enter Valid Password.");
    }
    if (email && password && firstname && lastname) {
      const isCreated = await createUser(email, password, firstname, lastname);
      console.log(isCreated);

      if (isCreated == true) {
        res.send({
          data: { success: true },
          message: "You are successfully signed in",
          statusCode: 200,
        });
        // res.locals.response = {
        //   data: { success: true },
        //   message: "You are successfully signed in",
        //   statusCode: 200,
        // };
      } else {
        throw BadRequest("something went wrong");
      }
    } else {
      throw BadRequest("Please Insert All Fields");
    }
  } catch (err: any) {
    res.locals.response = {
      data: {},
      message: err?.message || err?.toString() || "Unknown error",
      statusCode: err?.statusCode || 520,
    };
  }
};
