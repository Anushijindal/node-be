import { PrismaClient } from "@prisma/client";

export const addUserRoles = async (prisma: PrismaClient) => {
  await prisma.emRole.createMany({
    data: [
      {
        roleName: "Developer",
      },
      {
        roleName: "Sr. Developer",
      },
      {
        roleName: "Team Lead",
      },
      {
        roleName: "Manager",
      },
      {
        roleName: "CEO",
      },
      {
        roleName: "BDE",
      },
      {
        roleName: "CTO",
      },
      {
        roleName: "Office Boy",
      },
      {
        roleName: "Tester",
      },
      {
        roleName: "Analyst",
      },
    ],
  });
};
