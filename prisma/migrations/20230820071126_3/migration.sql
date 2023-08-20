/*
  Warnings:

  - You are about to drop the column `roleId` on the `Menu` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Menu" DROP CONSTRAINT "Menu_roleId_fkey";

-- AlterTable
ALTER TABLE "Menu" DROP COLUMN "roleId";

-- CreateTable
CREATE TABLE "MenusOnRoles" (
    "menuId" TEXT NOT NULL,
    "roleId" TEXT NOT NULL,

    CONSTRAINT "MenusOnRoles_pkey" PRIMARY KEY ("menuId","roleId")
);

-- AddForeignKey
ALTER TABLE "MenusOnRoles" ADD CONSTRAINT "MenusOnRoles_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "Menu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenusOnRoles" ADD CONSTRAINT "MenusOnRoles_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
