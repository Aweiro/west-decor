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
"[project]/src/pages/api/orders.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$prismaClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/services/prismaClient.ts [api] (ecmascript)");
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
                    error: 'Name and phone are required.'
                });
            }
            if (!Array.isArray(items) || items.length === 0) {
                return res.status(400).json({
                    error: 'Order items are required.'
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
                    error: 'Forbidden'
                });
            }
            const orders = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$prismaClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].order.findMany({
                orderBy: {
                    createdAt: 'desc'
                }
            });
            return res.status(200).json(orders);
        }
        if (req.method === 'PATCH') {
            const { id, status } = req.body;
            if (!id || !status || !allowedStatuses.includes(status)) {
                return res.status(400).json({
                    error: 'Invalid status update.'
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
            error: 'Method not allowed'
        });
    } catch (error) {
        console.error('Orders API error:', error);
        return res.status(500).json({
            error: 'Internal server error'
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__710eb9c3._.js.map