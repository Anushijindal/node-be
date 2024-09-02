-- CreateTable
CREATE TABLE "em_countries" (
    "country_id" SERIAL NOT NULL,
    "country_name" VARCHAR(30) NOT NULL,

    CONSTRAINT "em_countries_pkey" PRIMARY KEY ("country_id")
);

-- CreateTable
CREATE TABLE "em_states" (
    "state_id" SERIAL NOT NULL,
    "state_name" VARCHAR(30) NOT NULL,
    "country_id" INTEGER NOT NULL,

    CONSTRAINT "em_states_pkey" PRIMARY KEY ("state_id")
);

-- CreateTable
CREATE TABLE "em_cities" (
    "city_id" SERIAL NOT NULL,
    "city_name" VARCHAR(30) NOT NULL,

    CONSTRAINT "em_cities_pkey" PRIMARY KEY ("city_id")
);

-- CreateIndex
CREATE INDEX "em_states_country_id_idx" ON "em_states"("country_id");

-- AddForeignKey
ALTER TABLE "em_states" ADD CONSTRAINT "em_states_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "em_countries"("country_id") ON DELETE RESTRICT ON UPDATE CASCADE;
