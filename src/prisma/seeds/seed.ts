import { PrismaClient } from "@prisma/client";
// const addCountryCityState=require("./add_country_city_state")
import  {addCountryCityState}  from "./add_country_city_state";
import { addUserRoles } from "./add_user_roles";
const prisma = new PrismaClient();
async function main() {
  // addCountryCityState(prisma);
  // addUserRoles(prisma)
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
