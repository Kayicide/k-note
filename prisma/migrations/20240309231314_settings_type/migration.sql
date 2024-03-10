/*
  Warnings:

  - The `type` column on the `Setting` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `name` to the `Setting` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "SettingType" AS ENUM ('BOOLEAN', 'STRING', 'NUMBER');

-- AlterTable
ALTER TABLE "Setting" ADD COLUMN     "name" TEXT NOT NULL,
DROP COLUMN "type",
ADD COLUMN     "type" "SettingType" NOT NULL DEFAULT 'BOOLEAN';
