/*
  Warnings:

  - Added the required column `zoom` to the `ProductDetails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProductDetails" ADD COLUMN     "zoom" TEXT NOT NULL;
