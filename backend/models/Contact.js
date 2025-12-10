import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  yourName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
  },
  message: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 500
  },
  isRead: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;

