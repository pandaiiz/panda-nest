/*
  Warnings:

  - You are about to drop the column `menus` on the `Role` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Menu" ADD COLUMN     "roleId" TEXT;

-- AlterTable
ALTER TABLE "Role" DROP COLUMN "menus";

-- AddForeignKey
ALTER TABLE "Menu" ADD CONSTRAINT "Menu_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE SET NULL ON UPDATE SET NULL;
