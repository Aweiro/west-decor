/*
  Warnings:

  - The primary key for the `ProductDetails` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `ProductDetails` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `productId` to the `ProductDetails` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProductDetails" DROP CONSTRAINT "ProductDetails_id_fkey";

-- AlterTable
ALTER TABLE "ProductDetails" DROP CONSTRAINT "ProductDetails_pkey",
ADD COLUMN     "productId" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "ProductDetails_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "ProductDetails" ADD CONSTRAINT "ProductDetails_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("itemId") ON DELETE RESTRICT ON UPDATE CASCADE;
