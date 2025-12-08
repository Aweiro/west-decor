/*
  Warnings:

  - Added the required column `description` to the `ProductDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `ProductDetails` table without a default value. This is not possible if the table is not empty.
  - Made the column `screen` on table `ProductDetails` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ram` on table `ProductDetails` required. This step will fail if there are existing NULL values in that column.
  - Made the column `camera` on table `ProductDetails` required. This step will fail if there are existing NULL values in that column.
  - Made the column `processor` on table `ProductDetails` required. This step will fail if there are existing NULL values in that column.
  - Made the column `resolution` on table `ProductDetails` required. This step will fail if there are existing NULL values in that column.
  - Made the column `zoom` on table `ProductDetails` required. This step will fail if there are existing NULL values in that column.
  - Made the column `capacity` on table `ProductDetails` required. This step will fail if there are existing NULL values in that column.
  - Made the column `color` on table `ProductDetails` required. This step will fail if there are existing NULL values in that column.
  - Made the column `priceDiscount` on table `ProductDetails` required. This step will fail if there are existing NULL values in that column.
  - Made the column `priceRegular` on table `ProductDetails` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ProductDetails" ADD COLUMN     "capacityAvailable" TEXT[],
ADD COLUMN     "colorsAvailable" TEXT[],
ADD COLUMN     "description" JSONB NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "namespaceId" TEXT,
ALTER COLUMN "screen" SET NOT NULL,
ALTER COLUMN "ram" SET NOT NULL,
ALTER COLUMN "camera" SET NOT NULL,
ALTER COLUMN "images" DROP DEFAULT,
ALTER COLUMN "cell" DROP DEFAULT,
ALTER COLUMN "processor" SET NOT NULL,
ALTER COLUMN "resolution" SET NOT NULL,
ALTER COLUMN "zoom" SET NOT NULL,
ALTER COLUMN "capacity" SET NOT NULL,
ALTER COLUMN "color" SET NOT NULL,
ALTER COLUMN "priceDiscount" SET NOT NULL,
ALTER COLUMN "priceRegular" SET NOT NULL;
