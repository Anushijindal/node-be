import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
import bcrypt from "bcrypt";
export const createUser = async (
  email: string,
  password: string,
  firstname: string,
  lastname: string
): Promise<boolean> => {
  password = await bcrypt.hash(password, 10);
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
export const validEmail = async (email: string) => {
  const pattern = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/;
  if (pattern.test(email)) {
    return true;
  } else {
    return false;
  }
};
export const validPassword =  (password: string) => {
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  if (passwordRegex.test(password)) {
    return true;
  } else {
    return false;
  }
};
