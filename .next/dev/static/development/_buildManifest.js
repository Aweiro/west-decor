self.__BUILD_MANIFEST = {
  "/": [
    "static/chunks/pages/index.js"
  ],
  "/[...all]": [
    "static/chunks/pages/[...all].js"
  ],
  "/[category]": [
    "static/chunks/pages/[category].js"
  ],
  "/[category]/[productId]": [
    "static/chunks/pages/[category]/[productId].js"
  ],
  "/cart": [
    "static/chunks/pages/cart.js"
  ],
  "/prisma": [
    "static/chunks/pages/prisma.js"
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
    "/api/products",
    "/api/upload",
    "/cart",
    "/components/CategoriesBlock",
    "/components/CategoriesBlock/CategoriesBlock",
    "/favorites",
    "/prisma",
    "/[category]",
    "/[category]/CatalogPage/CatalogPage",
    "/[category]/ProductDetailsPage/ProductDetailsPage",
    "/[category]/[productId]",
    "/[...all]"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()