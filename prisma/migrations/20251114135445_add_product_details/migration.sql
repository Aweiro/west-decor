/*
  Warnings:

  - You are about to drop the column `capacity` on the `ProductDetails` table. All the data in the column will be lost.
  - You are about to drop the column `namespaceId` on the `ProductDetails` table. All the data in the column will be lost.
  - You are about to drop the column `priceDiscount` on the `ProductDetails` table. All the data in the column will be lost.
  - You are about to drop the column `priceRegular` on the `ProductDetails` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[productId]` on the table `ProductDetails` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `processor` to the `ProductDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `ProductDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resolution` to the `ProductDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zoom` to the `ProductDetails` table without a default value. This is not possible if the table is not empty.
  - Made the column `screen` on table `ProductDetails` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ram` on table `ProductDetails` required. This step will fail if there are existing NULL values in that column.
  - Made the column `camera` on table `ProductDetails` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `ProductDetails` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "ProductDetails" DROP CONSTRAINT "ProductDetails_namespaceId_fkey";

-- DropIndex
DROP INDEX "ProductDetails_namespaceId_key";

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "itemId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ProductDetails" DROP COLUMN "capacity",
DROP COLUMN "namespaceId",
DROP COLUMN "priceDiscount",
DROP COLUMN "priceRegular",
ADD COLUMN     "capacityAvailable" TEXT[],
ADD COLUMN     "cell" TEXT[],
ADD COLUMN     "processor" TEXT NOT NULL,
ADD COLUMN     "productId" INTEGER NOT NULL,
ADD COLUMN     "resolution" TEXT NOT NULL,
ADD COLUMN     "zoom" TEXT NOT NULL,
ALTER COLUMN "screen" SET NOT NULL,
ALTER COLUMN "ram" SET NOT NULL,
ALTER COLUMN "camera" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ProductDetails_productId_key" ON "ProductDetails"("productId");

-- AddForeignKey
ALTER TABLE "ProductDetails" ADD CONSTRAINT "ProductDetails_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
