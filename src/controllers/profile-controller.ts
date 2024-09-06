import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { BadRequest, NotFound } from "../errorMessages";
import { verifyToken } from "../services/jwt.service";
dotenv.config();
const prisma = new PrismaClient();
export const getMyProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.headers.authorization) {
      const userId = await verifyToken(req.headers.authorization);
      const loggedUser = await prisma.emUser.findUnique({
        where: { userId: userId },
      });
      if (loggedUser) {
        res.locals.response = {
          statusCode: 200,
          message: "success",
          data: {
            firstname: loggedUser.userFirstName,
            lastname: loggedUser.userLastName,
            email: loggedUser.userEmail,
            phone: loggedUser.userPhone,
            address: loggedUser.userStreetAddress,
            country: loggedUser.userCountry,
            state: loggedUser.userState,
            city: loggedUser.userCity,
            gender: loggedUser.userGender,
            role: loggedUser.userRoleId,
          },
        };
        return next();
      } else {
        throw NotFound("User Doesn't Exist");
      }
    } else {
      throw BadRequest("Authorization is Required!");
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
export const editProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.headers.authorization) {
      let token: string = req.headers.authorization;
      token = token.split(" ")[1];
      const decodedData = jwt.verify(
        token,
        process.env.SECRET_KEY!
      ) as jwt.JwtPayload;
      console.log(decodedData.id);
      const userId = decodedData.id;
      const loggedUser = await prisma.emUser.findUnique({
        where: { userId: userId },
      });
      if (loggedUser) {
        if (req.body) {
          await prisma.emUser.update({
            where: { userId: userId },
            data: {
              userUpdatedAt: new Date(),
              userFirstName: req.body.firstname
                ? req.body.firstname
                : loggedUser.userFirstName,
              userLastName: req.body.lastname
                ? req.body.lastname
                : loggedUser.userLastName,
              userPhone: req.body.phone ? req.body.phone : loggedUser.userPhone,
              userStreetAddress: req.body.address
                ? req.body.address
                : loggedUser.userStreetAddress,
              userCountry: req.body.country
                ? req.body.country
                : loggedUser.userCountry,
              userState: req.body.state ? req.body.state : loggedUser.userState,
              userCity: req.body.city ? req.body.city : loggedUser.userCity,
              userGender: req.body.gender
                ? req.body.gender
                : loggedUser.userGender,
            },
          });
          res.locals.response = {
            statusCode: 200,
            message: "success",
            data: {},
          };
          return next();
        } else {
          throw BadRequest("No Data found");
        }
      } else {
        throw BadRequest("No User found");
      }
    } else {
      throw BadRequest("No Authorization found");
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
