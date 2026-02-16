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
"[project]/src/components/ProductsList/ProductsList.module.scss [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "container": "ProductsList-module-scss-module__Nm8h3a__container",
  "products-list": "ProductsList-module-scss-module__Nm8h3a__products-list",
  "products-list__card": "ProductsList-module-scss-module__Nm8h3a__products-list__card",
});
}),
"[project]/src/components/ProductCard/ProductCard.module.scss [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "container": "ProductCard-module-scss-module___HK1Jq__container",
  "product-card": "ProductCard-module-scss-module___HK1Jq__product-card",
  "product-card__img": "ProductCard-module-scss-module___HK1Jq__product-card__img",
  "product-card__img__img-container": "ProductCard-module-scss-module___HK1Jq__product-card__img__img-container",
  "product-card__info": "ProductCard-module-scss-module___HK1Jq__product-card__info",
  "product-card__info-name": "ProductCard-module-scss-module___HK1Jq__product-card__info-name",
  "product-card__info-row": "ProductCard-module-scss-module___HK1Jq__product-card__info-row",
  "product-card__line": "ProductCard-module-scss-module___HK1Jq__product-card__line",
  "product-card__price-prev": "ProductCard-module-scss-module___HK1Jq__product-card__price-prev",
  "product-card__price-row": "ProductCard-module-scss-module___HK1Jq__product-card__price-row",
  "product-card__title": "ProductCard-module-scss-module___HK1Jq__product-card__title",
});
}),
"[project]/src/components/PaymentsButtons/PaymentsButtons.module.scss [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "page": "PaymentsButtons-module-scss-module__JD2l7G__page",
  "payments__buttons": "PaymentsButtons-module-scss-module__JD2l7G__payments__buttons",
  "payments__buttons-add": "PaymentsButtons-module-scss-module__JD2l7G__payments__buttons-add",
});
}),
"[project]/src/components/PaymentsButtons/PaymentsButtons.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "PaymentsButtons",
    ()=>PaymentsButtons
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PaymentsButtons$2f$PaymentsButtons$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/PaymentsButtons/PaymentsButtons.module.scss [ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/Button/index.ts [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button/Button.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$ButtonType$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/ButtonType.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$classnames__$5b$external$5d$__$28$classnames$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/classnames [external] (classnames, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/hooks.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$favorites$2f$favoritesSlice$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/favorites/favoritesSlice.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cart$2f$cartSlice$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/cart/cartSlice.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$favorites$2f$favoritesSlice$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cart$2f$cartSlice$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$favorites$2f$favoritesSlice$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cart$2f$cartSlice$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
const PaymentsButtons = ({ isPage = false, product })=>{
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const { items: favorites } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.favorites);
    const { items: cart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.cart);
    const isActiveCart = cart.some((item)=>item.id === product);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$classnames__$5b$external$5d$__$28$classnames$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PaymentsButtons$2f$PaymentsButtons$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"].payments__buttons, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PaymentsButtons$2f$PaymentsButtons$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"].page]: isPage
        }),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Button"], {
                isSelected: isActiveCart,
                className: `button-text ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PaymentsButtons$2f$PaymentsButtons$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]['payments__buttons-add']}`,
                onClick: ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cart$2f$cartSlice$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["toggleCart"])(product)),
                children: isActiveCart ? 'Added to cart' : 'Add to cart'
            }, void 0, false, {
                fileName: "[project]/src/components/PaymentsButtons/PaymentsButtons.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Button"], {
                isRatio: true,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$ButtonType$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ButtonType"].Heart,
                isFavorite: true,
                iconActive: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$ButtonType$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["ButtonType"].HeartFilled,
                isSelected: favorites.includes(product),
                onClick: ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$favorites$2f$favoritesSlice$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["toggleFavorite"])(product))
            }, void 0, false, {
                fileName: "[project]/src/components/PaymentsButtons/PaymentsButtons.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PaymentsButtons/PaymentsButtons.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/PaymentsButtons/index.tsx [ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PaymentsButtons$2f$PaymentsButtons$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PaymentsButtons/PaymentsButtons.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PaymentsButtons$2f$PaymentsButtons$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PaymentsButtons$2f$PaymentsButtons$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
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
"[project]/src/components/ProductCard/ProductCard.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "ProductCard",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ProductCard/ProductCard.module.scss [ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PaymentsButtons$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/PaymentsButtons/index.tsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PaymentsButtons$2f$PaymentsButtons$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PaymentsButtons/PaymentsButtons.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PaymentsButtons$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PaymentsButtons$2f$PaymentsButtons$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PaymentsButtons$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PaymentsButtons$2f$PaymentsButtons$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
const ProductCard = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].memo(({ product, className, children })=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const handleClick = (e)=>{
        e.preventDefault();
        const filteredSearch = new URLSearchParams(params?.toString());
        filteredSearch.delete('from');
        const search = filteredSearch.toString() ? `?${filteredSearch.toString()}` : '';
        const from = `${pathname}${search}`; // це поточна сторінка, звідки відкрили
        const html = document.documentElement;
        html.style.scrollBehavior = 'smooth';
        router.push(`/${product.category}/${product.itemId}${!pathname?.startsWith(`/${product.category}`) ? `?from=${encodeURIComponent(from)}` : ''}`).finally(()=>{
            window.scrollTo({
                top: 0
            });
            html.style.scrollBehavior = '';
        });
    };
    const LinkDetails = ({ children, linkClassName })=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            href: `/${product.category}/${product.itemId}`,
            className: linkClassName,
            onClick: handleClick,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ProductCard/ProductCard.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]['product-card']} ${className ? className : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(LinkDetails, {
                linkClassName: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]['product-card__img-container'],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: product?.image || '/img/category-phones.webp',
                    // src={'/' + product?.image || "/img/category-phones.webp"}
                    alt: "product",
                    width: 100,
                    height: 100,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]['product-card__img']
                }, void 0, false, {
                    fileName: "[project]/src/components/ProductCard/ProductCard.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ProductCard/ProductCard.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(LinkDetails, {
                linkClassName: `body-text ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]['product-card__title']}`,
                children: product?.name || 'unknown'
            }, void 0, false, {
                fileName: "[project]/src/components/ProductCard/ProductCard.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]['product-card__price-row'],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]['product-card__price-current'],
                        children: [
                            product.price,
                            " грн"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductCard/ProductCard.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]['product-card__price-prev'],
                        children: [
                            product.fullPrice,
                            " грн"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductCard/ProductCard.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductCard/ProductCard.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("hr", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]['product-card__line']
            }, void 0, false, {
                fileName: "[project]/src/components/ProductCard/ProductCard.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]['product-card__info'],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]['product-card__info-row'],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: `small-text ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]['product-card__info-name']}`,
                                children: "Час роботи"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductCard/ProductCard.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: `small-text ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]['product-card__info-value']}`,
                                children: product.screen
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductCard/ProductCard.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductCard/ProductCard.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]['product-card__info-row'],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: `small-text ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]['product-card__info-name']}`,
                                children: "Фасування"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductCard/ProductCard.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: `small-text ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]['product-card__info-value']}`,
                                children: product.capacity
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductCard/ProductCard.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductCard/ProductCard.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]['product-card__info-row'],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: `small-text ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]['product-card__info-name']}`,
                                children: "Витрата"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductCard/ProductCard.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: `small-text ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]['product-card__info-value']}`,
                                children: product.ram
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductCard/ProductCard.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductCard/ProductCard.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductCard/ProductCard.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PaymentsButtons$2f$PaymentsButtons$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["PaymentsButtons"], {
                product: product.itemId
            }, void 0, false, {
                fileName: "[project]/src/components/ProductCard/ProductCard.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProductCard/ProductCard.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
ProductCard.displayName = 'ProductCard';
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/ProductCard/index.ts [ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductCard/ProductCard.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/ProductsList/ProductsList.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "ProductsList",
    ()=>ProductsList
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductsList$2f$ProductsList$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ProductsList/ProductsList.module.scss [ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/ProductCard/index.ts [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductCard/ProductCard.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const AdminProductRow = ({ product, onEdit, onDelete, onToggleActive })=>{
    const productLink = `/${product.category}/${product.itemId}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "flex flex-col sm:flex-row items-center gap-4 bg-[#151925] border border-[#2E3345] p-4 rounded-xl shadow-sm hover:border-[#3E455B] transition-colors group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "shrink-0 relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: productLink,
                    target: "_blank",
                    className: "w-16 h-16 rounded-lg bg-[#0B0E14] border border-[#2E3345] overflow-hidden flex items-center justify-center hover:opacity-80 transition-opacity",
                    children: product.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                        src: product.image,
                        alt: product.name,
                        className: "h-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductsList/ProductsList.tsx",
                        lineNumber: 34,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: "text-xs text-gray-600",
                        children: "No img"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductsList/ProductsList.tsx",
                        lineNumber: 36,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ProductsList/ProductsList.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ProductsList/ProductsList.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-0 text-center sm:text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center sm:justify-start gap-2 mb-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "text-xs font-mono text-gray-500 bg-[#2A2F3E] px-1.5 py-0.5 rounded border border-[#3E455B]",
                                children: [
                                    "#",
                                    product.itemId
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductsList/ProductsList.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "text-xs text-[#9353d3] font-medium uppercase tracking-wide",
                                children: product.category
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductsList/ProductsList.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductsList/ProductsList.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: productLink,
                        target: "_blank",
                        className: "group-hover:text-blue-400 transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                            className: "text-white font-semibold truncate hover:underline",
                            title: product.name,
                            children: product.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductsList/ProductsList.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductsList/ProductsList.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "text-gray-400 text-sm mt-0.5",
                        children: [
                            product.price,
                            " грн",
                            product.fullPrice > product.price && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "text-gray-600 line-through ml-2 text-xs",
                                children: [
                                    product.fullPrice,
                                    " грн"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductsList/ProductsList.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductsList/ProductsList.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductsList/ProductsList.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 shrink-0 opacity-100 sm:opacity-90 sm:group-hover:opacity-100 transition-opacity",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-2 text-sm cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: product.isActive ? 'text-green-400' : 'text-gray-500',
                                children: product.isActive ? 'Active' : 'Hidden'
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductsList/ProductsList.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                checked: product.isActive,
                                onChange: (e)=>onToggleActive?.(product.itemId, e.target.checked),
                                className: "sr-only"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductsList/ProductsList.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: `w-10 h-5 rounded-full relative transition-colors ${product.isActive ? 'bg-green-500' : 'bg-gray-600'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: `absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform ${product.isActive ? 'translate-x-5' : ''}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductsList/ProductsList.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductsList/ProductsList.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductsList/ProductsList.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: ()=>onEdit?.(product),
                        className: "flex items-center justify-center gap-2 px-4 py-2 bg-blue-600/10 text-blue-500 border border-blue-600/20 text-sm font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-all active:scale-95",
                        title: "Редагувати",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-4 w-4",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 00 2 2h11a2 2 0 00 2-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductsList/ProductsList.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductsList/ProductsList.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: "Edit"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductsList/ProductsList.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductsList/ProductsList.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: ()=>onDelete?.(product.itemId),
                        className: "flex items-center justify-center gap-2 px-4 py-2 bg-red-500/10 text-red-500 border border-red-500/20 text-sm font-medium rounded-lg hover:bg-red-500 hover:text-white transition-all active:scale-95",
                        title: "Видалити",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-4 w-4",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductsList/ProductsList.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductsList/ProductsList.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: "Delete"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductsList/ProductsList.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductsList/ProductsList.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductsList/ProductsList.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProductsList/ProductsList.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const ProductsList = ({ isAdmin = false, onToggleActive, products, onEdit, onDelete })=>{
    if (isAdmin) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-3",
            children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(AdminProductRow, {
                    product: product,
                    onEdit: onEdit,
                    onDelete: onDelete,
                    onToggleActive: onToggleActive
                }, product.itemId, false, {
                    fileName: "[project]/src/components/ProductsList/ProductsList.tsx",
                    lineNumber: 160,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/src/components/ProductsList/ProductsList.tsx",
            lineNumber: 158,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductsList$2f$ProductsList$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]['products-list'],
        children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2f$ProductCard$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ProductCard"], {
                product: product,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductsList$2f$ProductsList$2e$module$2e$scss__$5b$ssr$5d$__$28$css__module$29$__["default"]['products-list__card']
            }, product.id, false, {
                fileName: "[project]/src/components/ProductsList/ProductsList.tsx",
                lineNumber: 175,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/components/ProductsList/ProductsList.tsx",
        lineNumber: 173,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/ProductsList/index.ts [ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductsList$2f$ProductsList$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductsList/ProductsList.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductsList$2f$ProductsList$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductsList$2f$ProductsList$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
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
"[project]/src/pages/prisma/index.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* eslint-disable react-refresh/only-export-components */ __turbopack_context__.s([
    "Prisma",
    ()=>Prisma,
    "default",
    ()=>__TURBOPACK__default__export__,
    "getServerSideProps",
    ()=>getServerSideProps
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Breadcrumbs$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/Breadcrumbs/index.ts [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Breadcrumbs$2f$Breadcrumbs$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Breadcrumbs/Breadcrumbs.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductsList$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/ProductsList/index.ts [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductsList$2f$ProductsList$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductsList/ProductsList.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loader$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/Loader/index.tsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loader$2f$Loader$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Loader/Loader.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$adminAuth$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/adminAuth.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductsList$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductsList$2f$ProductsList$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$adminAuth$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductsList$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductsList$2f$ProductsList$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$adminAuth$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
;
;
// import './styles/admin.css';
const sectionClass = 'admin-panel p-6 lg:p-7';
const inputClass = 'admin-input';
const labelClass = 'admin-label';
const btnSecondary = 'px-4 py-2 bg-[#2A2F3E] text-white rounded-lg hover:bg-[#3E455B] transition-colors text-sm font-medium border border-[#3E455B]';
const btnDanger = 'p-2 text-red-400 hover:text-red-300 hover:bg-red-900/20 rounded transition-colors';
const startForm = {
    isActive: true,
    category: '',
    itemId: '',
    price: '',
    fullPrice: '',
    image: '',
    images: [],
    name: '',
    screen: '',
    ram: '',
    camera: '',
    color: '',
    capacity: '',
    cell: [],
    year: '',
    namespaceId: '',
    description: [],
    resolution: '',
    processor: '',
    zoom: ''
};
const Prisma = ()=>{
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [category] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('products');
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])();
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        ...startForm
    });
    const [namespaceMode, setNamespaceMode] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('existing');
    const [namespaceOptions, setNamespaceOptions] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [namespaceLoading, setNamespaceLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [namespaceVariants, setNamespaceVariants] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({});
    const [capacityMode, setCapacityMode] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('new');
    const [colorMode, setColorMode] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('new');
    // 1. Стан для пошукового запиту
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [visibleProductsCount, setVisibleProductsCount] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(5);
    // 2. Логіка фільтрації (шукає по назві, ID та категорії)
    const filteredProducts = products.filter((p)=>Boolean(p)).filter((product)=>{
        const term = searchTerm.toLowerCase();
        return product.name?.toLowerCase().includes(term) || product.itemId?.toString().toLowerCase().includes(term) || product.category?.toLowerCase().includes(term) || product.namespaceId?.toLowerCase().includes(term);
    });
    const visibleProducts = filteredProducts.slice(0, visibleProductsCount);
    const hasMoreProducts = filteredProducts.length > visibleProductsCount;
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        setVisibleProductsCount(5);
    }, [
        searchTerm,
        products.length
    ]);
    const fetchProducts = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(async ()=>{
        setLoading(true);
        try {
            const res = await fetch(`/api/products?category=${category}&admin=true`);
            const data = await res.json();
            if (!res.ok) {
                console.error('Server response:', data);
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            setProducts(Array.isArray(data) ? data : []);
        } catch (err) {
            console.error('Fetch error:', err);
            setProducts([]);
        } finally{
            setLoading(false);
        }
    }, [
        category
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        fetchProducts();
    }, [
        category,
        fetchProducts
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const loadNamespaces = async ()=>{
            setNamespaceLoading(true);
            try {
                const categories = [
                    'decors',
                    'materials',
                    'accessories'
                ];
                const responses = await Promise.all(categories.map((cat)=>fetch(`/api/products?category=${cat}`).then((res)=>res.json())));
                const namespaces = responses.flat().map((detail)=>detail.namespaceId).filter((value)=>Boolean(value));
                setNamespaceOptions(Array.from(new Set(namespaces)));
                const variantsMap = {};
                responses.flat().forEach((detail)=>{
                    if (!detail.namespaceId) {
                        return;
                    }
                    if (!variantsMap[detail.namespaceId]) {
                        variantsMap[detail.namespaceId] = {
                            capacities: new Set(),
                            colors: new Set()
                        };
                    }
                    if (detail.capacity) {
                        variantsMap[detail.namespaceId].capacities.add(detail.capacity);
                    }
                    (detail.capacityAvailable || []).filter(Boolean).forEach((capacity)=>variantsMap[detail.namespaceId].capacities.add(capacity));
                    if (detail.color) {
                        variantsMap[detail.namespaceId].colors.add(detail.color);
                    }
                    (detail.colorsAvailable || []).filter(Boolean).forEach((color)=>variantsMap[detail.namespaceId].colors.add(color));
                });
                const normalizedVariants = Object.entries(variantsMap).reduce((acc, [namespace, data])=>{
                    acc[namespace] = {
                        capacities: Array.from(data.capacities).sort((a, b)=>a.localeCompare(b)),
                        colors: Array.from(data.colors).sort((a, b)=>a.localeCompare(b))
                    };
                    return acc;
                }, {});
                setNamespaceVariants(normalizedVariants);
            } catch (error) {
                console.error('Failed to load namespaces:', error);
                setNamespaceOptions([]);
                setNamespaceVariants({});
            } finally{
                setNamespaceLoading(false);
            }
        };
        loadNamespaces();
    }, []);
    const syncVariantModesByNamespace = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((namespaceId)=>{
        const variants = namespaceVariants[namespaceId];
        if (!namespaceId || !variants) {
            setCapacityMode('new');
            setColorMode('new');
            return;
        }
        // XOR mode: only one of (capacity/color) can be "existing" at a time.
        if (variants.capacities.length) {
            setCapacityMode('existing');
            setColorMode('new');
            return;
        }
        if (variants.colors.length) {
            setCapacityMode('new');
            setColorMode('existing');
            return;
        }
        setCapacityMode('new');
        setColorMode('new');
    }, [
        namespaceVariants
    ]);
    const handleCapacityModeChange = (mode)=>{
        setForm((prev)=>({
                ...prev,
                capacity: ''
            }));
        if (mode === 'existing') {
            setCapacityMode('existing');
            setColorMode('new');
            return;
        }
        setCapacityMode('new');
    };
    const handleColorModeChange = (mode)=>{
        setForm((prev)=>({
                ...prev,
                color: ''
            }));
        if (mode === 'existing') {
            setColorMode('existing');
            setCapacityMode('new');
            return;
        }
        setColorMode('new');
    };
    const handleNamespaceChange = (value)=>{
        setForm((prev)=>({
                ...prev,
                namespaceId: value
            }));
        syncVariantModesByNamespace(value);
    };
    const selectedVariants = namespaceVariants[form.namespaceId];
    const capacityOptions = Array.from(new Set([
        ...selectedVariants?.capacities || [],
        form.capacity
    ].filter(Boolean)));
    const colorOptions = Array.from(new Set([
        ...selectedVariants?.colors || [],
        form.color
    ].filter(Boolean)));
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!form.namespaceId) {
            return;
        }
        syncVariantModesByNamespace(form.namespaceId);
    }, [
        form.namespaceId,
        syncVariantModesByNamespace
    ]);
    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        let imageUrls = [];
        // якщо створюємо новий продукт — фото обов'язкове
        if (editingId !== form.itemId && !selectedFile?.length) {
            return alert('Вибери файл');
        }
        setLoading(true);
        // якщо файли вибрані — завантажуємо
        if (selectedFile) {
            imageUrls = await uploadImages(selectedFile);
        }
        const payload = {
            isActive: form.isActive,
            itemId: form.itemId,
            category: form.category,
            name: form.name,
            fullPrice: Number(form.fullPrice) || 0,
            price: Number(form.price) || 0,
            screen: form.screen || '',
            capacity: form.capacity || '',
            color: form.color || '',
            ram: form.ram || '',
            year: Number(form.year) || 0,
            image: imageUrls[0] || form.image
        };
        if (form.category) {
            payload.details = {
                name: form.name,
                screen: form.screen || 'unknown',
                ram: form.ram || 'unknown',
                camera: form.camera || 'unknown',
                resolution: form.resolution || 'unknown',
                processor: form.processor || 'unknown',
                zoom: form.zoom || 'unknown',
                capacity: form.capacity || '',
                priceRegular: Number(form.fullPrice) || 0,
                priceDiscount: Number(form.price) || 0,
                color: form.color || '',
                images: imageUrls.length ? imageUrls : [],
                cell: form.cell,
                description: form.description || [],
                namespaceId: form.namespaceId || ''
            };
        }
        try {
            const isEdit = form.itemId === editingId;
            const method = isEdit ? 'PUT' : 'POST'; // <---- ГОЛОВНЕ
            // 1. Початкова адреса
            let url = '/api/products';
            // 2. ВАЖЛИВА ЗМІНА:
            // Якщо ми редагуємо (PUT), треба додати в URL СТАРИЙ ID (editingId).
            // Це скаже серверу: "Знайди товар з цим старим ID і онови його".
            if (isEdit) {
                url = `/api/products?itemId=${editingId}`;
            }
            const res = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            const data = await res.json();
            if (!res.ok) {
                console.error('Server response:', data);
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            if (isEdit) {
                setEditingId(null);
            }
            // create
            await fetchProducts();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            alert('Товар успішно збережено ✅');
            setForm({
                ...startForm
            });
            setSelectedFile(null);
            setCapacityMode('new');
            setColorMode('new');
        } catch (err) {
            console.error('Error creating product:', err);
        } finally{
            setLoading(false);
        }
    };
    const handleEdit = async (product)=>{
        setEditingId(product.itemId);
        // 1) Тягнемо деталі
        const detailsRes = await fetch(`/api/products?category=${product.category}`);
        const allDetails = await detailsRes.json();
        // 2) Знаходимо деталі саме цього товару
        const details = allDetails.find((d)=>d.productId === product.itemId);
        // 3) Сетимо форму
        setForm({
            isActive: product.isActive || true,
            category: product.category || '',
            itemId: product.itemId || '',
            price: product.price?.toString() || '',
            fullPrice: product.fullPrice?.toString() || '',
            image: product.image || '',
            name: product.name || '',
            screen: product.screen || '',
            ram: product.ram || '',
            color: product.color || '',
            year: product.year?.toString() || '',
            capacity: product.capacity || '',
            images: product.images ?? [],
            resolution: details?.resolution || '',
            processor: details?.processor || '',
            camera: details?.camera || '',
            zoom: details?.zoom || '',
            cell: details?.cell || [],
            description: details?.description || [],
            namespaceId: details?.namespaceId || ''
        });
        setNamespaceMode('existing');
        syncVariantModesByNamespace(details?.namespaceId || '');
        const formSection = document.getElementById('admin-form');
        if (formSection) {
            formSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };
    const handleDelete = async (itemId)=>{
        if (!confirm('Точно видалити цей товар?')) return;
        try {
            const res = await fetch(`/api/products?itemId=${itemId}`, {
                method: 'DELETE'
            });
            const data = await res.json();
            console.log('DELETE result:', data);
            if (!res.ok) {
                alert('Помилка: ' + data.error);
                return;
            }
            // Якщо все ок — онови список
            // setProducts((prev) => prev.filter((p) => p.itemId !== itemId));
            await fetchProducts();
            alert('Товар успішно видалено');
        } catch (err) {
            console.error(err);
            alert('Сталася помилка при видаленні');
        }
    };
    async function uploadImages(files) {
        const urls = [];
        for (const file of files){
            const reader = new FileReader();
            const url = await new Promise((resolve, reject)=>{
                reader.onloadend = async ()=>{
                    const base64 = reader.result;
                    try {
                        const res = await fetch('/api/upload', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                file: base64
                            })
                        });
                        if (!res.ok) {
                            reject(`Upload failed for ${file.name}`);
                            return;
                        }
                        const data = await res.json();
                        resolve(data.url);
                    } catch (err) {
                        reject(err);
                    }
                };
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
            urls.push(url);
        }
        return urls;
    }
    const handleToggleActive = async (itemId, isActive)=>{
        try {
            const res = await fetch('/api/products', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    itemId,
                    isActive
                })
            });
            if (!res.ok) throw new Error('Failed to toggle');
            setProducts((prev)=>prev.map((p)=>p.itemId === itemId ? {
                        ...p,
                        isActive
                    } : p));
        } catch  {
            alert('Не вдалося змінити статус');
        }
    };
    const handleLogout = async ()=>{
        await fetch('/api/admin/logout', {
            method: 'POST'
        });
        window.location.href = '/prisma/login';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
                    rel: "stylesheet",
                    href: "/admin.css"
                }, void 0, false, {
                    fileName: "[project]/src/pages/prisma/index.tsx",
                    lineNumber: 504,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/pages/prisma/index.tsx",
                lineNumber: 503,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "admin-shell",
                id: "admin-root",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "container admin-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Breadcrumbs$2f$Breadcrumbs$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Breadcrumbs"], {}, void 0, false, {
                            fileName: "[project]/src/pages/prisma/index.tsx",
                            lineNumber: 508,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
                            className: "admin-panel p-5 mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                                className: "admin-title text-white text-2xl",
                                                children: "Керування товарами"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                lineNumber: 513,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: "admin-subtitle text-sm mt-1",
                                                children: "Додавай товари, варіації кольорів та фасувань у єдиному інтерфейсі."
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                lineNumber: 514,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                        lineNumber: 512,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "admin-topbar mb-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                href: "/prisma",
                                                className: "admin-nav-link active",
                                                children: "Товари"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                lineNumber: 519,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                href: "/prisma/orders",
                                                className: "admin-nav-link",
                                                children: "Замовлення"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                lineNumber: 522,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleLogout,
                                                className: "admin-nav-link danger",
                                                children: "Вийти"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                lineNumber: 525,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                        lineNumber: 518,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/prisma/index.tsx",
                                lineNumber: 511,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/pages/prisma/index.tsx",
                            lineNumber: 510,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "mb-8 admin-panel p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col md:flex-row justify-between items-center gap-4 mb-6 p-4 rounded-xl border border-[#2b3a57] bg-[#0d1422]/80",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-bold text-white flex items-center gap-3",
                                            children: [
                                                "Список товарів",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-gray-300 bg-[#2A2F3E] px-3 py-1 rounded-full border border-[#3E455B]",
                                                    children: filteredProducts.length
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/prisma/index.tsx",
                                                    lineNumber: 538,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/pages/prisma/index.tsx",
                                            lineNumber: 536,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "relative w-full md:w-96",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                        className: "h-5 w-5 text-gray-500",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        viewBox: "0 0 20 20",
                                                        fill: "currentColor",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                            fillRule: "evenodd",
                                                            d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
                                                            clipRule: "evenodd"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/prisma/index.tsx",
                                                            lineNumber: 552,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                                        lineNumber: 546,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/prisma/index.tsx",
                                                    lineNumber: 545,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Пошук...",
                                                    value: searchTerm,
                                                    onChange: (e)=>setSearchTerm(e.target.value),
                                                    className: "admin-input admin-input-icon block w-full py-2.5 sm:text-sm shadow-inner"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/prisma/index.tsx",
                                                    lineNumber: 560,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                searchTerm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setSearchTerm(''),
                                                    className: "admin-clear-btn absolute inset-y-0 right-0 pr-3 flex items-center border-none focus:outline-none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                        className: "h-5 w-5",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        viewBox: "0 0 20 20",
                                                        fill: "currentColor",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                            fillRule: "evenodd",
                                                            d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                                                            clipRule: "evenodd"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/prisma/index.tsx",
                                                            lineNumber: 579,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                                        lineNumber: 573,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/prisma/index.tsx",
                                                    lineNumber: 569,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/pages/prisma/index.tsx",
                                            lineNumber: 544,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/prisma/index.tsx",
                                    lineNumber: 534,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loader$2f$Loader$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Loader"], {}, void 0, false, {
                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                        lineNumber: 593,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)) : filteredProducts.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductsList$2f$ProductsList$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["ProductsList"], {
                                                isAdmin: true,
                                                products: visibleProducts,
                                                onEdit: handleEdit,
                                                onDelete: handleDelete,
                                                onToggleActive: handleToggleActive
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                lineNumber: 596,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            hasMoreProducts && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "mt-5 flex justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setVisibleProductsCount((prev)=>prev + 5),
                                                    className: "admin-nav-link",
                                                    children: [
                                                        "Показати ще (",
                                                        filteredProducts.length - visibleProductsCount,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/prisma/index.tsx",
                                                    lineNumber: 605,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                lineNumber: 604,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true) : // --- БЛОК "НІЧОГО НЕ ЗНАЙДЕНО" ---
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center justify-center py-12 px-4 rounded-xl border-2 border-dashed border-[#2E3345] bg-[#0d1422]/70",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                className: "h-16 w-16 text-[#2E3345] mb-4",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 1.5,
                                                    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/prisma/index.tsx",
                                                    lineNumber: 625,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                lineNumber: 619,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-medium text-white mb-1",
                                                children: "Нічого не знайдено"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                lineNumber: 634,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: "text-gray-400 text-sm text-center max-w-xs",
                                                children: [
                                                    "Ми не знайшли товарів за запитом",
                                                    ' ',
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        className: "text-white font-semibold",
                                                        children: [
                                                            '"',
                                                            searchTerm,
                                                            '"'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                                        lineNumber: 637,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    ". Спробуйте змінити ключові слова."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                lineNumber: 635,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSearchTerm(''),
                                                className: "mt-5 text-[#9353d3] hover:text-[#a86ae8] text-sm font-medium transition-colors bg-transparent border-none cursor-pointer hover:underline",
                                                children: "Очистити пошук"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                lineNumber: 642,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                        lineNumber: 617,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/prisma/index.tsx",
                                    lineNumber: 591,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/prisma/index.tsx",
                            lineNumber: 532,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                            className: "section",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                                id: "admin-form",
                                onSubmit: handleSubmit,
                                className: "space-y-6 text-gray-200 py-6 pb-20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "admin-panel p-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-[#d2def6]",
                                            children: "Швидкий сценарій: 1) Обери namespace, 2) задай фасування/колір, 3) додай фото, 4) натисни зберегти."
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/prisma/index.tsx",
                                            lineNumber: 656,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                        lineNumber: 655,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: sectionClass,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold mb-4 border-b border-[#2E3345] pb-2 text-white",
                                                children: "Основна інформація"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                lineNumber: 664,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: "admin-form-hint mb-4",
                                                children: "Ці поля визначають картку товару в каталозі та звʼязок варіацій."
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                lineNumber: 667,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                                className: labelClass,
                                                                children: "Item ID"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                                lineNumber: 673,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                name: "itemId",
                                                                placeholder: "ex. 12345",
                                                                value: form.itemId,
                                                                onChange: handleChange,
                                                                required: true,
                                                                className: inputClass
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                                lineNumber: 674,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                                        lineNumber: 672,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                                className: labelClass,
                                                                children: "Namespace ID"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                                lineNumber: 684,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                className: "admin-mode-row",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                        className: "admin-mode-group",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                className: `admin-mode-btn ${namespaceMode === 'existing' ? 'active' : ''}`,
                                                                                onClick: ()=>setNamespaceMode('existing'),
                                                                                children: "Існуючий"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                                                lineNumber: 687,
                                                                                columnNumber: 23
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                className: `admin-mode-btn ${namespaceMode === 'new' ? 'active' : ''}`,
                                                                                onClick: ()=>setNamespaceMode('new'),
                                                                                children: "Новий"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                                                lineNumber: 694,
                                                                                columnNumber: 23
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                                                        lineNumber: 686,
                                                                        columnNumber: 21
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                        className: "flex-1",
                                                                        children: namespaceMode === 'existing' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                                                            name: "namespaceId",
                                                                            value: form.namespaceId,
                                                                            onChange: (event)=>handleNamespaceChange(event.target.value),
                                                                            className: inputClass,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                                    value: "",
                                                                                    children: namespaceLoading ? 'Завантаження...' : 'Оберіть namespace'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/pages/prisma/index.tsx",
                                                                                    lineNumber: 710,
                                                                                    columnNumber: 27
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                !namespaceLoading && namespaceOptions.map((namespace)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                                        value: namespace,
                                                                                        children: namespace
                                                                                    }, namespace, false, {
                                                                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                                                                        lineNumber: 715,
                                                                                        columnNumber: 31
                                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/pages/prisma/index.tsx",
                                                                            lineNumber: 704,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                            name: "namespaceId",
                                                                            placeholder: "ex. decors",
                                                                            value: form.namespaceId,
                                                                            onChange: (event)=>handleNamespaceChange(event.target.value),
                                                                            required: true,
                                                                            className: inputClass
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/pages/prisma/index.tsx",
                                                                            lineNumber: 721,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                                                        lineNumber: 702,
                                                                        columnNumber: 21
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                                lineNumber: 685,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                className: "admin-form-hint mt-2",
                                                                children: "Один namespace обʼєднує всі кольори та фасування одного товару."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                                lineNumber: 732,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                                        lineNumber: 683,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                lineNumber: 671,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                        className: labelClass,
                                                        children: "Назва товару"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                                        lineNumber: 739,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                        name: "name",
                                                        placeholder: "Apple iPhone 15",
                                                        value: form.name,
                                                        onChange: handleChange,
                                                        className: inputClass
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                                        lineNumber: 740,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                lineNumber: 738,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                                className: labelClass,
                                                                children: "Ціна"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                                lineNumber: 751,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                name: "price",
                                                                placeholder: "999",
                                                                type: "number",
                                                                value: form.price,
                                                                onChange: handleChange,
                                                                className: inputClass
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                                lineNumber: 752,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                                        lineNumber: 750,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                                className: labelClass,
                                                                children: "Повна ціна"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                                lineNumber: 762,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                name: "fullPrice",
                                                                placeholder: "1200",
                                                                type: "number",
                                                                value: form.fullPrice,
                                                                onChange: handleChange,
                                                                className: inputClass
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                                lineNumber: 763,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                                        lineNumber: 761,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                                className: labelClass,
                                                                children: "Категорія"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                                lineNumber: 773,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                                                name: "category",
                                                                value: form.category,
                                                                onChange: handleChange,
                                                                className: inputClass,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        disabled: true,
                                                                        children: "Оберіть категорію"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                                                        lineNumber: 780,
                                                                        columnNumber: 21
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                        value: "decors",
                                                                        children: "Decors"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                                                        lineNumber: 783,
                                                                        columnNumber: 21
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                        value: "materials",
                                                                        children: "Materials"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                                                        lineNumber: 784,
                                                                        columnNumber: 21
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                        value: "accessories",
                                                                        children: "Accessoires"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                                                        lineNumber: 785,
                                                                        columnNumber: 21
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                                lineNumber: 774,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                                        lineNumber: 772,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                                className: labelClass,
                                                                children: "Рік"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                                lineNumber: 790,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                name: "year",
                                                                placeholder: "2024",
                                                                type: "number",
                                                                min: 2000,
                                                                max: 2100,
                                                                value: form.year,
                                                                onChange: handleChange,
                                                                className: inputClass
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                                lineNumber: 791,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                                        lineNumber: 789,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                lineNumber: 749,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                        className: labelClass,
                                                        children: "Зображення"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                                        lineNumber: 805,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                        type: "file",
                                                        multiple: true,
                                                        accept: "image/*",
                                                        onChange: (e)=>{
                                                            setSelectedFile(e.target.files);
                                                        },
                                                        className: "block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#2A2F3E] file:text-white hover:file:bg-[#3E455B] cursor-pointer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                                        lineNumber: 806,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                lineNumber: 804,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                        lineNumber: 663,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: sectionClass,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold text-white mb-4 border-b border-[#2E3345] pb-2",
                                                children: "Характеристики"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                lineNumber: 825,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: "admin-form-hint mb-4",
                                                children: "Заповнюй тільки релевантні характеристики, інші можна залишити порожніми."
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                lineNumber: 828,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                                                children: [
                                                    [
                                                        {
                                                            key: 'screen',
                                                            label: 'Час роботи',
                                                            placeholder: 'Напр., 60 хв'
                                                        },
                                                        {
                                                            key: 'resolution',
                                                            label: 'Фракція',
                                                            placeholder: 'Напр., 1.0 мм'
                                                        },
                                                        {
                                                            key: 'processor',
                                                            label: 'Країна виробник',
                                                            placeholder: 'Напр., Італія'
                                                        },
                                                        {
                                                            key: 'ram',
                                                            label: 'Витрата',
                                                            placeholder: 'Напр., 1.5 кг/м²'
                                                        },
                                                        {
                                                            key: 'camera',
                                                            label: 'Фактура',
                                                            placeholder: 'Напр., камінцева'
                                                        },
                                                        {
                                                            key: 'zoom',
                                                            label: 'Застосування',
                                                            placeholder: 'Внутрішні/зовнішні'
                                                        }
                                                    ].map(({ key, label, placeholder })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                                    className: labelClass,
                                                                    children: label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/prisma/index.tsx",
                                                                    lineNumber: 841,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                    name: key,
                                                                    placeholder: placeholder,
                                                                    value: form[key],
                                                                    onChange: handleChange,
                                                                    className: inputClass
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/prisma/index.tsx",
                                                                    lineNumber: 842,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, key, true, {
                                                            fileName: "[project]/src/pages/prisma/index.tsx",
                                                            lineNumber: 840,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                                className: labelClass,
                                                                children: "Фасування"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                                lineNumber: 853,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                className: "admin-mode-row",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                        className: "admin-mode-group",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                className: `admin-mode-btn ${capacityMode === 'existing' ? 'active' : ''}`,
                                                                                onClick: ()=>handleCapacityModeChange('existing'),
                                                                                disabled: !capacityOptions.length,
                                                                                children: "Існуюче"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                                                lineNumber: 856,
                                                                                columnNumber: 23
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                className: `admin-mode-btn ${capacityMode === 'new' ? 'active' : ''}`,
                                                                                onClick: ()=>handleCapacityModeChange('new'),
                                                                                children: "Нове"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                                                lineNumber: 864,
                                                                                columnNumber: 23
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                                                        lineNumber: 855,
                                                                        columnNumber: 21
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                        className: "flex-1",
                                                                        children: capacityMode === 'existing' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                                                            name: "capacity",
                                                                            value: form.capacity,
                                                                            onChange: handleChange,
                                                                            className: inputClass,
                                                                            disabled: !capacityOptions.length,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                                    value: "",
                                                                                    children: capacityOptions.length ? 'Оберіть фасування' : 'Немає фасувань для namespace'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/pages/prisma/index.tsx",
                                                                                    lineNumber: 881,
                                                                                    columnNumber: 27
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                capacityOptions.map((capacity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                                        value: capacity,
                                                                                        children: capacity
                                                                                    }, capacity, false, {
                                                                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                                                                        lineNumber: 887,
                                                                                        columnNumber: 29
                                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/pages/prisma/index.tsx",
                                                                            lineNumber: 874,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                            name: "capacity",
                                                                            placeholder: "Напр., 15 кг",
                                                                            value: form.capacity,
                                                                            onChange: handleChange,
                                                                            className: inputClass
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/pages/prisma/index.tsx",
                                                                            lineNumber: 893,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                                                        lineNumber: 872,
                                                                        columnNumber: 21
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                                lineNumber: 854,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                                        lineNumber: 852,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                                className: labelClass,
                                                                children: "Колір"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                                lineNumber: 906,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                className: "admin-mode-row",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                        className: "admin-mode-group",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                className: `admin-mode-btn ${colorMode === 'existing' ? 'active' : ''}`,
                                                                                onClick: ()=>handleColorModeChange('existing'),
                                                                                disabled: !colorOptions.length,
                                                                                children: "Існуючий"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                                                lineNumber: 909,
                                                                                columnNumber: 23
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                className: `admin-mode-btn ${colorMode === 'new' ? 'active' : ''}`,
                                                                                onClick: ()=>handleColorModeChange('new'),
                                                                                children: "Новий"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                                                lineNumber: 917,
                                                                                columnNumber: 23
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                                                        lineNumber: 908,
                                                                        columnNumber: 21
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                        className: "flex-1",
                                                                        children: colorMode === 'existing' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                                                            name: "color",
                                                                            value: form.color,
                                                                            onChange: handleChange,
                                                                            className: inputClass,
                                                                            disabled: !colorOptions.length,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                                    value: "",
                                                                                    children: colorOptions.length ? 'Оберіть колір' : 'Немає кольорів для namespace'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/pages/prisma/index.tsx",
                                                                                    lineNumber: 934,
                                                                                    columnNumber: 27
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                colorOptions.map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                                        value: color,
                                                                                        children: color
                                                                                    }, color, false, {
                                                                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                                                                        lineNumber: 938,
                                                                                        columnNumber: 29
                                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/pages/prisma/index.tsx",
                                                                            lineNumber: 927,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                            name: "color",
                                                                            placeholder: "Напр., білий",
                                                                            value: form.color,
                                                                            onChange: handleChange,
                                                                            className: inputClass
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/pages/prisma/index.tsx",
                                                                            lineNumber: 944,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                                                        lineNumber: 925,
                                                                        columnNumber: 21
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                                lineNumber: 907,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                                        lineNumber: 905,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                lineNumber: 831,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                        lineNumber: 824,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: sectionClass,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-white",
                                                        children: "Рекомендовані поверхні"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                                        lineNumber: 961,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: btnSecondary,
                                                        onClick: ()=>setForm({
                                                                ...form,
                                                                cell: [
                                                                    ...form.cell ?? [],
                                                                    ''
                                                                ]
                                                            }),
                                                        children: "+ Додати поверхню"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                                        lineNumber: 962,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                lineNumber: 960,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "space-y-3 bg-[#0B0E14] p-4 rounded-lg border border-[#2E3345]",
                                                children: [
                                                    (form.cell ?? []).length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-500 text-sm text-center",
                                                        children: "Немає доданих поверхонь"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                                        lineNumber: 974,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    (form.cell ?? []).map((value, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "flex items-end gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-500 text-sm w-6 text-center mb-3",
                                                                    children: [
                                                                        index + 1,
                                                                        "."
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/pages/prisma/index.tsx",
                                                                    lineNumber: 978,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                                            className: labelClass,
                                                                            children: "Назва поверхні"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/pages/prisma/index.tsx",
                                                                            lineNumber: 981,
                                                                            columnNumber: 23
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                            type: "text",
                                                                            value: value,
                                                                            placeholder: "Поверхня...",
                                                                            onChange: (e)=>{
                                                                                const newCells = [
                                                                                    ...form.cell
                                                                                ];
                                                                                newCells[index] = e.target.value;
                                                                                setForm({
                                                                                    ...form,
                                                                                    cell: newCells
                                                                                });
                                                                            },
                                                                            className: inputClass
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/pages/prisma/index.tsx",
                                                                            lineNumber: 982,
                                                                            columnNumber: 23
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/pages/prisma/index.tsx",
                                                                    lineNumber: 980,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>setForm({
                                                                            ...form,
                                                                            cell: form.cell.filter((_, i)=>i !== index)
                                                                        }),
                                                                    className: `${btnDanger} mb-[2px]`,
                                                                    children: "✕"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/prisma/index.tsx",
                                                                    lineNumber: 995,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/src/pages/prisma/index.tsx",
                                                            lineNumber: 977,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                lineNumber: 972,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                        lineNumber: 959,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: sectionClass,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-white",
                                                        children: "Блоки опису"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                                        lineNumber: 1012,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: btnSecondary,
                                                        onClick: ()=>setForm({
                                                                ...form,
                                                                description: [
                                                                    ...form.description,
                                                                    {
                                                                        title: '',
                                                                        text: [
                                                                            ''
                                                                        ]
                                                                    }
                                                                ]
                                                            }),
                                                        children: "+ Add block"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                                        lineNumber: 1013,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                lineNumber: 1011,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "space-y-6",
                                                children: form.description.map((block, blockIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        // Картка блоку опису - теж темна
                                                        className: "bg-[#0B0E14] p-4 rounded-lg border border-[#2E3345] relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setForm({
                                                                        ...form,
                                                                        description: form.description.filter((_, i)=>i !== blockIndex)
                                                                    }),
                                                                className: "absolute top-2 right-2 text-xs text-red-400 hover:text-red-300 bg-[#2A2F3E] px-2 py-1 rounded border border-[#3E455B] hover:bg-[#3E455B] shadow-sm transition-colors",
                                                                children: "Delete Block"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                                lineNumber: 1034,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                className: "mb-4 pr-24",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                                        className: labelClass,
                                                                        children: "Block Title"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                                                        lineNumber: 1048,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        placeholder: 'e.g. "In the box"',
                                                                        value: block.title,
                                                                        onChange: (e)=>{
                                                                            const updated = [
                                                                                ...form.description
                                                                            ];
                                                                            updated[blockIndex].title = e.target.value;
                                                                            setForm({
                                                                                ...form,
                                                                                description: updated
                                                                            });
                                                                        },
                                                                        className: `${inputClass} font-bold`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                                                        lineNumber: 1049,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                                lineNumber: 1047,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                className: "pl-4 border-l-2 border-[#2E3345] space-y-2",
                                                                children: [
                                                                    block.text.map((textItem, textIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-end gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                                    className: "flex-1",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                                                            className: labelClass,
                                                                                            children: [
                                                                                                "Text item ",
                                                                                                textIndex + 1
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/pages/prisma/index.tsx",
                                                                                            lineNumber: 1066,
                                                                                            columnNumber: 29
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                                            type: "text",
                                                                                            value: textItem,
                                                                                            placeholder: "Description line...",
                                                                                            onChange: (e)=>{
                                                                                                const updated = [
                                                                                                    ...form.description
                                                                                                ];
                                                                                                updated[blockIndex].text[textIndex] = e.target.value;
                                                                                                setForm({
                                                                                                    ...form,
                                                                                                    description: updated
                                                                                                });
                                                                                            },
                                                                                            className: `${inputClass} text-sm`
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/pages/prisma/index.tsx",
                                                                                            lineNumber: 1067,
                                                                                            columnNumber: 29
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/pages/prisma/index.tsx",
                                                                                    lineNumber: 1065,
                                                                                    columnNumber: 27
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    onClick: ()=>{
                                                                                        const updated = [
                                                                                            ...form.description
                                                                                        ];
                                                                                        updated[blockIndex].text = updated[blockIndex].text.filter((_, i)=>i !== textIndex);
                                                                                        setForm({
                                                                                            ...form,
                                                                                            description: updated
                                                                                        });
                                                                                    },
                                                                                    className: `${btnDanger} mb-[2px]`,
                                                                                    children: "✕"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/pages/prisma/index.tsx",
                                                                                    lineNumber: 1079,
                                                                                    columnNumber: 27
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, textIndex, true, {
                                                                            fileName: "[project]/src/pages/prisma/index.tsx",
                                                                            lineNumber: 1064,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0))),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>{
                                                                            const updated = [
                                                                                ...form.description
                                                                            ];
                                                                            updated[blockIndex].text.push('');
                                                                            setForm({
                                                                                ...form,
                                                                                description: updated
                                                                            });
                                                                        },
                                                                        className: "text-sm text-[#9353d3] hover:text-[#a86ae8] hover:underline mt-2 flex items-center gap-1 font-medium",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                children: "+"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                                                lineNumber: 1103,
                                                                                columnNumber: 25
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            " Add text row"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                                                        lineNumber: 1094,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                                lineNumber: 1062,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, blockIndex, true, {
                                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                                        lineNumber: 1029,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                lineNumber: 1027,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                        lineNumber: 1010,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "admin-sticky-actions flex justify-end gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    setForm(startForm);
                                                    setCapacityMode('new');
                                                    setColorMode('new');
                                                },
                                                className: "px-6 py-3 bg-[#2A2F3E] text-white border border-[#3E455B] font-semibold rounded-lg hover:bg-[#3E455B] transition-all",
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                lineNumber: 1113,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: "px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 shadow-lg shadow-blue-900/30 transition-all transform hover:-translate-y-0.5",
                                                children: "Додати товар"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/prisma/index.tsx",
                                                lineNumber: 1124,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/prisma/index.tsx",
                                        lineNumber: 1112,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/prisma/index.tsx",
                                lineNumber: 654,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/pages/prisma/index.tsx",
                            lineNumber: 653,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/prisma/index.tsx",
                    lineNumber: 507,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/pages/prisma/index.tsx",
                lineNumber: 506,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = Prisma;
const getServerSideProps = async (context)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$adminAuth$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isAdminAuthenticated"])(context.req)) {
        return {
            props: {}
        };
    }
    return {
        redirect: {
            destination: `/prisma/login?next=${encodeURIComponent(context.resolvedUrl || '/prisma')}`,
            permanent: false
        }
    };
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1cdcb3c6._.js.map