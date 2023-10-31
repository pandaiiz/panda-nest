-- AlterTable
ALTER TABLE "Uploads" ADD COLUMN     "parentId" TEXT;

-- AddForeignKey
ALTER TABLE "Uploads" ADD CONSTRAINT "Uploads_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Uploads"("id") ON DELETE SET NULL ON UPDATE CASCADE;
