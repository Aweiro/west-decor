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
  "/_error": [
    "static/chunks/pages/_error.js"
  ],
  "/cart": [
    "static/chunks/pages/cart.js"
  ],
  "/favorites": [
    "static/chunks/pages/favorites.js"
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
    "/HomePage/HomePage",
    "/HomePage/components/CategoriesBlock",
    "/HomePage/components/CategoriesBlock/CategoriesBlock",
    "/_app",
    "/_error",
    "/api/products",
    "/api/upload",
    "/cart",
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