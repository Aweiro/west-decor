self.__BUILD_MANIFEST = {
  "/": [
    "static/chunks/pages/index.js"
  ],
  "/[category]": [
    "static/chunks/pages/[category].js"
  ],
  "/[category]/[productId]": [
    "static/chunks/pages/[category]/[productId].js"
  ],
  "/prisma": [
    "static/chunks/pages/prisma.js"
  ],
  "/prisma/login": [
    "static/chunks/pages/prisma/login.js"
  ],
  "/prisma/orders": [
    "static/chunks/pages/prisma/orders.js"
  ],
  "__rewrites": {
    "afterFiles": [],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/",
    "/_app",
    "/_error",
    "/api/admin/login",
    "/api/admin/logout",
    "/api/admin/session",
    "/api/orders",
    "/api/products",
    "/api/upload",
    "/cart",
    "/components/CategoriesBlock",
    "/components/CategoriesBlock/CategoriesBlock",
    "/favorites",
    "/prisma",
    "/prisma/login",
    "/prisma/orders",
    "/[category]",
    "/[category]/CatalogPage/CatalogPage",
    "/[category]/ProductDetailsPage/ProductDetailsPage",
    "/[category]/[productId]",
    "/[...all]"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()