/*
  Warnings:

  - Added the required column `user_role_id` to the `em_users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "em_users" ADD COLUMN     "user_role_id" INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX "em_users_user_role_id_idx" ON "em_users"("user_role_id");

-- AddForeignKey
ALTER TABLE "em_users" ADD CONSTRAINT "em_users_user_role_id_fkey" FOREIGN KEY ("user_role_id") REFERENCES "em_roles"("role_id") ON DELETE RESTRICT ON UPDATE CASCADE;
