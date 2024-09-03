import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
import bcrypt from 'bcrypt';
export const createUser = async (
  email: string,
  password: string,
  firstname: string,
  lastname: string
): Promise<boolean> => {
   password=await bcrypt.hash(password,10);
  try {
    await prisma.emUser.create({
      data: {
        userFirstName: firstname,
        userEmail: email,
        userPassword: password,
        userLastName: lastname,
        userRoleId: 1,
      },
    });
    return true;
  } catch (error) {
    console.error("Error creating user:", error);
    return false;
  }
};
