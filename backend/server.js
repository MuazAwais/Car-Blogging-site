import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import blogRoutes from './routes/blogRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import subscriptionRoutes from './routes/subscriptionRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import testimonialRoutes from './routes/testimonialRoutes.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/subscriptions', subscriptionRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/testimonials', testimonialRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Start server regardless of MongoDB connection
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});

// Database connection (non-blocking)
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/car-blog';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ Connected to MongoDB');
})
.catch((error) => {
  console.error('⚠️  MongoDB connection error:', error.message);
  console.log('⚠️  Server is running but database features may not work.');
  console.log('⚠️  To fix:');
  console.log('   1. Install MongoDB or use MongoDB Atlas');
  console.log('   2. Update MONGODB_URI in .env file');
  console.log('   3. Restart the server');
});

export default app;

