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
"[project]/src/pages/api/orders.ts [api] (ecmascript)", ((__turbopack_context__) => {
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
const allowedStatuses = [
    'new',
    'in_progress',
    'done',
    'canceled'
];
const formatOrderMessage = (payload)=>{
    const lines = [
        `Нове замовлення #${payload.id}`,
        '',
        `Ім'я: ${payload.name}`,
        `Телефон: ${payload.phone}`
    ];
    if (payload.comment) {
        lines.push(`Коментар: ${payload.comment}`);
    }
    lines.push('', 'Товари:');
    payload.items.forEach((item, index)=>{
        lines.push(`${index + 1}. ${item.name} (${item.itemId}) x${item.quantity} = ${item.sum}`);
    });
    lines.push('', `Сума: ${payload.total} грн`);
    return lines.join('\n');
};
const sendTelegramMessage = async (message)=>{
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (!token || !chatId) {
        return;
    }
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message
        })
    });
};
async function handler(req, res) {
    try {
        if (req.method === 'POST') {
            const { name, phone, comment, items, total } = req.body;
            if (!name || !phone) {
                return res.status(400).json({
                    error: "Ім'я та номер телефону обов'язкові."
                });
            }
            if (!Array.isArray(items) || items.length === 0) {
                return res.status(400).json({
                    error: 'Позиції замовлення обовʼязкові.'
                });
            }
            const order = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$prismaClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].order.create({
                data: {
                    name,
                    phone,
                    comment: comment || null,
                    items,
                    total: Number(total) || 0,
                    status: 'new'
                }
            });
            try {
                const message = formatOrderMessage({
                    id: order.id,
                    name,
                    phone,
                    comment,
                    items,
                    total: Number(total) || 0
                });
                await sendTelegramMessage(message);
            } catch (error) {
                console.error('Failed to send Telegram message:', error);
            }
            return res.status(201).json(order);
        }
        if (req.method === 'GET') {
            const { admin } = req.query;
            if (admin !== 'true') {
                return res.status(403).json({
                    error: 'Доступ заборонено'
                });
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$adminAuth$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["requireAdminApiAuth"])(req, res)) {
                return;
            }
            const orders = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$prismaClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].order.findMany({
                orderBy: {
                    createdAt: 'desc'
                }
            });
            return res.status(200).json(orders);
        }
        if (req.method === 'PATCH') {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$adminAuth$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["requireAdminApiAuth"])(req, res)) {
                return;
            }
            const { id, status } = req.body;
            if (!id || !status || !allowedStatuses.includes(status)) {
                return res.status(400).json({
                    error: 'Некоректне оновлення статусу.'
                });
            }
            const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$prismaClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].order.update({
                where: {
                    id
                },
                data: {
                    status
                }
            });
            return res.status(200).json(updated);
        }
        return res.status(405).json({
            error: 'Метод не дозволений'
        });
    } catch (error) {
        console.error('Orders API error:', error);
        return res.status(500).json({
            error: 'Внутрішня помилка сервера'
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__cc85b51d._.js.map