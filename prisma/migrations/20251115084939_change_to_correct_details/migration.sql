-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_itemId_fkey";

-- AddForeignKey
ALTER TABLE "ProductDetails" ADD CONSTRAINT "ProductDetails_id_fkey" FOREIGN KEY ("id") REFERENCES "Product"("itemId") ON DELETE RESTRICT ON UPDATE CASCADE;
