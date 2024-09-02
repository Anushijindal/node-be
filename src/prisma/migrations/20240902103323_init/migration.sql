-- CreateTable
CREATE TABLE "em_cities" (
    "city_id" SERIAL NOT NULL,
    "city_name" VARCHAR(30) NOT NULL,
    "state_id" INTEGER NOT NULL,

    CONSTRAINT "em_cities_pkey" PRIMARY KEY ("city_id")
);

-- CreateIndex
CREATE INDEX "em_cities_state_id_idx" ON "em_cities"("state_id");

-- AddForeignKey
ALTER TABLE "em_cities" ADD CONSTRAINT "em_cities_state_id_fkey" FOREIGN KEY ("state_id") REFERENCES "em_states"("state_id") ON DELETE RESTRICT ON UPDATE CASCADE;
