import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/app/services/prismaClient';
import { Product } from '@/types/ProductType';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    //
    // ---------------------- CREATE PRODUCT ----------------------
    //
    if (req.method === 'POST') {
      const {
        name,
        screen,
        price,
        fullPrice,
        capacity,
        color,
        ram,
        image,
        year,
        category,
        itemId,
        // description,
        details,
      } = req.body;

      if (!itemId) {
        return res.status(400).json({ error: 'itemId is required' });
      }

      // Check duplicate
      const existing = await prisma.product.findUnique({
        where: { itemId },
      });

      if (existing) {
        return res.status(400).json({ error: 'Product with this itemId already exists' });
      }

      // Create main product
      const product = await prisma.product.create({
        data: {
          name,
          category,
          itemId,
          fullPrice: Number(fullPrice) || 0,
          price: Number(price) || 0,
          screen: screen || '',
          capacity: capacity || '',
          color: color || '',
          ram: ram || '',
          year: Number(year) || 0,
          image: image || '',
        },
      });

      //
      // ----------- CREATE DETAILS (if provided) -----------
      //
      let productDetails = null;

      if (details) {
        try {
          productDetails = await prisma.productDetails.create({
            data: {
              productId: product.itemId,
              name: details.name || '',
              category: category || '',
              screen: details.screen || 'unknown',
              resolution: details.resolution || 'unknown',
              processor: details.processor || 'unknown',
              ram: details.ram || 'unknown',
              camera: details.camera || 'unknown',
              images: details.images || [],
              cell: details.cell || [],
              zoom: details.zoom || 'unknown',
              color: color || '',
              capacityAvailable: details.capacityAvailable || [],
              colorsAvailable: details.colorsAvailable || [],
              namespaceId: details.namespaceId || null,
              description: details.description || {},
              priceDiscount: Number(price) || 0,
              priceRegular: Number(fullPrice) || 0,
              capacity: capacity || '',
            },
          });

          //
          // ---- SYNC COLORS ACROSS SAME NAMESPACE ----
          //
          if (details?.namespaceId && color) {
            const namespace = details.namespaceId;

            // 1) дістаємо всі товари цієї моделі
            const all = await prisma.productDetails.findMany({
              where: { namespaceId: namespace },
              select: { id: true, colorsAvailable: true },
            });

            // 2) збираємо всі унікальні кольори
            const allColors = new Set<string>();

            for (const item of all) {
              item.colorsAvailable
                .filter((c: string) => c.trim() !== '')
                .forEach((c: string) => allColors.add(c));
            }

            // додаємо новий колір
            allColors.add(color);

            const finalColors = Array.from(allColors);

            // 3) оновлюємо ВСІ товари
            await prisma.productDetails.updateMany({
              where: { namespaceId: namespace },
              data: {
                colorsAvailable: finalColors,
              },
            });
          }
        } catch (err: unknown) {
          console.error('ProductDetails creation error:', err);
          let message = 'Unknown server error';

          if (err instanceof Error) {
            message = err.message;
          }

          return res.status(500).json({
            error: 'Failed to create ProductDetails',
            message,
          });
        }

        // ---- SYNC CAPACITIES ACROSS SAME NAMESPACE ----
        if (details?.namespaceId && capacity) {
          const namespace = details.namespaceId;

          const all = await prisma.productDetails.findMany({
            where: { namespaceId: namespace },
            select: { capacity: true },
          });

          const allCaps = new Set<string>();

          for (const item of all) {
            if (item.capacity) allCaps.add(item.capacity);
          }

          // додаємо нову
          allCaps.add(capacity);

          const finalCaps = Array.from(allCaps);

          // оновлюємо у всіх details
          await prisma.productDetails.updateMany({
            where: { namespaceId: namespace },
            data: {
              capacityAvailable: finalCaps,
            },
          });
        }
      }

      return res.status(201).json({ details: productDetails });
    }

    //
    // ---------------------- GET DATA ----------------------
    //
    if (req.method === 'GET') {
      const { category } = req.query;

      // Return all products
      if (!category || category === 'products') {
        const products = await prisma.product.findMany({
          orderBy: { id: 'desc' },
        });
        return res.status(200).json(products);
      }

      // Return details filtered by product.category
      const details = await prisma.productDetails.findMany({
        where: {
          category: category as string,
        },
      });

      return res.status(200).json(details);
    }

    //
    // ---------------------- UPDATE PRODUCT ----------------------
    //
    if (req.method === 'PUT') {
      const {
        name,
        screen,
        price,
        fullPrice,
        capacity,
        color,
        ram,
        image,
        year,
        category,
        itemId,
        details,
      } = req.body;

      if (!itemId) return res.status(400).json({ error: 'itemId is required for update' });

      const existing = await prisma.product.findUnique({ where: { itemId } });
      if (!existing) return res.status(404).json({ error: 'Product not found' });

      const updatedProduct = await prisma.product.update({
        where: { itemId },
        data: {
          name,
          category,
          fullPrice: Number(fullPrice),
          price: Number(price),
          screen,
          capacity,
          color,
          ram,
          year: Number(year),
          image: image || existing.image,
        },
      });

      let updatedDetails = null;

      if (details) {
        const existingDetails = await prisma.productDetails.findUnique({
          where: { productId: itemId },
        });

        console.log(details.capacityAvailable);

        if (existingDetails) {
          const colorChanged = color && color !== existingDetails.color;
          const capacityChanged = capacity && capacity !== existingDetails.capacity;

          updatedDetails = await prisma.productDetails.update({
            where: { productId: itemId },
            data: {
              name: details.name,
              category,
              screen: details.screen,
              resolution: details.resolution,
              processor: details.processor,
              ram: details.ram,
              camera: details.camera,
              images:
                details.images && details.images.length > 0
                  ? details.images
                  : existingDetails.images,
              cell: details.cell || [],
              zoom: details.zoom,
              color,
              namespaceId: details.namespaceId,
              description: details.description,
              priceDiscount: Number(price),
              priceRegular: Number(fullPrice),
              capacity,
            },
          });

          // ---------------------------
          // 🔥 ONLY IF COLOR CHANGED
          // ---------------------------
          if (colorChanged && existingDetails.namespaceId) {
            const namespace = existingDetails.namespaceId;

            // 1) find all products of this model
            const all = await prisma.productDetails.findMany({
              where: { namespaceId: namespace },
              select: { color: true },
            });

            // 2) collect unique colors
            const colors = [...new Set(all.map((i: Product) => i.color).filter(Boolean))];

            // 3) update all their colorsAvailable
            await prisma.productDetails.updateMany({
              where: { namespaceId: namespace },
              data: {
                colorsAvailable: colors,
              },
            });
          }
          // ---------------------------
          // 🔥 SYNC CAPACITIES
          // ---------------------------
          if (capacityChanged && existingDetails.namespaceId) {
            const namespace = existingDetails.namespaceId;

            // 1. дістаємо всі товари цього namespace
            const all = await prisma.productDetails.findMany({
              where: { namespaceId: namespace },
              select: { capacity: true },
            });

            // 2. збираємо унікальні обʼєми
            const capacities = [...new Set(all.map((i: Product) => i.capacity).filter(Boolean))];

            // 3. оновлюємо у всіх details
            await prisma.productDetails.updateMany({
              where: { namespaceId: namespace },
              data: {
                capacityAvailable: capacities,
              },
            });
          }
        } else {
          updatedDetails = await prisma.productDetails.create({
            data: {
              productId: existing.itemId, // ✅ FIXED
              name: details.name,
              category,
              screen: details.screen,
              resolution: details.resolution,
              processor: details.processor,
              ram: details.ram,
              camera: details.camera,
              images: details.images || [],
              cell: details.cell || [],
              zoom: details.zoom,
              color,
              capacityAvailable: existingDetails.capacityAvailable,
              // colorsAvailable: details.colorsAvailable || [],
              namespaceId: details.namespaceId,
              description: details.description,
              priceDiscount: Number(price),
              priceRegular: Number(fullPrice),
              capacity,
            },
          });
        }
      }

      return res.status(200).json({
        message: 'Product updated successfully',
        product: updatedProduct,
        details: updatedDetails,
      });
    }

    //
    // ---------------------- DELETE PRODUCT ----------------------
    //
    if (req.method === 'DELETE') {
      const { itemId } = req.query; // або req.body

      if (!itemId) {
        return res.status(400).json({ error: 'itemId is required for deletion' });
      }

      // 1) Знаходимо продукт
      const existing = await prisma.product.findUnique({ where: { itemId: itemId as string } });
      if (!existing) {
        return res.status(404).json({ error: 'Product not found' });
      }

      // 2) Дістаємо пов’язаний namespaceId і колір
      const details = await prisma.productDetails.findFirst({
        where: { productId: existing.itemId },
      });

      const namespace = details?.namespaceId;
      const deletedColor = details?.color;

      // 3) Видаляємо details
      await prisma.productDetails.deleteMany({
        where: { productId: existing.itemId },
      });

      // 4) Видаляємо продукт
      await prisma.product.delete({
        where: { itemId: existing.itemId },
      });

      // 5) Якщо є namespaceId, оновлюємо colorsAvailable для всіх товарів цієї моделі
      if (namespace && deletedColor) {
        const all = await prisma.productDetails.findMany({
          where: { namespaceId: namespace },
          select: { id: true, color: true },
        });

        const allColors = new Set<string>();

        for (const item of all) {
          if (item.color) allColors.add(item.color);
        }

        const finalColors = Array.from(allColors); // deletedColor вже не буде, бо товар видалено

        // Оновлюємо colorsAvailable
        await prisma.productDetails.updateMany({
          where: { namespaceId: namespace },
          data: { colorsAvailable: finalColors },
        });
      }

      // 6) Оновлюємо capacityAvailable після видалення
      if (namespace && details?.capacity) {
        const allCaps = await prisma.productDetails.findMany({
          where: { namespaceId: namespace },
          select: { capacity: true },
        });

        const uniqueCaps = [...new Set(allCaps.map((i: Product) => i.capacity).filter(Boolean))];

        await prisma.productDetails.updateMany({
          where: { namespaceId: namespace },
          data: { capacityAvailable: uniqueCaps },
        });
      }

      return res.status(200).json({ message: 'Product deleted successfully' });
    }

    //
    // -------- METHOD NOT ALLOWED --------
    //
    if (!['GET', 'POST', 'PUT', 'DELETE'].includes(req.method as string)) {
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error: unknown) {
    console.error('API ERROR FULL:', error);

    let message = 'Unknown error';
    let stack = undefined;

    if (error instanceof Error) {
      message = error.message;
      stack = error.stack;
    }

    return res.status(500).json({
      error: 'Server error',
      message,
      stack,
    });
  }
}
