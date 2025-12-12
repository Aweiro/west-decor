module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/src/app/services/prismaClient.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
const prisma = new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]();
console.log(prisma);
const __TURBOPACK__default__export__ = prisma;
}),
"[project]/src/pages/api/products.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$prismaClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/services/prismaClient.ts [api] (ecmascript)");
;
async function handler(req, res) {
    try {
        //
        // ---------------------- CREATE PRODUCT ----------------------
        //
        if (req.method === 'POST') {
            const { name, screen, price, fullPrice, capacity, color, ram, image, year, category, itemId, // description,
            details } = req.body;
            if (!itemId) {
                return res.status(400).json({
                    error: 'itemId is required'
                });
            }
            // Check duplicate
            const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$prismaClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].product.findUnique({
                where: {
                    itemId
                }
            });
            if (existing) {
                return res.status(400).json({
                    error: 'Product with this itemId already exists'
                });
            }
            // Create main product
            const product = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$prismaClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].product.create({
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
                    image: image || ''
                }
            });
            //
            // ----------- CREATE DETAILS (if provided) -----------
            //
            let productDetails = null;
            if (details) {
                try {
                    productDetails = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$prismaClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].productDetails.create({
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
                            capacity: capacity || ''
                        }
                    });
                    //
                    // ---- SYNC COLORS ACROSS SAME NAMESPACE ----
                    //
                    if (details?.namespaceId && color) {
                        const namespace = details.namespaceId;
                        // 1) дістаємо всі товари цієї моделі
                        const all = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$prismaClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].productDetails.findMany({
                            where: {
                                namespaceId: namespace
                            },
                            select: {
                                id: true,
                                colorsAvailable: true
                            }
                        });
                        // 2) збираємо всі унікальні кольори
                        const allColors = new Set();
                        for (const item of all){
                            item.colorsAvailable.filter((c)=>c.trim() !== '').forEach((c)=>allColors.add(c));
                        }
                        // додаємо новий колір
                        allColors.add(color);
                        const finalColors = Array.from(allColors);
                        // 3) оновлюємо ВСІ товари
                        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$prismaClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].productDetails.updateMany({
                            where: {
                                namespaceId: namespace
                            },
                            data: {
                                colorsAvailable: finalColors
                            }
                        });
                    }
                } catch (err) {
                    console.error('ProductDetails creation error:', err);
                    let message = 'Unknown server error';
                    if (err instanceof Error) {
                        message = err.message;
                    }
                    return res.status(500).json({
                        error: 'Failed to create ProductDetails',
                        message
                    });
                }
                // ---- SYNC CAPACITIES ACROSS SAME NAMESPACE ----
                if (details?.namespaceId && capacity) {
                    const namespace = details.namespaceId;
                    const all = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$prismaClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].productDetails.findMany({
                        where: {
                            namespaceId: namespace
                        },
                        select: {
                            capacity: true
                        }
                    });
                    const allCaps = new Set();
                    for (const item of all){
                        if (item.capacity) allCaps.add(item.capacity);
                    }
                    // додаємо нову
                    allCaps.add(capacity);
                    const finalCaps = Array.from(allCaps);
                    // оновлюємо у всіх details
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$prismaClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].productDetails.updateMany({
                        where: {
                            namespaceId: namespace
                        },
                        data: {
                            capacityAvailable: finalCaps
                        }
                    });
                }
            }
            return res.status(201).json({
                details: productDetails
            });
        }
        //
        // ---------------------- GET DATA ----------------------
        //
        if (req.method === 'GET') {
            const { category } = req.query;
            // Return all products
            if (!category || category === 'products') {
                const products = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$prismaClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].product.findMany({
                    orderBy: {
                        id: 'desc'
                    }
                });
                return res.status(200).json(products);
            }
            // Return details filtered by product.category
            const details = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$prismaClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].productDetails.findMany({
                where: {
                    category: category
                }
            });
            return res.status(200).json(details);
        }
        //
        // ---------------------- UPDATE PRODUCT ----------------------
        //
        if (req.method === 'PUT') {
            const { name, screen, price, fullPrice, capacity, color, ram, image, year, category, itemId, details } = req.body;
            if (!itemId) return res.status(400).json({
                error: 'itemId is required for update'
            });
            const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$prismaClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].product.findUnique({
                where: {
                    itemId
                }
            });
            if (!existing) return res.status(404).json({
                error: 'Product not found'
            });
            const updatedProduct = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$prismaClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].product.update({
                where: {
                    itemId
                },
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
                    image: image || existing.image
                }
            });
            let updatedDetails = null;
            if (details) {
                const existingDetails = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$prismaClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].productDetails.findUnique({
                    where: {
                        productId: itemId
                    }
                });
                console.log(details.capacityAvailable);
                if (existingDetails) {
                    const colorChanged = color && color !== existingDetails.color;
                    const capacityChanged = capacity && capacity !== existingDetails.capacity;
                    updatedDetails = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$prismaClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].productDetails.update({
                        where: {
                            productId: itemId
                        },
                        data: {
                            name: details.name,
                            category,
                            screen: details.screen,
                            resolution: details.resolution,
                            processor: details.processor,
                            ram: details.ram,
                            camera: details.camera,
                            images: details.images && details.images.length > 0 ? details.images : existingDetails.images,
                            cell: details.cell || [],
                            zoom: details.zoom,
                            color,
                            namespaceId: details.namespaceId,
                            description: details.description,
                            priceDiscount: Number(price),
                            priceRegular: Number(fullPrice),
                            capacity
                        }
                    });
                    // ---------------------------
                    // 🔥 ONLY IF COLOR CHANGED
                    // ---------------------------
                    if (colorChanged && existingDetails.namespaceId) {
                        const namespace = existingDetails.namespaceId;
                        // 1) find all products of this model
                        const all = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$prismaClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].productDetails.findMany({
                            where: {
                                namespaceId: namespace
                            },
                            select: {
                                color: true
                            }
                        });
                        // 2) collect unique colors
                        const colors = [
                            ...new Set(all.map((i)=>i.color).filter(Boolean))
                        ];
                        // 3) update all their colorsAvailable
                        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$prismaClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].productDetails.updateMany({
                            where: {
                                namespaceId: namespace
                            },
                            data: {
                                colorsAvailable: colors
                            }
                        });
                    }
                    // ---------------------------
                    // 🔥 SYNC CAPACITIES
                    // ---------------------------
                    if (capacityChanged && existingDetails.namespaceId) {
                        const namespace = existingDetails.namespaceId;
                        // 1. дістаємо всі товари цього namespace
                        const all = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$prismaClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].productDetails.findMany({
                            where: {
                                namespaceId: namespace
                            },
                            select: {
                                capacity: true
                            }
                        });
                        // 2. збираємо унікальні обʼєми
                        const capacities = [
                            ...new Set(all.map((i)=>i.capacity).filter(Boolean))
                        ];
                        // 3. оновлюємо у всіх details
                        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$prismaClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].productDetails.updateMany({
                            where: {
                                namespaceId: namespace
                            },
                            data: {
                                capacityAvailable: capacities
                            }
                        });
                    }
                } else {
                    updatedDetails = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$prismaClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].productDetails.create({
                        data: {
                            productId: existing.itemId,
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
                            capacity
                        }
                    });
                }
            }
            return res.status(200).json({
                message: 'Product updated successfully',
                product: updatedProduct,
                details: updatedDetails
            });
        }
        //
        // ---------------------- DELETE PRODUCT ----------------------
        //
        if (req.method === 'DELETE') {
            const { itemId } = req.query; // або req.body
            if (!itemId) {
                return res.status(400).json({
                    error: 'itemId is required for deletion'
                });
            }
            // 1) Знаходимо продукт
            const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$prismaClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].product.findUnique({
                where: {
                    itemId: itemId
                }
            });
            if (!existing) {
                return res.status(404).json({
                    error: 'Product not found'
                });
            }
            // 2) Дістаємо пов’язаний namespaceId і колір
            const details = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$prismaClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].productDetails.findFirst({
                where: {
                    productId: existing.itemId
                }
            });
            const namespace = details?.namespaceId;
            const deletedColor = details?.color;
            // 3) Видаляємо details
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$prismaClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].productDetails.deleteMany({
                where: {
                    productId: existing.itemId
                }
            });
            // 4) Видаляємо продукт
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$prismaClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].product.delete({
                where: {
                    itemId: existing.itemId
                }
            });
            // 5) Якщо є namespaceId, оновлюємо colorsAvailable для всіх товарів цієї моделі
            if (namespace && deletedColor) {
                const all = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$prismaClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].productDetails.findMany({
                    where: {
                        namespaceId: namespace
                    },
                    select: {
                        id: true,
                        color: true
                    }
                });
                const allColors = new Set();
                for (const item of all){
                    if (item.color) allColors.add(item.color);
                }
                const finalColors = Array.from(allColors); // deletedColor вже не буде, бо товар видалено
                // Оновлюємо colorsAvailable
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$prismaClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].productDetails.updateMany({
                    where: {
                        namespaceId: namespace
                    },
                    data: {
                        colorsAvailable: finalColors
                    }
                });
            }
            // 6) Оновлюємо capacityAvailable після видалення
            if (namespace && details?.capacity) {
                const allCaps = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$prismaClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].productDetails.findMany({
                    where: {
                        namespaceId: namespace
                    },
                    select: {
                        capacity: true
                    }
                });
                const uniqueCaps = [
                    ...new Set(allCaps.map((i)=>i.capacity).filter(Boolean))
                ];
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$prismaClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].productDetails.updateMany({
                    where: {
                        namespaceId: namespace
                    },
                    data: {
                        capacityAvailable: uniqueCaps
                    }
                });
            }
            return res.status(200).json({
                message: 'Product deleted successfully'
            });
        }
        //
        // -------- METHOD NOT ALLOWED --------
        //
        if (![
            'GET',
            'POST',
            'PUT',
            'DELETE'
        ].includes(req.method)) {
            res.setHeader('Allow', [
                'GET',
                'POST',
                'PUT',
                'DELETE'
            ]);
            return res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
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
            stack
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__21f89228._.js.map