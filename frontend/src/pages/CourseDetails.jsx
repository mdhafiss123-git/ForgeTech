import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, ChevronDown, Lock, PlayCircle, FileText, Clock, BookOpen, Star, Check,
} from 'lucide-react';
import { getCourseBySlug } from '../services/courseService';
import { useAuth } from '../context/AuthContext';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { fadeUp } from '../animations/motionVariants';

/**
 * Public course details page. Anyone can view the description and the full
 * syllabus (module/lesson titles, durations, structure) with no login wall.
 * Actual lesson content (markdown/video) stays hidden — that's what the
 * $1 unlocks, and it's the only thing gated behind auth on this page.
 *
 * NOTE: the route param is named :courseId per the routing spec, but it
 * carries the course's `slug` value — this file just treats `courseId`
 * as that slug.
 */
export default function CourseDetails() {
  const { courseId: slug } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const [course, setCourse] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    getCourseBySlug(slug)
      .then(({ data }) => setCourse(data))
      .catch(() => setError('This course could not be found.'));
  }, [slug]);

  const handleEnroll = () => {
    const destination = `/checkout/${slug}`;
    if (isAuthenticated) navigate(destination);
    else navigate('/login', { state: { redirectTo: destination } });
  };

  if (error) {
    return (
      <div className="min-h-screen bg-surface flex flex-col items-center justify-center text-center px-4">
        <p className="text-ink font-medium mb-2">{error}</p>
        <Link to="/courses" className="text-sm text-accent-indigo hover:text-indigo-700">Back to all courses</Link>
      </div>
    );
  }

  if (!course) return <DetailsSkeleton />;

  const lessonCount = course.lessonsCount ?? course.modules.reduce((sum, m) => sum + m.lessons.length, 0);

  return (
    <div className="min-h-screen bg-surface text-ink">
      <DetailsNav />

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10">
        <Link to="/courses" className="inline-flex items-center gap-1.5 text-sm text-ink-secondary hover:text-ink mb-6 transition-colors">
          <ArrowLeft size={14} /> Back to catalog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="min-w-0">
            <Badge difficulty={course.level}>{course.level}</Badge>
            <h1 className="font-display text-3xl md:text-4xl font-semibold text-ink mt-4 leading-tight">
              {course.title}
            </h1>
            <p className="mt-4 text-ink-secondary text-lg leading-relaxed">{course.shortDescription}</p>

            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-ink-secondary">
              <span className="flex items-center gap-1.5 text-amber-600 font-medium">
                <Star size={15} className="fill-amber-500 text-amber-500" /> {course.rating || '4.8'} rating
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={15} /> {course.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <BookOpen size={15} /> {course.modules.length} modules · {lessonCount} lessons
              </span>
            </div>

            {course.fullDescription && (
              <div className="mt-8">
                <h2 className="font-display text-lg font-semibold text-ink mb-2">About this course</h2>
                <p className="text-ink-secondary leading-relaxed">{course.fullDescription}</p>
              </div>
            )}

            <div className="mt-10">
              <h2 className="font-display text-lg font-semibold text-ink mb-4">Full syllabus</h2>
              <SyllabusPreview modules={course.modules} />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.1 }} className="lg:sticky lg:top-24 h-fit">
            <div className="rounded-2xl border border-emerald-200 bg-white shadow-card p-6">
              <div className="flex items-end gap-1 mb-1">
                <span className="font-display text-4xl font-bold text-ink">${course.price ?? 1}</span>
                <span className="text-ink-faint text-sm mb-1">USD flat</span>
              </div>
              <p className="text-xs text-ink-faint mb-6">Lifetime access · no subscription</p>

              <Button variant="emerald" className="w-full" onClick={handleEnroll}>Enroll Now — ${course.price ?? 1}</Button>
              <Button variant="ghost" className="w-full mt-2.5" onClick={handleEnroll}>Start Learning</Button>

              <ul className="mt-6 space-y-2.5">
                {[
                  'Lifetime access to this course',
                  `${lessonCount} lessons across ${course.modules.length} modules`,
                  'Hands-on projects included',
                  'Self-paced progress tracking',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-accent-emeraldSoft text-emerald-700 flex items-center justify-center shrink-0">
                      <Check size={10} strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function SyllabusPreview({ modules }) {
  const [openModules, setOpenModules] = useState(new Set([0]));

  const toggle = (index) => {
    setOpenModules((prev) => {
      const next = new Set(prev);
      next.has(index) ? next.delete(index) : next.add(index);
      return next;
    });
  };

  return (
    <div className="rounded-2xl border border-surface-border bg-white overflow-hidden">
      {modules.map((module, index) => {
        const isOpen = openModules.has(index);
        return (
          <div key={module._id || index} className={index > 0 ? 'border-t border-surface-border' : ''}>
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between gap-3 px-5 py-4 hover:bg-surface-muted transition-colors text-left"
            >
              <div className="min-w-0">
                <p className="text-xs text-ink-faint mb-0.5">Module {index + 1}</p>
                <p className="text-sm font-medium text-ink">{module.title}</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-xs text-ink-faint">{module.lessons.length} lessons</span>
                <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                  <ChevronDown size={16} className="text-ink-faint" />
                </motion.span>
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <ul className="pb-2">
                    {module.lessons.map((lesson) => {
                      const Icon = lesson.type === 'video' ? PlayCircle : FileText;
                      return (
                        <li key={lesson._id} className="flex items-center gap-3 px-5 py-2.5 text-sm text-ink-secondary">
                          <Icon size={14} className="text-ink-faint shrink-0" />
                          <span className="flex-1 truncate">{lesson.title}</span>
                          <span className="text-xs text-ink-faint">{lesson.duration}</span>
                          {lesson.isPreview ? (
                            <span className="text-xs px-1.5 py-0.5 rounded bg-accent-emeraldSoft text-emerald-700 font-medium">Preview</span>
                          ) : (
                            <Lock size={13} className="text-slate-300 shrink-0" />
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

function DetailsNav() {
  return (
    <header className="sticky top-0 z-10 border-b border-surface-border bg-white/80 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-600 to-emerald-500" />
          <span className="font-display font-semibold text-lg tracking-tight text-ink">TechForge</span>
        </Link>
        <Link to="/login" className="text-sm font-medium px-4 py-2 rounded-lg text-ink-secondary hover:text-ink transition-colors">
          Log in
        </Link>
      </div>
    </header>
  );
}

function DetailsSkeleton() {
  return (
    <div className="min-h-screen bg-surface animate-pulse">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">
        <div className="space-y-4">
          <div className="h-6 w-24 bg-slate-200 rounded-full" />
          <div className="h-10 w-2/3 bg-slate-200 rounded-lg" />
          <div className="h-4 w-1/2 bg-slate-100 rounded-lg" />
          <div className="h-64 bg-slate-100 rounded-2xl mt-8" />
        </div>
        <div className="h-80 bg-slate-100 rounded-2xl" />
      </div>
    </div>
  );
}
