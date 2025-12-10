# Car Blogging Site - Backend API

Backend API server for the Car Blogging website built with Node.js, Express, and MongoDB.

## Features

- RESTful API endpoints for blog management
- Contact form submissions
- Newsletter subscriptions
- Category management
- Testimonials system
- MongoDB database integration
- Input validation
- CORS enabled for frontend integration

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn

## Installation

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
cp .env.example .env
```

4. Update the `.env` file with your MongoDB connection string:
```
MONGODB_URI=mongodb://localhost:27017/car-blog
PORT=5000
```

## Running the Server

### Development Mode (with auto-reload):
```bash
npm run dev
```

### Production Mode:
```bash
npm start
```

The server will start on `http://localhost:5000` (or the port specified in your `.env` file).

## API Endpoints

### Blogs
- `GET /api/blogs` - Get all blogs (supports query params: `category`, `trending`, `latest`, `limit`)
- `GET /api/blogs/:id` - Get single blog by ID
- `POST /api/blogs` - Create new blog
- `PUT /api/blogs/:id` - Update blog
- `DELETE /api/blogs/:id` - Delete blog

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact submissions (admin)
- `GET /api/contact/:id` - Get single contact submission
- `PATCH /api/contact/:id/read` - Mark contact as read

### Subscriptions
- `POST /api/subscriptions` - Subscribe to newsletter
- `DELETE /api/subscriptions/:email` - Unsubscribe from newsletter
- `GET /api/subscriptions` - Get all subscriptions (admin, supports `active` query param)

### Categories
- `GET /api/categories` - Get all categories
- `GET /api/categories/:id` - Get single category
- `POST /api/categories` - Create new category
- `PUT /api/categories/:id` - Update category
- `DELETE /api/categories/:id` - Delete category

### Testimonials
- `GET /api/testimonials` - Get approved testimonials (supports `approved=false` for admin)
- `GET /api/testimonials/:id` - Get single testimonial
- `POST /api/testimonials` - Submit new testimonial
- `PATCH /api/testimonials/:id/approve` - Approve testimonial (admin)
- `DELETE /api/testimonials/:id` - Delete testimonial

### Health Check
- `GET /api/health` - Server health check

## Example API Usage

### Create a Blog Post
```bash
POST /api/blogs
Content-Type: application/json

{
  "img": "https://example.com/image.jpg",
  "title": "My Car Blog Post",
  "date": "January 15, 2024",
  "author": "John Doe",
  "content": "Blog content here...",
  "authorName": "John Doe",
  "authorBio": "Car enthusiast",
  "authorAvatar": "https://example.com/avatar.jpg",
  "isTrending": true,
  "isLatest": true
}
```

### Submit Contact Form
```bash
POST /api/contact
Content-Type: application/json

{
  "yourName": "John Doe",
  "email": "john@example.com",
  "message": "Your message here"
}
```

### Subscribe to Newsletter
```bash
POST /api/subscriptions
Content-Type: application/json

{
  "email": "user@example.com"
}
```

## Database Models

### Blog
- img (String, required)
- title (String, required)
- date (String, required)
- author (String, required)
- content (String, required)
- authorName (String, required)
- authorBio (String, required)
- authorAvatar (String, required)
- category (ObjectId, ref: Category)
- views (Number, default: 0)
- isTrending (Boolean, default: false)
- isLatest (Boolean, default: false)
- timestamps (createdAt, updatedAt)

### Contact
- yourName (String, required, 2-50 chars)
- email (String, required, validated)
- message (String, required, 10-500 chars)
- isRead (Boolean, default: false)
- timestamps

### Subscription
- email (String, required, unique, validated)
- isActive (Boolean, default: true)
- timestamps

### Category
- name (String, required, unique)
- description (String)
- icon (String)
- timestamps

### Testimonial
- name (String, required)
- email (String, optional)
- message (String, required)
- rating (Number, 1-5, default: 5)
- avatar (String)
- isApproved (Boolean, default: false)
- timestamps

## Notes

- All endpoints return JSON responses
- Error responses follow the format: `{ error: "error message" }`
- Success responses include the requested data
- CORS is enabled for frontend integration
- Input validation is implemented using express-validator

