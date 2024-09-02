/*
  Warnings:

  - Added the required column `user_city_name` to the `em_users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_country_name` to the `em_users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_deletedAt` to the `em_users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_email` to the `em_users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_gender` to the `em_users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_last_name` to the `em_users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_password` to the `em_users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_phone` to the `em_users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_state_name` to the `em_users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_street_address` to the `em_users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_updatedAt` to the `em_users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Male', 'female');

-- AlterTable
ALTER TABLE "em_users" ADD COLUMN     "user_city_name" VARCHAR(20) NOT NULL,
ADD COLUMN     "user_country_name" VARCHAR(20) NOT NULL,
ADD COLUMN     "user_createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "user_deletedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "user_email" VARCHAR(30) NOT NULL,
ADD COLUMN     "user_gender" "Gender" NOT NULL,
ADD COLUMN     "user_last_name" VARCHAR(30) NOT NULL,
ADD COLUMN     "user_password" VARCHAR(200) NOT NULL,
ADD COLUMN     "user_phone" VARCHAR(10) NOT NULL,
ADD COLUMN     "user_state_name" VARCHAR(20) NOT NULL,
ADD COLUMN     "user_street_address" VARCHAR(60) NOT NULL,
ADD COLUMN     "user_updatedAt" TIMESTAMP(3) NOT NULL;
