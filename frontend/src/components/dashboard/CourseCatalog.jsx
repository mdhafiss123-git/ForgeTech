import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal } from 'lucide-react';
import CourseCard from './CourseCard';
import { staggerContainer } from '../../animations/motionVariants';

const CATEGORIES = [
  { value: 'all', label: 'All categories' },
  { value: 'Frontend Development', label: 'Frontend Dev' },
  { value: 'Backend & Databases', label: 'Backend & DB' },
  { value: 'Mobile Development', label: 'Mobile Dev' },
  { value: 'CS Core & DSA', label: 'CS Core & DSA' },
  { value: 'Cloud, DevOps & Security', label: 'Cloud & DevOps' },
  { value: 'AI & Data Science', label: 'AI & Data Science' },
];

const LEVELS = ['all', 'Beginner', 'Intermediate', 'Advanced'];

/**
 * `courses` — full list fetched from the API (private, authenticated).
 * `progressMap` — { [courseId]: completionPercent } for overlaying progress bars.
 * `initialCategory` — optional preset filter, e.g. from a Sidebar deep-link.
 */
export default function CourseCatalog({ courses = [], progressMap = {}, initialCategory = 'all' }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(initialCategory);
  const [level, setLevel] = useState('all');

  useEffect(() => setCategory(initialCategory), [initialCategory]);

  const filtered = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch = !search || course.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === 'all' || course.category === category;
      const matchesLevel = level === 'all' || course.level === level;
      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [courses, search, category, level]);

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-faint" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search courses…"
            className="w-full bg-white border border-surface-border rounded-xl pl-10 pr-4 py-2.5
              text-sm text-ink placeholder:text-ink-faint focus:border-indigo-300 transition-colors"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-white border border-surface-border rounded-xl px-3 py-2.5 text-sm text-ink shrink-0"
          >
            {CATEGORIES.map((c) => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </select>

          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="bg-white border border-surface-border rounded-xl px-3 py-2.5 text-sm text-ink shrink-0"
          >
            {LEVELS.map((l) => (
              <option key={l} value={l}>{l === 'all' ? 'All levels' : l}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-ink-secondary">
          {filtered.length} course{filtered.length !== 1 && 's'} found
        </p>
        {(search || category !== 'all' || level !== 'all') && (
          <button
            onClick={() => { setSearch(''); setCategory('all'); setLevel('all'); }}
            className="flex items-center gap-1.5 text-xs text-ink-secondary hover:text-accent-indigo transition-colors"
          >
            <SlidersHorizontal size={12} /> Clear filters
          </button>
        )}
      </div>

      {filtered.length > 0 ? (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.05)}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
        >
          {filtered.map((course) => (
            <CourseCard key={course.slug} course={course} progressPercent={progressMap[course._id] || 0} />
          ))}
        </motion.div>
      ) : (
        <div className="card-surface flex flex-col items-center justify-center py-16 text-center">
          <p className="text-ink font-medium">No courses match your filters</p>
          <p className="text-sm text-ink-secondary mt-1">Try a different category, level, or search term.</p>
        </div>
      )}
    </div>
  );
}
