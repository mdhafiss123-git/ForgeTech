/**
 * Run with: node backend/scripts/seedCourses.js
 * Wipes and repopulates the courses collection from backend/data/courses.js,
 * and ensures a demo student account exists for local testing.
 */
require('dotenv').config();
const mongoose = require('mongoose');
const Course = require('../models/Course');
const User = require('../models/User');
const courses = require('../data/courses');

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log(`Connected to MongoDB. Seeding ${courses.length} courses...`);

  await Course.deleteMany({});

  let created = 0;
  for (const courseData of courses) {
    const course = await Course.create(courseData);
    created += 1;
    console.log(`  [${created}/${courses.length}] ${course.title} (${course.category}) — ${course.lessonsCount} lessons`);
  }

  const demoEmail = 'demo@techforge.dev';
  const existing = await User.findOne({ email: demoEmail });
  if (!existing) {
    await User.create({ name: 'Demo Student', email: demoEmail, password: 'password123' });
    console.log(`Demo user created: ${demoEmail} / password123`);
  } else {
    console.log('Demo user already exists, skipping.');
  }

  console.log(`Done. ${created} courses seeded.`);
  await mongoose.disconnect();
  process.exit(0);
}

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
