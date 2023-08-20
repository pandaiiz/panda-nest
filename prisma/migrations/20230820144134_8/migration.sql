/*
  Warnings:

  - You are about to drop the `_MenuToRole` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_MenuToRole" DROP CONSTRAINT "_MenuToRole_A_fkey";

-- DropForeignKey
ALTER TABLE "_MenuToRole" DROP CONSTRAINT "_MenuToRole_B_fkey";

-- DropTable
DROP TABLE "_MenuToRole";

-- CreateTable
CREATE TABLE "MenusOnRoles" (
    "roleId" TEXT NOT NULL,
    "menuId" TEXT NOT NULL,

    CONSTRAINT "MenusOnRoles_pkey" PRIMARY KEY ("roleId","menuId")
);

-- AddForeignKey
ALTER TABLE "MenusOnRoles" ADD CONSTRAINT "MenusOnRoles_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenusOnRoles" ADD CONSTRAINT "MenusOnRoles_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "Menu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
