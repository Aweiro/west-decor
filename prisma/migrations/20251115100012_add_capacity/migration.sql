/*
  Warnings:

  - You are about to drop the column `priceDiscount` on the `ProductDetails` table. All the data in the column will be lost.
  - You are about to drop the column `priceRegular` on the `ProductDetails` table. All the data in the column will be lost.
  - You are about to drop the column `zoom` on the `ProductDetails` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ProductDetails" DROP COLUMN "priceDiscount",
DROP COLUMN "priceRegular",
DROP COLUMN "zoom";
