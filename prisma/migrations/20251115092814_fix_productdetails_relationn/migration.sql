/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `capacityAvailable` on the `ProductDetails` table. All the data in the column will be lost.
  - You are about to drop the column `colorsAvailable` on the `ProductDetails` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `ProductDetails` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `ProductDetails` table. All the data in the column will be lost.
  - You are about to drop the column `namespaceId` on the `ProductDetails` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "createdAt",
ALTER COLUMN "itemId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ProductDetails" DROP COLUMN "capacityAvailable",
DROP COLUMN "colorsAvailable",
DROP COLUMN "description",
DROP COLUMN "name",
DROP COLUMN "namespaceId";
