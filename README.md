# 🛒 Shopping App (Tapsi Food - Frontend Assignment)

This is a fully functional shopping application built with **React**, **Vite**, and **TypeScript**.  
Developed as part of the **Tapsi Food Frontend Engineer assignment**, it demonstrates best practices in state management, performance, responsiveness, and developer experience.

---

## ✨ Features

- 🔍 Debounced product search with smooth UX
- 🛒 Cart with quantity control, subtotal, and total amount
- 🧠 Infinite scroll implementation (manual threshold, responsive-aware)
- 🌀 Lazy-loaded images with fallback placeholders
- 🧾 Cart persistence via `localStorage` and cross-tab sync via `storage` event
- 📱 Fully responsive UI (mobile-first + desktop layout)
- ⚙️ Lazy loading of heavy components with `React.lazy`
- 🐳 Dockerized for production deployment
- 🔧 Written entirely in **TypeScript** with clean and modular structure

---

## 🖥️ Project Structure

```
src/
├── components/
│ ├── layout/ → Layout, header, search bar
│ ├── products/ → ProductCard, CartItem, ProductList
│ └── shared/ → Loader
├── context/ → CartContext
├── data/ → Static product data
├── hooks/ → useDebouncedValue, useInfiniteScroll, useIsDesktop
├── pages/ → ShoppingList, ShoppingCart
├── types/ → Shared type definitions
```

---

## 🛠️ Run Locally

### Dev mode (Vite):

```bash
npm install
npm run dev

```

‍‍‍‍‍‍‍‍Then visit:
http://localhost:5173

----

## 🐳 Run with Docker

##  Build the image

```bash
docker build -t shopping-app .
```

## Run the container

```bash
docker run -p 3000:3000 shopping-app
```

Then visit:
http://localhost:3000

---

## ✅ Requirements Implemented

- [x] Shopping List Page
- [x] Cart Page with quantity adjustment
- [x] Lazy-loaded images with fallback
- [x] Search with debounce
- [x] Total price and quantity calculations
- [x] Persistent cart with cross-tab sync
- [x] Infinite scroll with scroll threshold and delay
- [x] Lazy loading of product list
- [x] Responsive design (Mobile + Desktop)
- [x] Dockerfile for deployment

---

### 🧡 Built with love for Tapsi Food

