import express from 'express';
import Subscription from '../models/Subscription.js';
import { body, validationResult } from 'express-validator';

const router = express.Router();

// Validation rules
const subscriptionValidation = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email')
];

// Subscribe to newsletter
router.post('/', subscriptionValidation, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email } = req.body;

    // Check if already subscribed
    const existingSubscription = await Subscription.findOne({ email });
    
    if (existingSubscription) {
      if (existingSubscription.isActive) {
        return res.status(400).json({ 
          message: 'Email is already subscribed' 
        });
      } else {
        // Reactivate subscription
        existingSubscription.isActive = true;
        await existingSubscription.save();
        return res.json({ 
          message: 'Subscription reactivated successfully',
          subscription: existingSubscription 
        });
      }
    }

    const subscription = new Subscription({ email });
    await subscription.save();
    
    res.status(201).json({ 
      message: 'Successfully subscribed to newsletter',
      subscription 
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Unsubscribe from newsletter
router.delete('/:email', async (req, res) => {
  try {
    const subscription = await Subscription.findOne({ 
      email: req.params.email.toLowerCase() 
    });
    
    if (!subscription) {
      return res.status(404).json({ error: 'Subscription not found' });
    }

    subscription.isActive = false;
    await subscription.save();
    
    res.json({ message: 'Successfully unsubscribed from newsletter' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all subscriptions (admin)
router.get('/', async (req, res) => {
  try {
    const { active } = req.query;
    let query = {};
    
    if (active !== undefined) {
      query.isActive = active === 'true';
    }

    const subscriptions = await Subscription.find(query).sort({ createdAt: -1 });
    res.json(subscriptions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;


