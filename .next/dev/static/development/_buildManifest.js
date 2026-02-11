self.__BUILD_MANIFEST = {
  "/": [
    "static/chunks/pages/index.js"
  ],
  "/[category]": [
    "static/chunks/pages/[category].js"
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