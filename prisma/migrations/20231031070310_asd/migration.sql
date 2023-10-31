/*
  Warnings:

  - The `enabled` column on the `Menu` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `circle` on the `Style` table. All the data in the column will be lost.
  - You are about to drop the column `singleWeight` on the `Style` table. All the data in the column will be lost.
  - You are about to drop the column `src` on the `Style` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `Transfer` table. All the data in the column will be lost.
  - You are about to drop the column `categoryName` on the `Transfer` table. All the data in the column will be lost.
  - You are about to drop the column `fontPrint` on the `Transfer` table. All the data in the column will be lost.
  - You are about to drop the column `fontPrintName` on the `Transfer` table. All the data in the column will be lost.
  - You are about to drop the column `transferCode` on the `Transfer` table. All the data in the column will be lost.
  - The primary key for the `TransferItem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `Pictures` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[code]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "OrderDetail" DROP CONSTRAINT "OrderDetail_orderId_fkey";

-- DropIndex
DROP INDEX "Transfer_transferCode_key";

-- AlterTable
ALTER TABLE "Menu" DROP COLUMN "enabled",
ADD COLUMN     "enabled" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "orderTotalQuantity" DOUBLE PRECISION,
ADD COLUMN     "orderTotalWeight" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "OrderDetail" ADD COLUMN     "imgSrc" TEXT,
ALTER COLUMN "orderId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Style" DROP COLUMN "circle",
DROP COLUMN "singleWeight",
DROP COLUMN "src",
ADD COLUMN     "baseStyleCode" TEXT,
ADD COLUMN     "designSrc" JSONB,
ADD COLUMN     "isDelete" INTEGER DEFAULT 0,
ADD COLUMN     "programSrc" JSONB,
ADD COLUMN     "programmerId" TEXT,
ADD COLUMN     "realitySrc" JSONB,
ADD COLUMN     "remark" TEXT,
ADD COLUMN     "spec" TEXT,
ADD COLUMN     "specName" TEXT,
ADD COLUMN     "tags" TEXT,
ADD COLUMN     "tech" TEXT,
ADD COLUMN     "techName" TEXT;

-- AlterTable
ALTER TABLE "Transfer" DROP COLUMN "category",
DROP COLUMN "categoryName",
DROP COLUMN "fontPrint",
DROP COLUMN "fontPrintName",
DROP COLUMN "transferCode";

-- AlterTable
ALTER TABLE "TransferItem" DROP CONSTRAINT "TransferItem_pkey",
ADD COLUMN     "isDelete" INTEGER DEFAULT 0,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "TransferItem_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "TransferItem_id_seq";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "code" TEXT;

-- DropTable
DROP TABLE "Pictures";

-- CreateTable
CREATE TABLE "Uploads" (
    "id" TEXT NOT NULL,
    "src" TEXT NOT NULL,
    "name" TEXT,
    "sign" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Uploads_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Uploads_sign_key" ON "Uploads"("sign");

-- CreateIndex
CREATE UNIQUE INDEX "User_code_key" ON "User"("code");

-- AddForeignKey
ALTER TABLE "Style" ADD CONSTRAINT "Style_programmerId_fkey" FOREIGN KEY ("programmerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE SET NULL;

-- AddForeignKey
ALTER TABLE "OrderDetail" ADD CONSTRAINT "OrderDetail_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE SET NULL;
