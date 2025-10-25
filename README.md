# 🛒 CRUD App — Full Stack Product Management (Next.js + Express + MongoDB)

A **Full Stack CRUD Application** built using **Next.js (frontend)** + **Express.js (backend)** + **MongoDB**.  

Users can **create, read, update, and delete products** with a clean UI and REST API backend.

---

## ⚙️ Tech Stack

### 🖥️ Frontend
- **Next.js 14+ (Pages / App Router)**
- **React Hooks**
- **Axios** (API calls)
- **TailwindCSS / Simple CSS** (styling)
- **Link navigation** (Next.js `Link`)

### ⚙️ Backend
- **Node.js** + **Express.js**
- **MongoDB + Mongoose**
- **CORS** (cross-origin requests)
- **Controllers & Routes Architecture**

---

## 📂 Folder Structure

```bash
📦 crud-app
├── 📁 backend
│   ├── config.js
│   ├── server.js
│   ├── controllers/
│   │   └── productController.js
│   └── routes/
│       └── productRoutes.js
├── 📁 frontend
│   ├── pages/
│   │   ├── index.jsx
│   │   └── create.jsx
│   ├── components/
│   │   └── ProductCard.jsx
│   ├── services/
│   │   └── api.js
│   └── package.json
└── README.md

🚀 Setup Instructions
🔹 Backend Setup

Navigate to backend folder:

cd backend


Install dependencies:

npm install


Create .env file:

PORT=5001
MONGO_URI=your_mongodb_connection_string


Start backend server:

node server.js


✅ Backend running at: http://localhost:5001

🔹 Frontend Setup

Navigate to frontend folder:

cd frontend


Install dependencies:

npm install


Start development server:

npm run dev


✅ Frontend running at: http://localhost:3000

📡 API Endpoints
🔸 Product Routes

Create Product
POST /api/productRoutes/
Body:

{
  "name": "Product Name",
  "price": 100,
  "description": "Product description"
}


Get Products
GET /api/productRoutes/

Update Product
PUT /api/productRoutes/:id

Delete Product
DELETE /api/productRoutes/:id

🧑‍💻 Frontend Flow

Home Page (/)

Fetches all products using getProducts API

Displays products in a table

Delete functionality available per product

Link to /create page for adding products

Create Page (/create)

Form to add a new product

POST request to backend API

ProductCard Component

Reusable component for table rows

Handles product display & delete

🌐 Deployment Guide
Backend (Render / Heroku)

Push backend folder to GitHub

Add environment variables:

PORT=your_port
MONGO_URI=your_mongodb_connection_string


Deploy as Web Service

Frontend (Vercel)

Import repo in Vercel

Set root directory to frontend

Environment variable:

NEXT_PUBLIC_API_URL=https://your-backend.onrender.com


Deploy

🧠 Notes

Keep .env files private

Replace local URLs with environment variables

MongoDB Atlas recommended for cloud DB

👨‍💻 Author

Pankaj Upadhyay
📧 upadhayay.pankaj1986@gmail.com

💼 GitHub: github.com/pu1986

⭐ If this project helped you, give it a star on GitHub!
💥 CRUD App — Built with ❤️ using Next.js, Express & MongoDB