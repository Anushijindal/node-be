import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();
export const validUser = async (userEmail: string, userPassword: string) => {
  const user = await prisma.emUser.findUnique({
    where: { userEmail },
  });
  console.log(user);
  const match = await bcrypt.compare(userPassword, user!.userPassword);
  //   if(user==null){
  //     return BadRequest("User not found")
  //   }
  if (user && match) {
    return {
      id: user!.userId,
      email: user!.userEmail,
    };
  } else {
    return false;
  }
};
