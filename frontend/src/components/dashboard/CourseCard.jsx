import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, BookOpen } from 'lucide-react';
import Badge from '../ui/Badge';
import ProgressBar from '../ui/ProgressBar';
import { cardEnter, cardHover } from '../../animations/motionVariants';

/**
 * Dashboard course card — for logged-in students browsing the private
 * catalog. Matches the current Course schema (category/level/price) and
 * links to the protected, unlocked viewer at /courses/:slug.
 */
export default function CourseCard({ course, progressPercent = 0 }) {
  const lessonCount = course.lessonsCount ?? course.modules?.reduce((sum, m) => sum + (m.lessons?.length || 0), 0) ?? 0;

  return (
    <motion.div variants={cardEnter} whileHover={cardHover}>
      <Link
        to={`/courses/${course.slug}`}
        className="group flex flex-col rounded-2xl border border-surface-border bg-white p-5 shadow-soft hover:shadow-card transition-shadow duration-300"
      >
        <div className="flex items-start justify-between gap-2 mb-3">
          <Badge difficulty={course.level}>{course.level}</Badge>
          <span className="text-xs text-ink-faint">{course.category}</span>
        </div>

        <h3 className="font-display font-semibold text-ink group-hover:text-accent-indigo transition-colors line-clamp-2">
          {course.title}
        </h3>
        <p className="mt-1.5 text-sm text-ink-secondary line-clamp-2">{course.shortDescription}</p>

        <div className="mt-4 flex items-center gap-4 text-xs text-ink-secondary">
          <span className="flex items-center gap-1">
            <Clock size={13} /> {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <BookOpen size={13} /> {lessonCount} lessons
          </span>
        </div>

        <div className="mt-4 pt-4 border-t border-surface-border">
          <ProgressBar percent={progressPercent} accent="emerald" showLabel />
        </div>
      </Link>
    </motion.div>
  );
}
