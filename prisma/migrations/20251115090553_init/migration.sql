/*
  Warnings:

  - You are about to drop the column `capacity` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `color` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `fullPrice` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `ram` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `screen` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `Product` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[productId]` on the table `ProductDetails` will be added. If there are existing duplicate values, this will fail.
  - Made the column `createdAt` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `productId` to the `ProductDetails` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProductDetails" DROP CONSTRAINT "ProductDetails_id_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "capacity",
DROP COLUMN "color",
DROP COLUMN "fullPrice",
DROP COLUMN "ram",
DROP COLUMN "screen",
DROP COLUMN "year",
ADD COLUMN     "description" TEXT,
ALTER COLUMN "price" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "createdAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "ProductDetails" ADD COLUMN     "productId" INTEGER NOT NULL,
ALTER COLUMN "priceDiscount" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "priceRegular" SET DATA TYPE DOUBLE PRECISION;

-- CreateIndex
CREATE UNIQUE INDEX "ProductDetails_productId_key" ON "ProductDetails"("productId");

-- AddForeignKey
ALTER TABLE "ProductDetails" ADD CONSTRAINT "ProductDetails_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
