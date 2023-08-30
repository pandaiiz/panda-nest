/*
  Warnings:

  - You are about to drop the `_OrderDetailToSpecifications` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_OrderDetailToSpecifications" DROP CONSTRAINT "_OrderDetailToSpecifications_A_fkey";

-- DropForeignKey
ALTER TABLE "_OrderDetailToSpecifications" DROP CONSTRAINT "_OrderDetailToSpecifications_B_fkey";

-- DropTable
DROP TABLE "_OrderDetailToSpecifications";
