/*
  Warnings:

  - You are about to drop the column `categoryNumber` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `circleNumber` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `singleWeight` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `styleNumber` on the `Customer` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[customerCode]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "categoryNumber",
DROP COLUMN "circleNumber",
DROP COLUMN "singleWeight",
DROP COLUMN "styleNumber",
ADD COLUMN     "contactsName" TEXT,
ADD COLUMN     "contactsPhone" TEXT,
ADD COLUMN     "name" TEXT,
ADD COLUMN     "telephone" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Customer_customerCode_key" ON "Customer"("customerCode");
