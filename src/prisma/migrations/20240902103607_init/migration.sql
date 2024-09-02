/*
  Warnings:

  - You are about to drop the column `user_createdAt` on the `em_users` table. All the data in the column will be lost.
  - You are about to drop the column `user_deletedAt` on the `em_users` table. All the data in the column will be lost.
  - You are about to drop the column `user_updatedAt` on the `em_users` table. All the data in the column will be lost.
  - Added the required column `user_deleted_at` to the `em_users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_updated_at` to the `em_users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "em_users" DROP COLUMN "user_createdAt",
DROP COLUMN "user_deletedAt",
DROP COLUMN "user_updatedAt",
ADD COLUMN     "user_created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "user_deleted_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "user_updated_at" TIMESTAMP(3) NOT NULL;
