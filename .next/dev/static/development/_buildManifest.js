self.__BUILD_MANIFEST = {
  "/[...all]": [
    "static/chunks/pages/[...all].js"
  ],
  "/[category]": [
    "static/chunks/pages/[category].js"
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
    "/components/CategoriesBlock/CategoriesBlock",
    "/favorites",
    "/prisma",
    "/prisma/[category]/CatalogPage/CatalogPage",
    "/prisma/[category]/ProductDetailsPage/ProductDetailsPage",
    "/prisma/[category]/[productId]",
    "/[category]",
    "/[category]/CatalogPage/CatalogPage",
    "/[category]/ProductDetailsPage/ProductDetailsPage",
    "/[category]/[productId]",
    "/[...all]"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()