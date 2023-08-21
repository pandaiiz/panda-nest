-- CreateTable
CREATE TABLE "Specifications" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "styleNumber" TEXT,
    "circleNumber" TEXT,
    "singleWeight" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Specifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL,
    "customerCode" TEXT,
    "styleNumber" TEXT,
    "circleNumber" TEXT,
    "singleWeight" TEXT,
    "categoryNumber" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dictionary" (
    "id" TEXT NOT NULL,
    "dictName" TEXT,
    "dictCode" TEXT,
    "status" TEXT,
    "remark" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Dictionary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DictionaryItem" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "dictId" TEXT,
    "dictCode" TEXT,
    "code" TEXT,
    "label" TEXT,
    "status" BOOLEAN,
    "sort" INTEGER,
    "remark" TEXT,

    CONSTRAINT "DictionaryItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DictionaryItem" ADD CONSTRAINT "DictionaryItem_dictId_fkey" FOREIGN KEY ("dictId") REFERENCES "Dictionary"("id") ON DELETE SET NULL ON UPDATE SET NULL;
