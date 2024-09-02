/*
  Warnings:

  - The primary key for the `em_users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `userId` on the `em_users` table. All the data in the column will be lost.
  - Added the required column `user_first_name` to the `em_users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "em_users" DROP CONSTRAINT "em_users_pkey",
DROP COLUMN "userId",
ADD COLUMN     "user_first_name" VARCHAR(30) NOT NULL,
ADD COLUMN     "user_id" SERIAL NOT NULL,
ADD CONSTRAINT "em_users_pkey" PRIMARY KEY ("user_id");
