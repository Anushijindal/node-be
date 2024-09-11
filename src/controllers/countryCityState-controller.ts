import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { BadRequest, NotFound } from "../errorMessages";

const prisma = new PrismaClient();
export const countryController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const countries = await prisma.emCountry.findMany();
  if (countries) {
    res.locals.response = {
      statusCode: 200,
      message: "Success countries",
      data:  countries ,
    };
    return next();
  }
};
export const stateController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const countryName = await req.body.countryName;
    if (req.body.countryName) {
      const id = await prisma.emCountry.findFirst({
        where: { countryName: countryName.toUpperCase() },
        select: { countryId: true },
      });
      if (id != null) {
        const states = await prisma.emState.findMany({
          where: { country: id },
          select: { stateId: true, stateName: true },
        });
        if (states.length) {
          res.locals.response = {
            statusCode: 200,
            message: "success",
            data: states,
          };
          return next();
        } else {
          throw NotFound("States Not Found");
        }
      } else {
        throw NotFound("Invalid Country Name");
      }
    } else {
      throw BadRequest("Country name is required");
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
export const cityController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const stateName = await req.body.stateName;
    if (req.body.stateName) {
      const id = await prisma.emState.findFirst({
        where: {
          stateName:
            stateName.charAt(0).toUpperCase() +
            stateName.slice(1).toLowerCase(),
        },
        select: { stateId: true },
      });
      if (id != null) {
        const cities = await prisma.emCity.findMany({
          where: { state: id },
          select: { cityId: true, cityName: true },
        });
        if (cities.length) {
          res.locals.response = {
            statusCode: 200,
            message: "success",
            data: cities,
          };
          return next();
        } else {
          throw NotFound("Cities Not Found");
        }
      } else {
        throw BadRequest("Invalid City Name");
      }
    } else {
      throw BadRequest("state name is required");
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
