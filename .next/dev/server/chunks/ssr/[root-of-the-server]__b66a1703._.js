module.exports = [
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

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
"[project]/src/lib/adminAuth.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/pages/prisma/login.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* eslint-disable react-refresh/only-export-components */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getServerSideProps",
    ()=>getServerSideProps
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$adminAuth$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/adminAuth.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$adminAuth$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$adminAuth$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const inputClass = 'admin-input';
const LoginPage = ({ nextPath })=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const handleSubmit = async (event)=>{
        event.preventDefault();
        setError('');
        setLoading(true);
        try {
            const response = await fetch('/api/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password
                })
            });
            const data = await response.json();
            if (!response.ok) {
                setError(data?.error || 'Не вдалося увійти');
                return;
            }
            await router.replace(nextPath || '/prisma');
        } catch (submitError) {
            const message = submitError instanceof Error ? submitError.message : 'Не вдалося увійти';
            setError(message);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        children: "Prisma Login"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/prisma/login.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
                        rel: "stylesheet",
                        href: "/admin.css"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/prisma/login.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/prisma/login.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "admin-shell",
                id: "admin-root",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "container admin-inner py-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "max-w-5xl mx-auto grid gap-6 lg:grid-cols-[1.1fr_1fr] items-stretch",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                                className: "admin-panel p-8 lg:p-10 flex flex-col justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-xs uppercase tracking-wider text-sky-200",
                                                children: "Prisma Admin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/prisma/login.tsx",
                                                lineNumber: 60,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                                className: "admin-title text-4xl text-white mt-4",
                                                children: "Вхід в адмін панель"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/prisma/login.tsx",
                                                lineNumber: 63,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: "admin-subtitle text-base mt-3 max-w-md",
                                                children: "Єдиний простір для керування товарами, варіаціями та замовленнями магазину."
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/prisma/login.tsx",
                                                lineNumber: 64,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/prisma/login.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "mt-8 rounded-2xl border border-[#2a3a58] bg-[#0b1424]/80 p-5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-[#b9c8e7]",
                                            children: "Після входу відкриється остання сторінка, на яку ти переходив в адмінці."
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/prisma/login.tsx",
                                            lineNumber: 69,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/prisma/login.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/prisma/login.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                                className: "admin-panel p-6 lg:p-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                        className: "admin-title text-xl text-white mb-2",
                                        children: "Авторизація"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/prisma/login.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "admin-subtitle text-sm mb-6",
                                        children: "Увійдіть, щоб керувати товарами та замовленнями."
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/prisma/login.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                                        onSubmit: handleSubmit,
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                        htmlFor: "username",
                                                        className: "admin-label",
                                                        children: "Логін"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/prisma/login.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 15
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                        id: "username",
                                                        value: username,
                                                        onChange: (event)=>setUsername(event.target.value),
                                                        className: inputClass,
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/prisma/login.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 15
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/pages/prisma/login.tsx",
                                                lineNumber: 82,
                                                columnNumber: 13
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                        htmlFor: "password",
                                                        className: "admin-label",
                                                        children: "Пароль"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/prisma/login.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 15
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                        id: "password",
                                                        type: "password",
                                                        value: password,
                                                        onChange: (event)=>setPassword(event.target.value),
                                                        className: inputClass,
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/prisma/login.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 15
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/pages/prisma/login.tsx",
                                                lineNumber: 95,
                                                columnNumber: 13
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: "rounded-xl border border-red-400/30 bg-red-500/10 px-3 py-2 text-sm text-red-300",
                                                children: error
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/prisma/login.tsx",
                                                lineNumber: 110,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: loading,
                                                className: "w-full px-4 py-2.5 rounded-xl border border-sky-400/40 bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:brightness-110 disabled:opacity-60 transition-all font-semibold shadow-lg shadow-blue-900/30",
                                                children: loading ? 'Вхід...' : 'Увійти'
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/prisma/login.tsx",
                                                lineNumber: 115,
                                                columnNumber: 13
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/prisma/login.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/prisma/login.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/prisma/login.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/pages/prisma/login.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/pages/prisma/login.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const normalizeNextPath = (value)=>{
    if (typeof value !== 'string') {
        return '/prisma';
    }
    return value.startsWith('/') ? value : '/prisma';
};
const getServerSideProps = async (context)=>{
    const nextPath = normalizeNextPath(context.query.next);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$adminAuth$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isAdminAuthenticated"])(context.req)) {
        return {
            redirect: {
                destination: nextPath,
                permanent: false
            }
        };
    }
    return {
        props: {
            nextPath
        }
    };
};
const __TURBOPACK__default__export__ = LoginPage;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b66a1703._.js.map