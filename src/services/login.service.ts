import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();
export const validUser = async (email: string, password: string) => {
  const user = await prisma.emUser.findUnique({
    where: { userEmail:email },
  });
  console.log(user);
  const match = await bcrypt.compare(password, user!.userPassword);
  if (user && match) {
    return {
      id: user!.userId,
      email: user!.userEmail,
    };
  } else if (user == null) {
    return {
        message:"user not found"
    }
  } else {
    return false;
  }
};
export const isEmailExists=async(email:string)=>{
    const user = await prisma.emUser.findUnique({
        where: { userEmail:email },
      });
      if(user){
        return true;
      }else{
        return false
      }
}