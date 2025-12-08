/*
  Warnings:

  - The primary key for the `ProductDetails` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `productId` on the `ProductDetails` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductDetails" DROP CONSTRAINT "ProductDetails_productId_fkey";

-- AlterTable
ALTER TABLE "ProductDetails" DROP CONSTRAINT "ProductDetails_pkey",
DROP COLUMN "productId",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "ProductDetails_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ProductDetails_id_seq";

-- AddForeignKey
ALTER TABLE "ProductDetails" ADD CONSTRAINT "ProductDetails_id_fkey" FOREIGN KEY ("id") REFERENCES "Product"("itemId") ON DELETE RESTRICT ON UPDATE CASCADE;
