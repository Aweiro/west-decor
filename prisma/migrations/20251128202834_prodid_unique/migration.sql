/*
  Warnings:

  - A unique constraint covering the columns `[productId]` on the table `ProductDetails` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ProductDetails_productId_key" ON "ProductDetails"("productId");
