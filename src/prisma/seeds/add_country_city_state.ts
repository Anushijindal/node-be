import { PrismaClient } from "@prisma/client";
export const addCountryCityState = async (prisma: PrismaClient) => {
  const india = await prisma.emCountry.create({
    data: { countryName: "INDIA" },
  });

  const usa = await prisma.emCountry.create({
    data: { countryName: "USA" },
  });
  const haryana = await prisma.emState.create({
    data: { stateName: "Haryana", countryId: india.countryId },
  });
  const punjab = await prisma.emState.create({
    data: { stateName: "Punjab", countryId: india.countryId },
  });
  const hawaii = await prisma.emState.create({
    data: { stateName: "Hawaii", countryId: usa.countryId },
  });
  const texas = await prisma.emState.create({
    data: { stateName: "Texas", countryId: usa.countryId },
  });
  const kaithal = await prisma.emCity.create({
    data: { cityName: "Kaithal", stateId: haryana.stateId },
  });
  const pehowa = await prisma.emCity.create({
    data: { cityName: "Pehowa", stateId: haryana.stateId },
  });
  const ludhiana = await prisma.emCity.create({
    data: { cityName: "Ludhiana", stateId: punjab.stateId },
  });
  const patiala = await prisma.emCity.create({
    data: { cityName: "Patiala", stateId: punjab.stateId },
  });
  const hawi = await prisma.emCity.create({
    data: { cityName: "Hawi", stateId: hawaii.stateId },
  });
  const hilo = await prisma.emCity.create({
    data: { cityName: "Hilo", stateId: hawaii.stateId },
  });
  const austin = await prisma.emCity.create({
    data: { cityName: "Austin", stateId: texas.stateId },
  });
  const dallas = await prisma.emCity.create({
    data: { cityName: "Dallas", stateId: texas.stateId },
  });

};

