module.exports = [
"[project]/src/components/Breadcrumbs/Breadcrumbs.module.scss [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "Breadcrumbs-module-scss-module__Ir3W5a__active",
  "breadcrumbs": "Breadcrumbs-module-scss-module__Ir3W5a__breadcrumbs",
  "breadcrumbs__arrow": "Breadcrumbs-module-scss-module__Ir3W5a__breadcrumbs__arrow",
  "breadcrumbs__item": "Breadcrumbs-module-scss-module__Ir3W5a__breadcrumbs__item",
  "container": "Breadcrumbs-module-scss-module__Ir3W5a__container",
});
}),
"[project]/src/components/Breadcrumbs/Breadcrumbs.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Breadcrumbs",
    ()=>Breadcrumbs
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Breadcrumbs$2f$Breadcrumbs$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Breadcrumbs/Breadcrumbs.module.scss [ssr] (css module)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$classnames__$5b$external$5d$__$28$classnames$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/classnames [external] (classnames, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
'use client'; // потрібне для клієнтського рендера
;
;
;
;
;
;
const Breadcrumbs = ({ lastTitle })=>{
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["usePathname"])() || '/';
    const pathnameArr = [
        '/',
        ...pathname.split('/').filter((el)=>el)
    ];
    const categoryLabels = {
        decors: 'Decors',
        materials: 'Materials',
        accessories: 'Accessoires'
    };
    if (lastTitle) {
        pathnameArr.pop();
        pathnameArr.push(lastTitle);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Breadcrumbs$2f$Breadcrumbs$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"].breadcrumbs,
        children: pathnameArr.map((path, i)=>{
            const isHome = path === '/';
            const normalizePath = categoryLabels[path] || path.charAt(0).toUpperCase() + path.slice(1);
            if (i === pathnameArr.length - 1) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Breadcrumbs$2f$Breadcrumbs$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"].breadcrumbs__item} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Breadcrumbs$2f$Breadcrumbs$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"].active}`,
                    children: normalizePath
                }, i, false, {
                    fileName: "[project]/src/components/Breadcrumbs/Breadcrumbs.tsx",
                    lineNumber: 36,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0));
            }
            const pathSegments = lastTitle ? pathnameArr.slice(0, -1) : pathnameArr;
            const linkPath = isHome ? '/' : '/' + pathSegments.slice(1, i + 1).join('/');
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].Fragment, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: linkPath,
                        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$classnames__$5b$external$5d$__$28$classnames$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Breadcrumbs$2f$Breadcrumbs$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"].breadcrumbs__item, {
                            'icon icon--home': isHome
                        }),
                        children: !isHome && normalizePath
                    }, void 0, false, {
                        fileName: "[project]/src/components/Breadcrumbs/Breadcrumbs.tsx",
                        lineNumber: 48,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: `icon icon--arrow-right ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Breadcrumbs$2f$Breadcrumbs$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"].breadcrumbs__arrow}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/Breadcrumbs/Breadcrumbs.tsx",
                        lineNumber: 56,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, i, true, {
                fileName: "[project]/src/components/Breadcrumbs/Breadcrumbs.tsx",
                lineNumber: 47,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/src/components/Breadcrumbs/Breadcrumbs.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/Breadcrumbs/index.ts [ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Breadcrumbs$2f$Breadcrumbs$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Breadcrumbs/Breadcrumbs.tsx [ssr] (ecmascript)");
;
}),
"[project]/src/components/Loader/Loader.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Loader",
    ()=>Loader
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
'use client';
;
;
;
const Loader = ()=>{
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "Loader",
        "data-cy": "loader",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "Loader__content"
        }, void 0, false, {
            fileName: "[project]/src/components/Loader/Loader.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Loader/Loader.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/Loader/index.tsx [ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loader$2f$Loader$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Loader/Loader.tsx [ssr] (ecmascript)");
;
}),
"[project]/src/pages/prisma/orders.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrdersPage",
    ()=>OrdersPage,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Breadcrumbs$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/Breadcrumbs/index.ts [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Breadcrumbs$2f$Breadcrumbs$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Breadcrumbs/Breadcrumbs.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loader$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/Loader/index.tsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loader$2f$Loader$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Loader/Loader.tsx [ssr] (ecmascript)");
;
;
;
;
;
const sectionClass = 'bg-gradient-to-br from-[#171C29] to-[#0B0E14] p-6 rounded-2xl shadow-xl shadow-black/20 border border-[#2E3345]';
const statusLabels = {
    new: 'Нове',
    in_progress: 'В роботі',
    done: 'Виконано',
    canceled: 'Скасовано'
};
const statusStyles = {
    new: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
    in_progress: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/30',
    done: 'bg-green-500/10 text-green-300 border-green-500/30',
    canceled: 'bg-red-500/10 text-red-300 border-red-500/30'
};
const statusDots = {
    new: 'bg-blue-400',
    in_progress: 'bg-yellow-400',
    done: 'bg-green-400',
    canceled: 'bg-red-400'
};
const normalizeImageSrc = (src)=>{
    if (!src) return '';
    if (src.startsWith('http') || src.startsWith('/')) return src;
    return `/${src}`;
};
const OrdersPage = ()=>{
    const [orders, setOrders] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [updatingId, setUpdatingId] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [activeStatus, setActiveStatus] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('all');
    const [openStatusId, setOpenStatusId] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const fetchOrders = async ()=>{
            setLoading(true);
            setError('');
            try {
                const response = await fetch('/api/orders?admin=true');
                const data = await response.json();
                if (!response.ok) {
                    throw new Error(data?.error || 'Failed to fetch orders');
                }
                setOrders(Array.isArray(data) ? data : []);
            } catch (err) {
                const message = err instanceof Error ? err.message : 'Помилка завантаження';
                setError(message);
                setOrders([]);
            } finally{
                setLoading(false);
            }
        };
        fetchOrders();
    }, []);
    const handleStatusChange = async (orderId, nextStatus)=>{
        setUpdatingId(orderId);
        try {
            const response = await fetch('/api/orders', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: orderId,
                    status: nextStatus
                })
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data?.error || 'Не вдалося оновити статус.');
            }
            setOrders((prev)=>prev.map((order)=>order.id === orderId ? {
                        ...order,
                        status: nextStatus
                    } : order));
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Помилка оновлення статусу';
            setError(message);
        } finally{
            setUpdatingId(null);
        }
    };
    const toggleStatusMenu = (orderId)=>{
        setOpenStatusId((prev)=>prev === orderId ? null : orderId);
    };
    const handleStatusBlur = (event, orderId)=>{
        const nextTarget = event.relatedTarget;
        if (nextTarget && event.currentTarget.contains(nextTarget)) {
            return;
        }
        setOpenStatusId((prev)=>prev === orderId ? null : prev);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
                    rel: "stylesheet",
                    href: "/admin.css"
                }, void 0, false, {
                    fileName: "[project]/src/pages/prisma/orders.tsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/pages/prisma/orders.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "container",
                id: "admin-root",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Breadcrumbs$2f$Breadcrumbs$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Breadcrumbs"], {}, void 0, false, {
                        fileName: "[project]/src/pages/prisma/orders.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "mb-6 flex flex-wrap gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                href: "/prisma",
                                className: "px-4 py-2 bg-[#2A2F3E] text-white rounded-lg hover:bg-[#3E455B] transition-colors text-sm font-medium border border-[#3E455B]",
                                children: "Товари"
                            }, void 0, false, {
                                fileName: "[project]/src/pages/prisma/orders.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                href: "/prisma/orders",
                                className: "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors text-sm font-medium border border-blue-500",
                                children: "Замовлення"
                            }, void 0, false, {
                                fileName: "[project]/src/pages/prisma/orders.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/prisma/orders.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loader$2f$Loader$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Loader"], {}, void 0, false, {
                        fileName: "[project]/src/pages/prisma/orders.tsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "text-red-400",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/pages/prisma/orders.tsx",
                        lineNumber: 153,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : orders.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "text-gray-400",
                        children: "Немає замовлень"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/prisma/orders.tsx",
                        lineNumber: 155,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-2",
                                children: [
                                    {
                                        key: 'all',
                                        label: `Усі (${orders.length})`
                                    },
                                    {
                                        key: 'new',
                                        label: `Нові (${orders.filter((o)=>o.status === 'new').length})`
                                    },
                                    {
                                        key: 'in_progress',
                                        label: `В роботі (${orders.filter((o)=>o.status === 'in_progress').length})`
                                    },
                                    {
                                        key: 'done',
                                        label: `Виконані (${orders.filter((o)=>o.status === 'done').length})`
                                    },
                                    {
                                        key: 'canceled',
                                        label: `Скасовані (${orders.filter((o)=>o.status === 'canceled').length})`
                                    }
                                ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setActiveStatus(tab.key),
                                        className: `px-3 py-1.5 rounded-full text-xs border transition-all ${activeStatus === tab.key ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white border-blue-500 shadow-sm shadow-blue-900/30' : 'bg-[#0B0E14] text-gray-300 border-[#2E3345] hover:border-[#3E455B] hover:bg-[#151925]'}`,
                                        children: tab.label
                                    }, tab.key, false, {
                                        fileName: "[project]/src/pages/prisma/orders.tsx",
                                        lineNumber: 178,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/pages/prisma/orders.tsx",
                                lineNumber: 158,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            (activeStatus === 'all' ? orders : orders.filter((order)=>order.status === activeStatus)).map((order)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: sectionClass,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap items-start justify-between gap-4 border-b border-[#2E3345] pb-4 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "text-white font-semibold text-lg tracking-wide",
                                                            children: [
                                                                "Замовлення #",
                                                                order.id
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/prisma/orders.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "text-gray-400 text-sm",
                                                            children: new Date(order.createdAt).toLocaleString()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/prisma/orders.tsx",
                                                            lineNumber: 203,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/prisma/orders.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "text-right space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "bg-[#0B0E14] border border-[#2E3345] rounded-xl px-3 py-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "text-gray-200 font-medium",
                                                                    children: order.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/prisma/orders.tsx",
                                                                    lineNumber: 209,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "text-gray-400 text-sm",
                                                                    children: order.phone
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/prisma/orders.tsx",
                                                                    lineNumber: 210,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/prisma/orders.tsx",
                                                            lineNumber: 208,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-end gap-3",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                className: "relative",
                                                                tabIndex: 0,
                                                                onBlur: (event)=>handleStatusBlur(event, order.id),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        disabled: updatingId === order.id,
                                                                        onClick: ()=>toggleStatusMenu(order.id),
                                                                        className: `inline-flex items-center gap-2 border text-xs px-3 py-1 rounded-full transition-all disabled:opacity-60 cursor-pointer hover:shadow-sm hover:shadow-black/30 ${statusStyles[order.status] || 'border-[#2E3345] text-gray-300'}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                className: `h-2 w-2 rounded-full ${statusDots[order.status] || 'bg-gray-400'}`
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/pages/prisma/orders.tsx",
                                                                                lineNumber: 226,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                children: statusLabels[order.status] || order.status
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/pages/prisma/orders.tsx",
                                                                                lineNumber: 229,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                className: "text-[10px] text-gray-400",
                                                                                children: "▼"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/pages/prisma/orders.tsx",
                                                                                lineNumber: 230,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/pages/prisma/orders.tsx",
                                                                        lineNumber: 218,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    openStatusId === order.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                        className: "absolute right-0 mt-2 w-44 rounded-xl border border-[#2E3345] bg-[#0B0E14] shadow-lg shadow-black/40 z-10",
                                                                        children: Object.keys(statusLabels).map((statusKey)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: ()=>{
                                                                                    setOpenStatusId(null);
                                                                                    handleStatusChange(order.id, statusKey);
                                                                                },
                                                                                className: `w-full text-left px-3 py-2 text-xs transition-colors bg-transparent ${order.status === statusKey ? 'bg-[#151925] text-white' : 'text-gray-300 hover:bg-[#151925] hover:text-white'}`,
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "inline-flex items-center gap-2 w-full",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                            className: `h-2 w-2 rounded-full ${statusDots[statusKey] || 'bg-gray-400'}`
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/pages/prisma/orders.tsx",
                                                                                            lineNumber: 249,
                                                                                            columnNumber: 35
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        statusLabels[statusKey],
                                                                                        order.status === statusKey && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                            className: "ml-auto text-xs text-gray-400",
                                                                                            children: "✓"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/pages/prisma/orders.tsx",
                                                                                            lineNumber: 254,
                                                                                            columnNumber: 37
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/pages/prisma/orders.tsx",
                                                                                    lineNumber: 248,
                                                                                    columnNumber: 33
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, statusKey, false, {
                                                                                fileName: "[project]/src/pages/prisma/orders.tsx",
                                                                                lineNumber: 235,
                                                                                columnNumber: 31
                                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/pages/prisma/orders.tsx",
                                                                        lineNumber: 233,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/pages/prisma/orders.tsx",
                                                                lineNumber: 213,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/prisma/orders.tsx",
                                                            lineNumber: 212,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/prisma/orders.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/pages/prisma/orders.tsx",
                                            lineNumber: 198,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        order.comment && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "mb-4 text-sm text-gray-300 bg-[#0B0E14] border border-[#2E3345] rounded-xl px-3 py-2",
                                            children: [
                                                "Коментар: ",
                                                order.comment
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/pages/prisma/orders.tsx",
                                            lineNumber: 267,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 gap-3",
                                            children: Array.isArray(order.items) && order.items.map((item, index)=>{
                                                const imageSrc = normalizeImageSrc(item.image);
                                                const itemHref = item.category && item.itemId ? `/${item.category}/${item.itemId}` : '';
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                    href: itemHref || undefined,
                                                    className: "group flex flex-wrap items-center gap-4 bg-[#0B0E14] border border-[#2E3345] rounded-2xl px-4 py-3 text-sm text-gray-200 hover:border-[#4B5369] hover:bg-[#101521] transition-all",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "w-16 h-16 rounded-xl overflow-hidden border border-[#2E3345] bg-[#151925] flex items-center justify-center",
                                                            children: imageSrc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                                                src: imageSrc,
                                                                alt: item.name,
                                                                className: "w-full h-full object-contain group-hover:scale-105 transition-transform"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/prisma/orders.tsx",
                                                                lineNumber: 289,
                                                                columnNumber: 31
                                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-gray-500",
                                                                children: "No image"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/prisma/orders.tsx",
                                                                lineNumber: 295,
                                                                columnNumber: 31
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/prisma/orders.tsx",
                                                            lineNumber: 287,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 min-w-[180px]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "font-semibold text-white",
                                                                    children: [
                                                                        index + 1,
                                                                        ". ",
                                                                        item.name
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/pages/prisma/orders.tsx",
                                                                    lineNumber: 299,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-gray-400",
                                                                    children: [
                                                                        "ID: ",
                                                                        item.itemId
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/pages/prisma/orders.tsx",
                                                                    lineNumber: 302,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                !itemHref && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-gray-500",
                                                                    children: "Посилання недоступне"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/prisma/orders.tsx",
                                                                    lineNumber: 304,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/prisma/orders.tsx",
                                                            lineNumber: 298,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "text-right min-w-[120px]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "text-gray-300",
                                                                    children: [
                                                                        item.quantity,
                                                                        " x ",
                                                                        item.price,
                                                                        " грн"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/pages/prisma/orders.tsx",
                                                                    lineNumber: 308,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "text-white font-semibold",
                                                                    children: [
                                                                        item.sum,
                                                                        " грн"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/pages/prisma/orders.tsx",
                                                                    lineNumber: 311,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/prisma/orders.tsx",
                                                            lineNumber: 307,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, `${order.id}-${item.itemId}-${index}`, true, {
                                                    fileName: "[project]/src/pages/prisma/orders.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0));
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/prisma/orders.tsx",
                                            lineNumber: 272,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "mt-5 flex flex-wrap items-center justify-between gap-3 text-sm text-gray-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "px-3 py-1 rounded-full border border-[#2E3345] bg-[#0B0E14]",
                                                    children: [
                                                        "Позицій: ",
                                                        order.items?.length ?? 0
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/prisma/orders.tsx",
                                                    lineNumber: 319,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold shadow-sm shadow-blue-900/30",
                                                    children: [
                                                        "Сума: ",
                                                        order.total,
                                                        " грн"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/prisma/orders.tsx",
                                                    lineNumber: 322,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/pages/prisma/orders.tsx",
                                            lineNumber: 318,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, order.id, true, {
                                    fileName: "[project]/src/pages/prisma/orders.tsx",
                                    lineNumber: 197,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/prisma/orders.tsx",
                        lineNumber: 157,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/prisma/orders.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = OrdersPage;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__478494d8._.js.map