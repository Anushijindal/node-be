import { Request, Response } from "express";
import { commonResponse } from "../commonResponse";
import { Profile } from "../interfaces/profile-interface";

export const getMyProfile = (req: Request, res: Response) => {
  //   return res.json("hi");
  return commonResponse(req, res, {
    status: 200,
    message: "success",
    data: {
      result: {
        userAddress: "cheeka",
        userCity: "Kaithal",
        userCountry: "India",
        userEmail: "anushi@gmail.com",
        userFirstName: "Anushi",
        userGender: "female",
        userImage: "abc",
        userLastName: "Jindal",
        userPhone: "9655874634",
        userRoleName: "developer",
        userState: "Haryana",
      },
    },
  });
};
export const editProfile=(req:Request,res:Response)=>{
    // const profile:Profile={
    //     userAddress:req.body.userAddress||
    // }
}