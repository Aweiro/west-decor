/*
  Warnings:

  - Added the required column `priceDiscount` to the `ProductDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priceRegular` to the `ProductDetails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProductDetails" ADD COLUMN     "priceDiscount" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "priceRegular" DOUBLE PRECISION NOT NULL;
