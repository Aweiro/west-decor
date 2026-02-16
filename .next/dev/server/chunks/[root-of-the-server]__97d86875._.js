module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/cloudinary [external] (cloudinary, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("cloudinary", () => require("cloudinary"));

module.exports = mod;
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
        error: 'Unauthorized'
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
"[project]/src/pages/api/upload.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$cloudinary__$5b$external$5d$__$28$cloudinary$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/cloudinary [external] (cloudinary, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$adminAuth$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/adminAuth.ts [api] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$adminAuth$2e$ts__$5b$api$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$adminAuth$2e$ts__$5b$api$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
__TURBOPACK__imported__module__$5b$externals$5d2f$cloudinary__$5b$external$5d$__$28$cloudinary$2c$__cjs$29$__["v2"].config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
async function handler(req, res) {
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({
                error: 'Only POST allowed'
            });
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$adminAuth$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["requireAdminApiAuth"])(req, res)) {
            return;
        }
        const { file } = req.body;
        if (!file) {
            return res.status(400).json({
                error: 'No file provided'
            });
        }
        // Завантаження
        const uploaded = await __TURBOPACK__imported__module__$5b$externals$5d2f$cloudinary__$5b$external$5d$__$28$cloudinary$2c$__cjs$29$__["v2"].uploader.upload(file, {
            folder: 'products'
        });
        return res.status(200).json({
            url: uploaded.secure_url
        });
    } catch (err) {
        console.error(err);
        const message = err instanceof Error ? err.message : String(err);
        res.status(500).json({
            error: 'Upload failed',
            message
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__97d86875._.js.map