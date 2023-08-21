/*
  Warnings:

  - You are about to drop the column `dictCode` on the `Dictionary` table. All the data in the column will be lost.
  - You are about to drop the column `dictName` on the `Dictionary` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Dictionary` table. All the data in the column will be lost.
  - You are about to drop the column `code` on the `DictionaryItem` table. All the data in the column will be lost.
  - You are about to drop the column `dictCode` on the `DictionaryItem` table. All the data in the column will be lost.
  - You are about to drop the column `label` on the `DictionaryItem` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `DictionaryItem` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[key]` on the table `Dictionary` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[itemKey]` on the table `DictionaryItem` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Dictionary" DROP COLUMN "dictCode",
DROP COLUMN "dictName",
DROP COLUMN "status",
ADD COLUMN     "enabled" BOOLEAN DEFAULT true,
ADD COLUMN     "key" TEXT,
ADD COLUMN     "sort" INTEGER,
ADD COLUMN     "title" TEXT;

-- AlterTable
ALTER TABLE "DictionaryItem" DROP COLUMN "code",
DROP COLUMN "dictCode",
DROP COLUMN "label",
DROP COLUMN "status",
ADD COLUMN     "enabled" BOOLEAN DEFAULT true,
ADD COLUMN     "itemKey" TEXT,
ADD COLUMN     "title" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Dictionary_key_key" ON "Dictionary"("key");

-- CreateIndex
CREATE UNIQUE INDEX "DictionaryItem_itemKey_key" ON "DictionaryItem"("itemKey");
