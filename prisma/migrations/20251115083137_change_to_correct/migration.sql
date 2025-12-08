/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Product` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - The primary key for the `ProductDetails` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `productId` on the `ProductDetails` table. All the data in the column will be lost.
  - Added the required column `capacity` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `color` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullPrice` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ram` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `screen` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Made the column `itemId` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `capacity` to the `ProductDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `ProductDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `color` to the `ProductDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `ProductDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `namespaceId` to the `ProductDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priceDiscount` to the `ProductDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priceRegular` to the `ProductDetails` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProductDetails" DROP CONSTRAINT "ProductDetails_productId_fkey";

-- DropIndex
DROP INDEX "ProductDetails_productId_key";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "createdAt",
DROP COLUMN "description",
ADD COLUMN     "capacity" TEXT NOT NULL,
ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "fullPrice" INTEGER NOT NULL,
ADD COLUMN     "ram" TEXT NOT NULL,
ADD COLUMN     "screen" TEXT NOT NULL,
ADD COLUMN     "year" INTEGER NOT NULL,
ALTER COLUMN "price" SET DATA TYPE INTEGER,
ALTER COLUMN "itemId" SET NOT NULL;

-- AlterTable
ALTER TABLE "ProductDetails" DROP CONSTRAINT "ProductDetails_pkey",
DROP COLUMN "productId",
ADD COLUMN     "capacity" TEXT NOT NULL,
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "namespaceId" TEXT NOT NULL,
ADD COLUMN     "priceDiscount" INTEGER NOT NULL,
ADD COLUMN     "priceRegular" INTEGER NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "ProductDetails_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ProductDetails_id_seq";

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "ProductDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
