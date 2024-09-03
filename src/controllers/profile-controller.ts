import { Request, Response } from "express";
import { commonResponse } from "../commonResponse";
import { Profile } from "../interfaces/profile-interface";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const getMyProfile = async (req: Request, res: Response) => {
  const id = req.body.id;
  const user = await prisma.emUser.findUnique({
    where: { userId: id },
  });
  if (user) {
    res.send({
      statusCode: 200,
      message: "success",
      data: {
        firstname: user.userFirstName,
        lastname: user.userLastName,
        email: user.userEmail,
        phone: user.userPhone,
        address: user.userStreetAddress,
        country: user.userCountry,
        state: user.userState,
        city: user.userCity,
        gender: user.userGender,
        role: user.userRoleId,
      },
    });
  }
};
export const editProfile = (req: Request, res: Response) => {
  // const profile:Profile={
  //     userAddress:req.body.userAddress||
  // }
};
