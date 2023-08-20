/*
  Warnings:

  - You are about to drop the `MenusOnRoles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "MenusOnRoles" DROP CONSTRAINT "MenusOnRoles_menuId_fkey";

-- DropForeignKey
ALTER TABLE "MenusOnRoles" DROP CONSTRAINT "MenusOnRoles_roleId_fkey";

-- DropTable
DROP TABLE "MenusOnRoles";

-- CreateTable
CREATE TABLE "_MenuToRole" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_MenuToRole_AB_unique" ON "_MenuToRole"("A", "B");

-- CreateIndex
CREATE INDEX "_MenuToRole_B_index" ON "_MenuToRole"("B");

-- AddForeignKey
ALTER TABLE "_MenuToRole" ADD CONSTRAINT "_MenuToRole_A_fkey" FOREIGN KEY ("A") REFERENCES "Menu"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MenuToRole" ADD CONSTRAINT "_MenuToRole_B_fkey" FOREIGN KEY ("B") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;
