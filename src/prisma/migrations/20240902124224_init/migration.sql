-- AlterTable
ALTER TABLE "em_projects" ALTER COLUMN "project_deleted_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "em_users" ALTER COLUMN "user_deleted_at" DROP NOT NULL;
