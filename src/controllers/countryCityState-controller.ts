import { PrismaClient } from "@prisma/client"
import { NextFunction,Request,Response } from "express"


const prisma=new PrismaClient()
export const countryController=async(req:Request,res:Response,next:NextFunction)=>{
    const countries=await prisma.emCountry.findMany();
    if(countries){
        res.locals.response={
            statusCode:200,
            message:"Success countries",
            data:{countries}
        }
       return next();
    }
}
export const stateController=async(req:Request,res:Response,next:NextFunction)=>{
    const countryName=await req.body.countryName;
    // const countryId=await prisma.emC
}