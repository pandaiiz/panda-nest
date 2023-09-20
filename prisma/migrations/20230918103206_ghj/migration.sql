/*
  Warnings:

  - Made the column `orderId` on table `OrderDetail` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "OrderDetail" DROP CONSTRAINT "OrderDetail_orderId_fkey";

-- AlterTable
ALTER TABLE "OrderDetail" ALTER COLUMN "orderId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "OrderDetail" ADD CONSTRAINT "OrderDetail_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
