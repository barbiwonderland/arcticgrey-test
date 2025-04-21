# 🐺 Hydrogen Challenge – Arctic Grey 

This project is a **technical challenge** built with [Hydrogen](https://shopify.dev/custom-storefronts/hydrogen), Shopify’s stack for headless commerce. It's designed as part of a technical interview process.

The repository features a minimal yet functional implementation using modern tools from the Shopify and Remix ecosystem — an ideal foundation for building customized e-commerce experiences.



---

## 🚀 Tech Stack

- [Hydrogen](https://shopify.dev/custom-storefronts/hydrogen)
- [Remix](https://remix.run/)
- [Oxygen](https://shopify.dev/docs/custom-storefronts/hosting/oxygen)
- [Vite](https://vitejs.dev/)
- [Shopify CLI](https://shopify.dev/docs/tools/cli)
- [GraphQL Codegen](https://www.graphql-code-generator.com/)
- [TypeScript](https://www.typescriptlang.org/)
- ESLint & Prettier

---

## ⚠️ Environment Variables

Before running the application, make sure to set your environment variables in a `.env` file at the root of the project.

Here's an example of what your `.env` file might look like:

```env
SESSION_SECRET="foobar"
PRIVATE_STOREFRONT_API_TOKEN=shpat_****************************
PUBLIC_CUSTOMER_ACCOUNT_API_CLIENT_ID=shp_*************************
PUBLIC_CUSTOMER_ACCOUNT_API_URL=https://shopify.com/724**********
PUBLIC_STORE_DOMAIN=store-name.myshopify.com
PUBLIC_STOREFRONT_API_TOKEN=4bc1******************************
PUBLIC_STOREFRONT_ID=29***
SHOP_ID=724**********
```



## 📦 Installation & Local Development

**Requirements:**

- Node.js v18.0.0 or higher

**Clone the repository ( Main branch ):**

```bash
git clone https://github.com/barbiwonderland/artictgrey-test
cd artictgrey-test
```
**Install npm dependencies**
```bash
npm install
```
**▶️ Run the application locally**
```bash
npm run dev
```

**Live version**
- [https://artic-grey-test.netlify.app/](https://artic-grey-test.netlify.app/)
