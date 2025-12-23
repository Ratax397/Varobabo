# Varobabo — E‑commerce App (Next.js)

🌐 **[View Live Demo](https://varobabo-oeob.vercel.app/)**

Short, modern e‑commerce web app with a buyer storefront and a simple seller portal. Built on Next.js App Router with Clerk authentication, MongoDB (Mongoose), Cloudinary for media, and Inngest for event-driven workflows.

## Features
- **Authentication & Roles**: Clerk-powered auth; supports buyer and seller (via Clerk `publicMetadata.role = "seller"`).
- **Catalog**: Product listing and product details pages with image gallery.
- **Seller Portal**: Add products with multi‑image upload to Cloudinary; view seller product list and orders.
- **Cart & Checkout**: Add/update/remove items; order summary with totals and fees; place orders.
- **Addresses**: Add and store shipping addresses.
- **Orders**: Buyers can view their orders; sellers can view all orders.
- **Event Processing**: Inngest syncs Clerk users to DB and batches order creation events.
- **UI/UX**: Responsive Tailwind CSS layout with reusable components.
- **🌐 [Live Demo](https://varobabo-oeob.vercel.app/)**

## Tech Stack
- Next.js (App Router), React
- Tailwind CSS
- Clerk (auth)
- MongoDB + Mongoose
- Cloudinary (image upload)
- Inngest (background/event jobs)
- Axios, react-hot-toast

## Quick Start
1. Install dependencies: `npm install`
2. Create a `.env` file (see below).
3. Run the app: `npm run dev`
4. Open http://localhost:3000

## Environment Variables (.env)
```
# Database (DB name "Varobabo" is appended in code)
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster0.example.mongodb.net

# Auth (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# UI
NEXT_PUBLIC_CURRENCY=$

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
```

## Scripts
- `npm run dev` – start dev server (Turbopack)
- `npm run build` – production build
- `npm run start` – start production server
- `npm run lint` – lint

## API Surface (brief)
- **Products**
  - `GET /api/product/list` – list all products
  - `POST /api/product/add` – add product (seller; multipart; auth)
  - `GET /api/product/seller-list` – list seller products (seller; auth)
- **User**
  - `GET /api/user/data` – current user profile (auth)
  - `POST /api/user/add-address` – add address (auth)
- **Cart**
  - `GET /api/cart/get` – get cart (auth)
  - `POST /api/cart/update` – update cart (auth)
- **Orders**
  - `POST /api/order/create` – place order (auth)
  - `GET /api/order/list` – user orders (auth)
  - `GET /api/order/seller-orders` – all orders (seller; auth)
- **Inngest**
  - `GET|POST|PUT /api/inngest` – Inngest handler for user sync and order creation events

## Notes
- Remote images are allowed via Next Image config (Cloudinary and GitHub raw domains).
- To grant seller access, set the Clerk user’s `publicMetadata.role` to `seller`.

