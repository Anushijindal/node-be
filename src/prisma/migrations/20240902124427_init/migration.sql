/*
  Warnings:

  - You are about to drop the column `role_deleted_at` on the `em_roles` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "em_roles" DROP COLUMN "role_deleted_at";
