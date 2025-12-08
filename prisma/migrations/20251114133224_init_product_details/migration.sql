/*
  Warnings:

  - You are about to drop the column `category` on the `ProductDetails` table. All the data in the column will be lost.
  - You are about to drop the column `cell` on the `ProductDetails` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `ProductDetails` table. All the data in the column will be lost.
  - You are about to drop the column `processor` on the `ProductDetails` table. All the data in the column will be lost.
  - You are about to drop the column `resolution` on the `ProductDetails` table. All the data in the column will be lost.
  - You are about to drop the column `zoom` on the `ProductDetails` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "itemId" DROP DEFAULT;

-- AlterTable
ALTER TABLE "ProductDetails" DROP COLUMN "category",
DROP COLUMN "cell",
DROP COLUMN "name",
DROP COLUMN "processor",
DROP COLUMN "resolution",
DROP COLUMN "zoom",
ADD COLUMN     "colorsAvailable" TEXT[],
ADD COLUMN     "description" JSONB,
ADD COLUMN     "images" TEXT[],
ALTER COLUMN "capacity" DROP NOT NULL,
ALTER COLUMN "priceRegular" DROP NOT NULL,
ALTER COLUMN "priceRegular" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "priceDiscount" DROP NOT NULL,
ALTER COLUMN "priceDiscount" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "screen" DROP NOT NULL,
ALTER COLUMN "ram" DROP NOT NULL,
ALTER COLUMN "camera" DROP NOT NULL;
