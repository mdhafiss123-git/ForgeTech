import { useEffect, useState, useMemo } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Clock, BookOpen, Star, AlertCircle, SearchX } from 'lucide-react';
import { Code2, Server, Smartphone, Cpu, Cloud, Sparkles, LayoutGrid } from 'lucide-react';
import { getCourses } from '../services/courseService';
import Badge from '../components/ui/Badge';
import { staggerContainer, cardEnter, cardHover, slideInLeft } from '../animations/motionVariants';

const CATEGORIES = [
  { value: 'all', label: 'All Courses', icon: LayoutGrid },
  { value: 'Frontend Development', label: 'Frontend Dev', icon: Code2 },
  { value: 'Backend & Databases', label: 'Backend & DB', icon: Server },
  { value: 'Mobile Development', label: 'Mobile Dev', icon: Smartphone },
  { value: 'CS Core & DSA', label: 'CS Core & DSA', icon: Cpu },
  { value: 'Cloud, DevOps & Security', label: 'Cloud & DevOps', icon: Cloud },
  { value: 'AI & Data Science', label: 'AI & Data Science', icon: Sparkles },
];

const LEVELS = ['all', 'Beginner', 'Intermediate', 'Advanced'];

/**
 * Public course catalog — no auth required. Anyone can browse, filter,
 * and search all 50+ courses. Clicking a card routes to the public
 * /course/:courseId details page, never to login.
 */
export default function CoursesPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [courses, setCourses] = useState([]);
  const [status, setStatus] = useState('loading'); // 'loading' | 'success' | 'error'
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [category, setCategory] = useState(searchParams.get('category') || 'all');
  const [level, setLevel] = useState('all');

  const loadCourses = () => {
    setStatus('loading');
    getCourses()
      .then((res) => {
        setCourses(res.data || []);
        setStatus('success');
      })
      .catch((err) => {
        console.error('Failed to load courses', err);
        setStatus('error');
      });
  };

  useEffect(() => {
    loadCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep the URL shareable/bookmarkable as filters change.
  useEffect(() => {
    const params = {};
    if (search) params.search = search;
    if (category !== 'all') params.category = category;
    setSearchParams(params, { replace: true });
  }, [search, category, setSearchParams]);

  const filtered = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        !search || course.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === 'all' || course.category === category;
      const matchesLevel = level === 'all' || course.level === level;
      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [courses, search, category, level]);

  return (
    <div className="min-h-screen bg-surface text-slate-900">
      <CatalogNav />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 flex flex-col lg:flex-row gap-8">
        {/* Category sidebar (top bar on mobile) */}
        <motion.aside
          initial="hidden"
          animate="visible"
          variants={slideInLeft}
          className="lg:w-60 shrink-0"
        >
          <div className="lg:sticky lg:top-24">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 px-1">
              Categories
            </p>
            <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
              {CATEGORIES.map(({ value, label, icon: Icon }) => (
                <button
                  key={value}
                  onClick={() => setCategory(value)}
                  className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap
                    transition-all duration-200 shrink-0 ${
                      category === value
                        ? 'bg-indigo-50 text-indigo-600 border border-indigo-200'
                        : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-transparent'
                    }`}
                >
                  <Icon size={16} />
                  {label}
                </button>
              ))}
            </div>

            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 mt-6 px-1 hidden lg:block">
              Level
            </p>
            <div className="hidden lg:flex flex-col gap-2">
              {LEVELS.map((l) => (
                <button
                  key={l}
                  onClick={() => setLevel(l)}
                  className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    level === l ? 'text-slate-900 font-medium' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {l === 'all' ? 'All levels' : l}
                </button>
              ))}
            </div>
          </div>
        </motion.aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">
          <div className="relative mb-6">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search by course title…"
              className="w-full bg-white border border-surface-border rounded-xl pl-10 pr-4 py-3
                text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-400 transition-colors"
            />
          </div>

          <p className="text-sm text-slate-500 mb-5">
            {status === 'loading' ? 'Loading courses…' : `${filtered.length} course${filtered.length !== 1 ? 's' : ''} found`}
          </p>

          {status === 'loading' && <CatalogSkeleton />}

          {status === 'error' && (
            <div className="card-surface flex flex-col items-center justify-center py-16 text-center">
              <AlertCircle className="text-rose-500 mb-3" size={28} />
              <p className="text-slate-700 font-medium">We couldn't load the course catalog</p>
              <p className="text-sm text-slate-500 mt-1 mb-4">Check your connection and try again.</p>
              <button
                onClick={loadCourses}
                className="text-sm font-medium px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
              >
                Retry
              </button>
            </div>
          )}

          {status === 'success' && filtered.length > 0 && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer(0.06)}
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
            >
              {filtered.map((course) => (
                <PublicCourseCard
                  key={course.slug}
                  course={course}
                  onClick={() => navigate(`/course/${course.slug}`)}
                />
              ))}
            </motion.div>
          )}

          {status === 'success' && filtered.length === 0 && (
            <div className="card-surface flex flex-col items-center justify-center py-16 text-center">
              <SearchX className="text-slate-300 mb-3" size={28} />
              <p className="text-slate-700 font-medium">No courses match your filters</p>
              <p className="text-sm text-slate-500 mt-1">Try a different category, level, or search term.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

function CatalogNav() {
  return (
    <header className="sticky top-0 z-10 border-b border-surface-border bg-surface/90 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-emerald-500" />
          <span className="font-display font-semibold text-lg tracking-tight text-slate-900">TechForge</span>
        </Link>
        <Link
          to="/login"
          className="text-sm font-medium px-4 py-2 rounded-lg text-slate-600 hover:text-slate-900 transition-colors"
        >
          Log in
        </Link>
      </div>
    </header>
  );
}

function PublicCourseCard({ course, onClick }) {
  const lessonCount = course.lessonsCount ?? course.modules?.reduce((sum, m) => sum + (m.lessons?.length || 0), 0) ?? 0;

  return (
    <motion.button
      variants={cardEnter}
      whileHover={cardHover}
      onClick={onClick}
      className="group relative text-left rounded-2xl border border-surface-border bg-white p-5 flex flex-col
        shadow-card transition-shadow duration-300 hover:shadow-card-hover"
    >
      <div className="absolute -top-3 right-5 px-3 py-1 rounded-full bg-emerald-500 text-white
        text-xs font-bold shadow-[0_4px_16px_-2px_rgba(16,185,129,0.4)]">
        $1 USD
      </div>

      <div className="flex items-center justify-between gap-2 mb-3">
        <Badge difficulty={course.level}>{course.level}</Badge>
        <span className="text-xs text-slate-400">{course.category}</span>
      </div>

      <h3 className="font-display font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
        {course.title}
      </h3>
      <p className="mt-1.5 text-sm text-slate-500 line-clamp-2">{course.shortDescription}</p>

      <div className="mt-4 flex items-center gap-4 text-xs text-slate-500">
        <span className="flex items-center gap-1 text-amber-500 font-medium">
          <Star size={13} className="fill-amber-500" /> {course.rating || '4.8'}
        </span>
        <span className="flex items-center gap-1">
          <Clock size={13} /> {course.duration}
        </span>
        <span className="flex items-center gap-1">
          <BookOpen size={13} /> {lessonCount} lessons
        </span>
      </div>
    </motion.button>
  );
}

function CatalogSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 animate-pulse">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="h-52 bg-slate-100 rounded-2xl" />
      ))}
    </div>
  );
}
