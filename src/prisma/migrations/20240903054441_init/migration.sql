-- AlterTable
ALTER TABLE "em_users" ALTER COLUMN "user_city_name" DROP NOT NULL,
ALTER COLUMN "user_country_name" DROP NOT NULL,
ALTER COLUMN "user_gender" DROP NOT NULL,
ALTER COLUMN "user_phone" DROP NOT NULL,
ALTER COLUMN "user_state_name" DROP NOT NULL,
ALTER COLUMN "user_street_address" DROP NOT NULL;
