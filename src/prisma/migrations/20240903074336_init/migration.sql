/*
  Warnings:

  - A unique constraint covering the columns `[user_email]` on the table `em_users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "em_users_user_email_key" ON "em_users"("user_email");
