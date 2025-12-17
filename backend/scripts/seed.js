import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Blog from '../models/Blog.js';
import Category from '../models/Category.js';
import Testimonial from '../models/Testimonial.js';

dotenv.config();

const seedData = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/car-blog');
    console.log('Connected to MongoDB');

    // Clear existing data
    await Blog.deleteMany({});
    await Category.deleteMany({});
    await Testimonial.deleteMany({});
    console.log('Cleared existing data');

    // Create categories
    const categories = await Category.insertMany([
      { name: 'Vintage Cars', description: 'Classic and vintage automobiles' },
      { name: 'Muscle Cars', description: 'American muscle cars and performance vehicles' },
      { name: 'Luxury Cars', description: 'High-end luxury vehicles' },
      { name: 'Sports Cars', description: 'Sports and performance cars' },
      { name: 'Electric Vehicles', description: 'Modern electric and hybrid vehicles' },
      { name: 'Restoration', description: 'Car restoration projects and tips' }
    ]);
    console.log('Created categories');

    // Create blogs
    const blogs = await Blog.insertMany([
      {
        img: "https://res.cloudinary.com/dv8dtipj1/image/upload/v1752951767/Rectangle_5_1_punyj2.svg",
        title: "Timeless Classics – The Charm of Old Vintage Cars",
        date: "March 12, 2024",
        author: "John Doe",
        content: `There's something undeniably magical about vintage cars. They are more than just machines; they are rolling pieces of history that capture the spirit of a bygone era. Every curve, chrome detail, and handcrafted finish tells a story of craftsmanship, passion, and timeless style. Unlike modern cars built for speed and convenience, vintage cars stand out as symbols of individuality and elegance.

Owning or even admiring an old car connects us to the roots of automotive history. From the majestic 1930s roadsters to the sleek muscle cars of the 60s and 70s, each vintage car represents a unique chapter in the story of transportation. These vehicles were built with attention to detail that's rare in today's mass-produced world.

Because true classics never go out of style.`,
        authorName: "John Doe",
        authorBio: "Car enthusiast and expert mechanic.",
        authorAvatar: "https://res.cloudinary.com/dv8dtipj1/image/upload/v1752951749/Ellipse_81_cprmwb.svg",
        category: categories[0]._id,
        isTrending: true,
        isLatest: true,
        views: 1250
      },
      {
        img: "https://res.cloudinary.com/dv8dtipj1/image/upload/v1752951779/Rectangle_17_mqc56w.svg",
        title: "When Cars Had a Soul – The Legacy of Vintage Automobiles",
        date: "June 02, 2024",
        author: "Jane Smith",
        content: `There was a time when every car carried a personality. The growl of the engine, the weight of the steering wheel, the shine of chrome bumpers — all spoke of an era when cars were more than transportation. They were companions, symbols of freedom, and in many ways, an extension of their owner's identity.

Vintage cars hold a special place in the hearts of enthusiasts because they embody that golden age. Each model tells a story of innovation, design, and the human spirit.`,
        authorName: "Jane Smith",
        authorBio: "Automotive journalist with a passion for classic cars.",
        authorAvatar: "https://res.cloudinary.com/dv8dtipj1/image/upload/v1752951749/Ellipse_81_cprmwb.svg",
        category: categories[0]._id,
        isTrending: true,
        isLatest: false,
        views: 980
      },
      {
        img: "https://res.cloudinary.com/dv8dtipj1/image/upload/v1752951777/Rectangle_17_1_jykery.svg",
        title: "The Golden Era of Muscle Cars – Vintage American Legends",
        date: "March 23, 2025",
        author: "Mike Johnson",
        content: `When you think of raw power and roaring engines, nothing compares to the golden era of American muscle cars. From the late 1960s to the early 1970s, the roads were ruled by legends like the Ford Mustang, Chevrolet Camaro, and Dodge Charger. These cars weren't just transportation — they were a cultural movement.

With bold designs and V8 engines that could shake the ground, muscle cars defined an entire generation. They symbolized freedom, power, and individuality.`,
        authorName: "Mike Johnson",
        authorBio: "Car reviewer and tech enthusiast.",
        authorAvatar: "https://res.cloudinary.com/dv8dtipj1/image/upload/v1757094431/venrick-azcueta-17qa33WJ6zI-unsplash_ltqyhp.jpg",
        category: categories[1]._id,
        isTrending: false,
        isLatest: true,
        views: 750
      },
      {
        img: "https://res.cloudinary.com/dv8dtipj1/image/upload/v1752951772/Rectangle_17_2_ibqsrb.svg",
        title: "European Elegance – Vintage Cars That Redefined Luxury",
        date: "April 16, 2024",
        author: "Emily Davis",
        content: `While American cars were known for muscle, Europe carved its reputation through elegance, style, and engineering finesse. Vintage European cars like the Jaguar E-Type, Mercedes-Benz 300SL and Porsche 911 became icons of design and sophistication.

These cars were built not just to move but to mesmerize. The flowing lines and precision handling made them rolling works of art. Owning one wasn't about showing off; it was about experiencing automotive perfection.`,
        authorName: "Emily Davis",
        authorBio: "Expert in electric vehicles and sustainable transportation.",
        authorAvatar: "https://res.cloudinary.com/dv8dtipj1/image/upload/v1757094434/podmatch-CgCH4V4cNGk-unsplash_u8zumd.jpg",
        category: categories[2]._id,
        isTrending: true,
        isLatest: false,
        views: 1100
      },
      {
        img: "https://res.cloudinary.com/dv8dtipj1/image/upload/v1752951772/Rectangle_17_3_gjz0tt.svg",
        title: "The Art of Restoration – Bringing Vintage Cars Back to Life",
        date: "May 24, 2024",
        author: "Chris Lee",
        content: `Every vintage car has a story, but some stories are hidden under rust, faded paint, and broken engines. That's where restoration comes in — the delicate art of bringing a classic back to its original glory.

For enthusiasts, restoring a vintage car isn't just mechanical work; it's a passion project. It takes patience, skill, and an eye for detail. Every nut and bolt, every stitch of upholstery, and every layer of paint must reflect the car's original spirit.`,
        authorName: "Chris Lee",
        authorBio: "Car designer and automotive artist.",
        authorAvatar: "https://res.cloudinary.com/dv8dtipj1/image/upload/v1757094436/ben-den-engelsen-YUu9UAcOKZ4-unsplash_mmcg2e.jpg",
        category: categories[5]._id,
        isTrending: false,
        isLatest: true,
        views: 650
      }
    ]);
    console.log('Created blogs');

    // Create testimonials
    await Testimonial.insertMany([
      {
        name: "Sarah Williams",
        email: "sarah@example.com",
        message: "This blog has been an incredible resource for learning about vintage cars. The articles are well-written and informative!",
        rating: 5,
        isApproved: true
      },
      {
        name: "Michael Chen",
        email: "michael@example.com",
        message: "As a car restoration enthusiast, I find the restoration guides extremely helpful. Keep up the great work!",
        rating: 5,
        isApproved: true
      },
      {
        name: "Emma Thompson",
        email: "emma@example.com",
        message: "Love reading about the history of classic cars. The blog posts are engaging and educational.",
        rating: 5,
        isApproved: true
      }
    ]);
    console.log('Created testimonials');

    console.log('\n✅ Seed data created successfully!');
    console.log(`📝 Created ${blogs.length} blogs`);
    console.log(`📁 Created ${categories.length} categories`);
    console.log(`💬 Created 3 testimonials`);

    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedData();


