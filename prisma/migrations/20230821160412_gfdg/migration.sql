/*
  Warnings:

  - The `circleNumber` column on the `Specifications` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `singleWeight` column on the `Specifications` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `category` column on the `Specifications` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Specifications" DROP COLUMN "circleNumber",
ADD COLUMN     "circleNumber" JSONB,
DROP COLUMN "singleWeight",
ADD COLUMN     "singleWeight" JSONB,
DROP COLUMN "category",
ADD COLUMN     "category" JSONB;
