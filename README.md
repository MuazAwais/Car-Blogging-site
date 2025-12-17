# Car Blogging Site

A full-stack car blogging website built with React, Node.js, Express, and MongoDB.

## 🚀 Quick Start

### Run Both Servers (Recommended)

```bash
npm run dev:all
```

This will start both backend and frontend servers simultaneously!

- **Backend**: http://localhost:5000
- **Frontend**: http://localhost:5173

### Run Servers Separately

**Backend only:**
```bash
cd backend
npm install
npm run dev
```

**Frontend only:**
```bash
npm install
npm run dev
```

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

## 🛠️ Setup

1. **Install dependencies:**
   ```bash
   # Frontend
   npm install
   
   # Backend
   cd backend
   npm install
   ```

2. **Configure environment variables:**
   
   Create `backend/.env`:
   ```env
   MONGODB_URI=mongodb://localhost:27017/car-blog
   PORT=5000
   JWT_SECRET=your-secret-key
   ```
   
   Create `.env` in root:
   ```env
   VITE_API_BASE_URL=http://localhost:5000/api
   ```

3. **Seed database (optional):**
   ```bash
   cd backend
   npm run seed
   ```

## 📚 Documentation

- [SETUP.md](./SETUP.md) - Complete setup guide
- [QUICK_START.md](./QUICK_START.md) - Quick start guide
- [RUN_BOTH.md](./RUN_BOTH.md) - Running both servers
- [AUTHENTICATION.md](./AUTHENTICATION.md) - Authentication system
- [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) - Troubleshooting guide

## ✨ Features

- ✅ Blog management (CRUD)
- ✅ User authentication (JWT)
- ✅ Contact form
- ✅ Newsletter subscriptions
- ✅ Categories
- ✅ Testimonials
- ✅ Responsive design
- ✅ Modern UI with Tailwind CSS

## 🎯 Available Scripts

- `npm run dev` - Start frontend only
- `npm run dev:all` - Start both servers ⭐
- `npm run dev:backend` - Start backend only
- `npm run dev:frontend` - Start frontend only
- `npm run build` - Build for production
- `npm run lint` - Run ESLint

## 📖 Learn More

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Express Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
