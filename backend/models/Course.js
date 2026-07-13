const mongoose = require('mongoose');

const CATEGORIES = [
  'Frontend Development',
  'Backend & Databases',
  'Mobile Development',
  'CS Core & DSA',
  'Cloud, DevOps & Security',
  'AI & Data Science',
];

const LEVELS = ['Beginner', 'Intermediate', 'Advanced'];

const LessonSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    duration: { type: String, default: '10 min' }, // display string, e.g. "12 min"
    type: {
      type: String,
      enum: ['markdown', 'video', 'quiz', 'assignment'],
      default: 'markdown',
    },
    isPreview: { type: Boolean, default: false }, // true = viewable without enrolling
    content: { type: String, default: '' }, // markdown body or video URL depending on type
  },
  { _id: true }
);

const ModuleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    lessons: [LessonSchema],
  },
  { _id: true }
);

const CourseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, index: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    shortDescription: { type: String, required: true, maxlength: 220 },
    fullDescription: { type: String, default: '' },
    category: { type: String, enum: CATEGORIES, required: true, index: true },
    level: { type: String, enum: LEVELS, required: true },
    price: { type: Number, default: 1 }, // flat $1 model — kept as a field, not hardcoded, for future flexibility
    thumbnail: { type: String, default: '' },
    instructor: { type: String, default: 'TechForge Faculty' },
    duration: { type: String, default: '8 hours' }, // display string
    lessonsCount: { type: Number, default: 0 }, // denormalized, kept in sync on save
    rating: { type: Number, default: 4.7, min: 0, max: 5 },
    studentsCount: { type: Number, default: 0 },
    tags: [{ type: String, trim: true }],
    modules: [ModuleSchema],
    isPublished: { type: Boolean, default: true },
  },
  { timestamps: true }
);

// Keep lessonsCount accurate without requiring every writer to compute it.
CourseSchema.pre('save', function syncLessonsCount(next) {
  this.lessonsCount = this.modules.reduce((sum, m) => sum + m.lessons.length, 0);
  next();
});

CourseSchema.index({ category: 1, level: 1 });
CourseSchema.index({ title: 'text', tags: 'text', shortDescription: 'text' });

module.exports = mongoose.model('Course', CourseSchema);
module.exports.CATEGORIES = CATEGORIES;
module.exports.LEVELS = LEVELS;
