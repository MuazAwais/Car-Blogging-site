import express from 'express';
import Blog from '../models/Blog.js';

const router = express.Router();

// Get all blogs
router.get('/', async (req, res) => {
  try {
    const { category, trending, latest, limit } = req.query;
    let query = {};

    if (category) {
      query.category = category;
    }
    if (trending === 'true') {
      query.isTrending = true;
    }
    if (latest === 'true') {
      query.isLatest = true;
    }

    let blogs = Blog.find(query).sort({ createdAt: -1 });
    
    if (limit) {
      blogs = blogs.limit(parseInt(limit));
    }

    const result = await blogs.populate('category', 'name');
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single blog by ID
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate('category', 'name');
    
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    // Increment views
    blog.views += 1;
    await blog.save();

    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new blog
router.post('/', async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update blog
router.put('/:id', async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    res.json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete blog
router.delete('/:id', async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;


