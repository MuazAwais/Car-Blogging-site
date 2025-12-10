import express from 'express';
import Testimonial from '../models/Testimonial.js';
import { body, validationResult } from 'express-validator';

const router = express.Router();

// Validation rules
const testimonialValidation = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Name must be between 2 and 50 characters'),
  body('message')
    .trim()
    .isLength({ min: 10, max: 500 })
    .withMessage('Message must be between 10 and 500 characters'),
  body('rating')
    .optional()
    .isInt({ min: 1, max: 5 })
    .withMessage('Rating must be between 1 and 5')
];

// Get all approved testimonials
router.get('/', async (req, res) => {
  try {
    const { approved } = req.query;
    let query = {};
    
    // If not admin, only show approved testimonials
    if (approved !== 'false') {
      query.isApproved = true;
    }

    const testimonials = await Testimonial.find(query)
      .sort({ createdAt: -1 })
      .limit(10);
    
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single testimonial
router.get('/:id', async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);
    
    if (!testimonial) {
      return res.status(404).json({ error: 'Testimonial not found' });
    }

    res.json(testimonial);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new testimonial
router.post('/', testimonialValidation, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const testimonial = new Testimonial(req.body);
    await testimonial.save();
    
    res.status(201).json({ 
      message: 'Testimonial submitted successfully. It will be reviewed before publishing.',
      testimonial 
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Approve testimonial (admin)
router.patch('/:id/approve', async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      { isApproved: true },
      { new: true }
    );
    
    if (!testimonial) {
      return res.status(404).json({ error: 'Testimonial not found' });
    }

    res.json(testimonial);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete testimonial
router.delete('/:id', async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndDelete(req.params.id);
    
    if (!testimonial) {
      return res.status(404).json({ error: 'Testimonial not found' });
    }

    res.json({ message: 'Testimonial deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;

