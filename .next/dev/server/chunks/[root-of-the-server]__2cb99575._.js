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
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/bcryptjs [external] (bcryptjs, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("bcryptjs");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/src/lib/adminAuth.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "clearAdminSessionCookie",
    ()=>clearAdminSessionCookie,
    "createAdminSessionToken",
    ()=>createAdminSessionToken,
    "isAdminAuthenticated",
    ()=>isAdminAuthenticated,
    "requireAdminApiAuth",
    ()=>requireAdminApiAuth,
    "setAdminSessionCookie",
    ()=>setAdminSessionCookie,
    "validateAdminCredentials",
    ()=>validateAdminCredentials
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$bcryptjs__$5b$external$5d$__$28$bcryptjs$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/bcryptjs [external] (bcryptjs, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$bcryptjs__$5b$external$5d$__$28$bcryptjs$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$bcryptjs__$5b$external$5d$__$28$bcryptjs$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const SESSION_COOKIE_NAME = 'admin_session';
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7;
const toBase64Url = (value)=>Buffer.from(value).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
const fromBase64Url = (value)=>{
    const normalized = value.replace(/-/g, '+').replace(/_/g, '/');
    const padding = normalized.length % 4;
    const base64 = padding ? normalized.padEnd(normalized.length + (4 - padding), '=') : normalized;
    return Buffer.from(base64, 'base64').toString('utf8');
};
const getSessionSecret = ()=>{
    const secret = process.env.ADMIN_SESSION_SECRET;
    if (!secret) {
        throw new Error('ADMIN_SESSION_SECRET is not configured');
    }
    return secret;
};
const signPayload = (payloadPart)=>{
    const signature = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["default"].createHmac('sha256', getSessionSecret()).update(payloadPart).digest('base64');
    return signature.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
};
const timingSafeEqual = (left, right)=>{
    const leftBuffer = Buffer.from(left);
    const rightBuffer = Buffer.from(right);
    if (leftBuffer.length !== rightBuffer.length) {
        return false;
    }
    return __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["default"].timingSafeEqual(leftBuffer, rightBuffer);
};
const parseCookies = (cookieHeader)=>{
    if (!cookieHeader) {
        return {};
    }
    return cookieHeader.split(';').reduce((acc, chunk)=>{
        const index = chunk.indexOf('=');
        if (index === -1) {
            return acc;
        }
        const key = chunk.slice(0, index).trim();
        const value = chunk.slice(index + 1).trim();
        acc[key] = decodeURIComponent(value);
        return acc;
    }, {});
};
const getTokenFromRequest = (req)=>parseCookies(req.headers.cookie)[SESSION_COOKIE_NAME];
const verifyToken = (token)=>{
    if (!token) {
        return null;
    }
    const [payloadPart, signaturePart] = token.split('.');
    if (!payloadPart || !signaturePart) {
        return null;
    }
    const expected = signPayload(payloadPart);
    if (!timingSafeEqual(expected, signaturePart)) {
        return null;
    }
    try {
        const payload = JSON.parse(fromBase64Url(payloadPart));
        if (!payload?.sub || !payload?.exp) {
            return null;
        }
        if (payload.exp <= Math.floor(Date.now() / 1000)) {
            return null;
        }
        return payload;
    } catch  {
        return null;
    }
};
const appendSetCookie = (res, cookie)=>{
    const existing = res.getHeader('Set-Cookie');
    if (!existing) {
        res.setHeader('Set-Cookie', cookie);
        return;
    }
    if (Array.isArray(existing)) {
        res.setHeader('Set-Cookie', [
            ...existing,
            cookie
        ]);
        return;
    }
    res.setHeader('Set-Cookie', [
        String(existing),
        cookie
    ]);
};
const isAdminAuthenticated = (req)=>Boolean(verifyToken(getTokenFromRequest(req)));
const createAdminSessionToken = (username)=>{
    const payload = {
        sub: username,
        exp: Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS
    };
    const payloadPart = toBase64Url(JSON.stringify(payload));
    const signaturePart = signPayload(payloadPart);
    return `${payloadPart}.${signaturePart}`;
};
const setAdminSessionCookie = (res, token)=>{
    const secure = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '';
    const cookie = `${SESSION_COOKIE_NAME}=${encodeURIComponent(token)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${SESSION_TTL_SECONDS}${secure}`;
    appendSetCookie(res, cookie);
};
const clearAdminSessionCookie = (res)=>{
    const secure = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '';
    const cookie = `${SESSION_COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0${secure}`;
    appendSetCookie(res, cookie);
};
const requireAdminApiAuth = (req, res)=>{
    if (isAdminAuthenticated(req)) {
        return true;
    }
    res.status(401).json({
        error: 'Неавторизовано'
    });
    return false;
};
const validateAdminCredentials = async (username, password)=>{
    const expectedUsername = process.env.ADMIN_USERNAME;
    const passwordHash = process.env.ADMIN_PASSWORD_HASH || (process.env.ADMIN_PASSWORD?.startsWith('$2') ? process.env.ADMIN_PASSWORD : undefined);
    const plainPassword = process.env.ADMIN_PASSWORD;
    if (!expectedUsername || !passwordHash && !plainPassword) {
        return false;
    }
    if (!timingSafeEqual(username, expectedUsername)) {
        return false;
    }
    if (passwordHash) {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$bcryptjs__$5b$external$5d$__$28$bcryptjs$2c$__esm_import$29$__["default"].compare(password, passwordHash);
    }
    return timingSafeEqual(password, plainPassword);
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/pages/api/products.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$prismaClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/services/prismaClient.ts [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$adminAuth$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/adminAuth.ts [api] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$adminAuth$2e$ts__$5b$api$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$adminAuth$2e$ts__$5b$api$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
async function handler(req, res) {
    try {
        const method = req.method;
        const writeMethods = [
            'POST',
            'PUT',
            'PATCH',
            'DELETE'
        ];
        if (writeMethods.includes(method) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$adminAuth$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["requireAdminApiAuth"])(req, res)) {
            return;
        }
        //
        // ---------------------- CREATE PRODUCT ----------------------
        //
        if (req.method === 'POST') {
            const { name, screen, price, fullPrice, capacity, color, ram, image, year, category, itemId, // description,
            details, isActive } = req.body;
            if (!itemId) {
                return res.status(400).json({
                    error: "itemId обов'язковий"
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
                    error: 'Товар з таким itemId вже існує'
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
                    image: image || '',
                    isActive: isActive ?? true
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
                    let message = 'Невідома помилка сервера';
                    if (err instanceof Error) {
                        message = err.message;
                    }
                    return res.status(500).json({
                        error: 'Не вдалося створити ProductDetails',
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
            const { category, admin } = req.query;
            if (admin === 'true' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$adminAuth$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["requireAdminApiAuth"])(req, res)) {
                return;
            }
            // Return all products
            if (!category || category === 'products') {
                const products = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$prismaClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].product.findMany({
                    where: admin === 'true' ? {} : {
                        isActive: true
                    },
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
            const { name, screen, price, fullPrice, capacity, color, ram, image, year, category, itemId, details, isActive } = req.body;
            if (!itemId) return res.status(400).json({
                error: "Для оновлення потрібен itemId"
            });
            const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$prismaClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].product.findUnique({
                where: {
                    itemId
                }
            });
            if (!existing) return res.status(404).json({
                error: 'Товар не знайдено'
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
                    image: image || existing.image,
                    isActive: Boolean(isActive)
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
                            // capacityAvailable: existingDetails.capacityAvailable,
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
                message: 'Товар успішно оновлено',
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
                    error: "Для видалення потрібен itemId"
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
                    error: 'Товар не знайдено'
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
                message: 'Товар успішно видалено'
            });
        }
        if (req.method === 'PATCH') {
            const { itemId, isActive } = req.body;
            if (!itemId || typeof isActive !== 'boolean') {
                return res.status(400).json({
                    error: "Потрібні itemId та isActive"
                });
            }
            const product = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$prismaClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].product.update({
                where: {
                    itemId
                },
                data: {
                    isActive
                }
            });
            return res.status(200).json({
                product
            });
        }
        //
        // -------- METHOD NOT ALLOWED --------
        //
        if (![
            'GET',
            'POST',
            'PUT',
            'PATCH',
            'DELETE'
        ].includes(req.method)) {
            res.setHeader('Allow', [
                'GET',
                'POST',
                'PUT',
                'PATCH',
                'DELETE'
            ]);
            return res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        console.error('API ERROR FULL:', error);
        let message = 'Невідома помилка';
        let stack = undefined;
        if (error instanceof Error) {
            message = error.message;
            stack = error.stack;
        }
        return res.status(500).json({
            error: 'Помилка сервера',
            message,
            stack
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2cb99575._.js.map