/*
  Warnings:

  - The primary key for the `ProductDetails` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `category` on the `ProductDetails` table. All the data in the column will be lost.
  - The `id` column on the `ProductDetails` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "ProductDetails" DROP CONSTRAINT "ProductDetails_pkey",
DROP COLUMN "category",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "screen" DROP NOT NULL,
ALTER COLUMN "ram" DROP NOT NULL,
ALTER COLUMN "camera" DROP NOT NULL,
ALTER COLUMN "colorsAvailable" SET DEFAULT ARRAY[]::TEXT[],
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "images" SET DEFAULT ARRAY[]::TEXT[],
ALTER COLUMN "capacityAvailable" SET DEFAULT ARRAY[]::TEXT[],
ALTER COLUMN "cell" SET DEFAULT ARRAY[]::TEXT[],
ALTER COLUMN "processor" DROP NOT NULL,
ALTER COLUMN "resolution" DROP NOT NULL,
ALTER COLUMN "zoom" DROP NOT NULL,
ALTER COLUMN "capacity" DROP NOT NULL,
ALTER COLUMN "color" DROP NOT NULL,
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "namespaceId" DROP NOT NULL,
ALTER COLUMN "priceDiscount" DROP NOT NULL,
ALTER COLUMN "priceRegular" DROP NOT NULL,
ADD CONSTRAINT "ProductDetails_pkey" PRIMARY KEY ("id");
