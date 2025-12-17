# Car Blogging Site - Setup Guide

This guide will help you set up both the frontend and backend for the Car Blogging site.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn

## Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```bash
# Copy the example file
cp .env.example .env
```

4. Update the `.env` file with your MongoDB connection string:
```env
MONGODB_URI=mongodb://localhost:27017/car-blog
PORT=5000
NODE_ENV=development
```

   For MongoDB Atlas (cloud), use:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/car-blog?retryWrites=true&w=majority
```

5. Seed the database (optional but recommended):
```bash
npm run seed
```

6. Start the backend server:
```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

The backend will run on `http://localhost:5000`

## Frontend Setup

1. Navigate to the project root directory (if not already there):
```bash
cd ..
```

2. Install dependencies (if not already installed):
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

4. Start the frontend development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173` (or the port Vite assigns)

## Running Both Servers

You'll need to run both servers simultaneously:

### Option 1: Two Terminal Windows
- Terminal 1: `cd backend && npm run dev`
- Terminal 2: `npm run dev` (from root)

### Option 2: Use a Process Manager
You can use tools like `concurrently` or `npm-run-all` to run both servers with one command.

## API Endpoints

### Blogs
- `GET /api/blogs` - Get all blogs
- `GET /api/blogs?trending=true` - Get trending blogs
- `GET /api/blogs?latest=true` - Get latest blogs
- `GET /api/blogs/:id` - Get single blog by ID
- `POST /api/blogs` - Create new blog (admin)
- `PUT /api/blogs/:id` - Update blog (admin)
- `DELETE /api/blogs/:id` - Delete blog (admin)

### Contact
- `POST /api/contact` - Submit contact form

### Subscriptions
- `POST /api/subscriptions` - Subscribe to newsletter
- `DELETE /api/subscriptions/:email` - Unsubscribe

### Categories
- `GET /api/categories` - Get all categories

### Testimonials
- `GET /api/testimonials` - Get approved testimonials
- `POST /api/testimonials` - Submit testimonial

## Frontend Features Integrated

✅ Home page fetches blogs from API
✅ Blog listing page fetches from API
✅ Single blog view fetches from API
✅ Contact form submits to backend
✅ Newsletter subscription (navbar modal and footer) submits to backend
✅ Loading states and error handling
✅ Toast notifications for user feedback

## Troubleshooting

### Backend won't start
- Check if MongoDB is running (if using local MongoDB)
- Verify your `.env` file has correct MongoDB URI
- Check if port 5000 is available

### Frontend can't connect to backend
- Ensure backend is running on port 5000
- Check `VITE_API_BASE_URL` in frontend `.env` file
- Verify CORS is enabled in backend (it should be by default)

### Database connection errors
- Verify MongoDB is running
- Check MongoDB connection string in `.env`
- Ensure MongoDB Atlas IP whitelist includes your IP (if using Atlas)

## Development Tips

1. **Database Seeding**: Run `npm run seed` in the backend directory to populate initial data
2. **API Testing**: Use tools like Postman or Thunder Client to test API endpoints
3. **Environment Variables**: Never commit `.env` files to version control
4. **Hot Reload**: Both frontend and backend support hot reload in development mode

## Production Deployment

### Backend
1. Set `NODE_ENV=production` in `.env`
2. Use a process manager like PM2
3. Set up proper MongoDB connection (preferably MongoDB Atlas)
4. Configure CORS for your frontend domain

### Frontend
1. Build the frontend: `npm run build`
2. Serve the `dist` folder using a web server (nginx, Apache, etc.)
3. Update `VITE_API_BASE_URL` to your production backend URL

## Support

If you encounter any issues, check:
1. Console logs in both frontend and backend
2. Network tab in browser DevTools
3. Backend server logs
4. MongoDB connection status


