import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import {
  Search, Star, Users, ArrowRight, Zap, Check, Code2, Server, Smartphone,
  Cpu, Cloud, Sparkles, Menu, X, Compass, ListChecks, Wallet, LineChart,
  Layers, Infinity as InfinityIcon, ChevronLeft, ChevronRight,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { getCourses, getCategoryCounts } from '../services/courseService';
import {
  fadeInDown, fadeUp, staggerContainer, slideInLeft, slideInRight,
  cardHover, buttonTap, slideDown, testimonialSlide,
} from '../animations/motionVariants';

const NAV_LINKS = [
  { label: 'Browse Courses', href: '/courses' },
  { label: 'Learning Paths', href: '#paths' },
  { label: 'Categories', href: '#categories' },
  { label: 'Pricing', href: '#pricing' },
];

const CATEGORY_META = {
  'Frontend Development': { icon: Code2, blurb: 'React, Next.js, TypeScript & modern UI' },
  'Backend & Databases': { icon: Server, blurb: 'Node, APIs, SQL/NoSQL & system design' },
  'Mobile Development': { icon: Smartphone, blurb: 'React Native, Flutter, iOS & Android' },
  'CS Core & DSA': { icon: Cpu, blurb: 'Algorithms, OS, DBMS & networks' },
  'Cloud, DevOps & Security': { icon: Cloud, blurb: 'AWS, Docker, Kubernetes & CI/CD' },
  'AI & Data Science': { icon: Sparkles, blurb: 'ML, LLMs, agents & data analytics' },
};

const LEARNING_PATHS = [
  { title: 'Frontend Developer Path', duration: '10 courses · ~90 hrs', courses: 10, accent: 'indigo' },
  { title: 'Backend Engineer Path', duration: '10 courses · ~95 hrs', courses: 10, accent: 'emerald' },
  { title: 'Full-Stack MERN Path', duration: '14 courses · ~130 hrs', courses: 14, accent: 'indigo' },
  { title: 'AI Engineer Path', duration: '11 courses · ~85 hrs', courses: 11, accent: 'emerald' },
  { title: 'Cloud & DevOps Path', duration: '8 courses · ~65 hrs', courses: 8, accent: 'indigo' },
];

const HOW_IT_WORKS = [
  { step: '01', title: 'Browse a tech domain', desc: 'Explore 6 domains and 50+ courses without creating an account.', icon: Compass },
  { step: '02', title: 'Preview the full syllabus', desc: 'See every module and lesson title before you spend a cent.', icon: ListChecks },
  { step: '03', title: 'Enroll for just $1', desc: 'One flat price, no subscription, no upsells.', icon: Wallet },
  { step: '04', title: 'Learn at your own pace', desc: 'Progress auto-saves so you can pick up exactly where you left off.', icon: LineChart },
];

const WHY_US = [
  { title: 'Self-paced learning', desc: 'No cohorts, no deadlines — learn on your schedule.', icon: LineChart },
  { title: 'Modern industry syllabus', desc: 'Curriculum tracks what teams actually use in production.', icon: Layers },
  { title: 'Affordable pricing', desc: '$1 per course, flat. No subscription trap, ever.', icon: Wallet },
  { title: 'Progress tracking', desc: 'Auto-saved completion so nothing is ever lost.', icon: ListChecks },
  { title: 'Hands-on projects', desc: 'Every course ends in something real to show for it.', icon: Sparkles },
  { title: 'Lifetime course access', desc: 'Pay once, revisit the material whenever you need to.', icon: InfinityIcon },
];

const TESTIMONIALS = [
  { name: 'Ananya Rao', role: 'Frontend Engineer, Bengaluru', quote: 'The $1 pricing felt too good to be true until I saw the syllabus depth. Better structured than courses I paid $80 for elsewhere.', rating: 5 },
  { name: 'Marcus Webb', role: 'CS Student, Austin', quote: 'I finally have a DSA course that explains the "why," not just the code. The progress tracker kept me honest about finishing modules.', rating: 5 },
  { name: 'Priya Nathan', role: 'Backend Developer, Chennai', quote: 'Went through the System Design course before interviews. Clean syllabus preview meant I knew exactly what I was getting into.', rating: 4 },
  { name: 'Daniel Osei', role: 'DevOps Engineer, Lagos', quote: 'Docker & Kubernetes course was hands-on from lesson one. The self-paced format fit around my job perfectly.', rating: 5 },
];

export default function LandingPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();

  const [search, setSearch] = useState('');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [featured, setFeatured] = useState([]);
  const [categoryCounts, setCategoryCounts] = useState({});
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    getCourses({ limit: 6 }).then((res) => setFeatured(res.data)).catch(() => setFeatured([]));
    getCategoryCounts()
      .then((res) => {
        const map = {};
        res.data.forEach((c) => (map[c._id] = c.count));
        setCategoryCounts(map);
      })
      .catch(() => setCategoryCounts({}));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setTestimonialIndex((i) => (i + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const goToCheckoutOrLogin = (courseSlug) => {
    const destination = courseSlug ? `/checkout/${courseSlug}` : '/dashboard';
    if (user) navigate(destination);
    else navigate('/login', { state: { redirectTo: destination } });
  };

  const handleGetStarted = () => navigate('/courses');

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/courses${search ? `?search=${encodeURIComponent(search)}` : ''}`);
  };

  const variant = (v) => (prefersReducedMotion ? {} : v);

  return (
    <div className="min-h-screen bg-surface text-ink font-body overflow-x-hidden">
      <Nav
        user={user}
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
        onGetStarted={handleGetStarted}
        variant={variant}
      />
      <Hero search={search} setSearch={setSearch} onSearch={handleSearch} variant={variant} />
      <TrustStrip variant={variant} />
      <CategoryGrid counts={categoryCounts} variant={variant} />
      <FeaturedCourses courses={featured} onEnroll={goToCheckoutOrLogin} variant={variant} />
      <LearningPaths variant={variant} />
      <HowItWorks variant={variant} />
      <WhyChooseUs variant={variant} />
      <PricingSection onGetStarted={handleGetStarted} variant={variant} />
      <Testimonials index={testimonialIndex} setIndex={setTestimonialIndex} variant={variant} />
      <FinalCTA onGetStarted={handleGetStarted} variant={variant} />
      <Footer />
    </div>
  );
}

/* ------------------------------------------------------------------ */
function Nav({ user, mobileNavOpen, setMobileNavOpen, onGetStarted, variant }) {
  return (
    <header className="sticky top-0 z-50 border-b border-surface-border bg-white/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-600 to-emerald-500" />
          <span className="font-display font-semibold text-lg tracking-tight text-ink">TechForge</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) =>
            link.href.startsWith('/') ? (
              <Link key={link.label} to={link.href} className="text-sm text-ink-secondary hover:text-ink transition-colors">
                {link.label}
              </Link>
            ) : (
              <a key={link.label} href={link.href} className="text-sm text-ink-secondary hover:text-ink transition-colors">
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <Link to="/dashboard" className="text-sm font-medium px-4 py-2 rounded-lg text-ink hover:bg-surface-muted transition-colors">
              Go to dashboard
            </Link>
          ) : (
            <Link to="/login" className="text-sm font-medium px-4 py-2 rounded-lg text-ink-secondary hover:text-ink transition-colors">
              Login
            </Link>
          )}
          <motion.button
            {...variant(buttonTap)}
            onClick={onGetStarted}
            className="text-sm font-semibold px-4 py-2.5 rounded-xl bg-accent-indigo hover:bg-indigo-700
              text-white shadow-glow transition-colors duration-200 flex items-center gap-1.5"
          >
            Start Learning
            <span className="px-1.5 py-0.5 rounded-md bg-white/20 text-white text-xs font-bold">$1</span>
          </motion.button>
        </div>

        <button className="md:hidden text-ink" onClick={() => setMobileNavOpen((v) => !v)} aria-label="Toggle menu">
          {mobileNavOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div
            variants={slideDown}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden overflow-hidden border-t border-surface-border px-4 py-4 space-y-3 bg-white"
          >
            {NAV_LINKS.map((link) =>
              link.href.startsWith('/') ? (
                <Link key={link.label} to={link.href} className="block text-sm text-ink-secondary py-1.5">
                  {link.label}
                </Link>
              ) : (
                <a key={link.label} href={link.href} className="block text-sm text-ink-secondary py-1.5">
                  {link.label}
                </a>
              )
            )}
            <div className="pt-2 flex flex-col gap-2">
              <Link to="/login" className="text-sm text-center py-2.5 rounded-lg border border-surface-border text-ink">
                Login
              </Link>
              <button onClick={onGetStarted} className="text-sm font-semibold py-2.5 rounded-xl bg-accent-indigo text-white">
                Start Learning — $1/course
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ------------------------------------------------------------------ */
function Hero({ search, setSearch, onSearch, variant }) {
  return (
    <section className="relative max-w-7xl mx-auto px-4 md:px-8 pt-16 md:pt-24 pb-16 md:pb-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-gradient-to-b from-indigo-50 via-surface to-surface" />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            variants={variant(fadeInDown)}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-200 bg-accent-emeraldSoft text-emerald-700 text-xs font-semibold mb-6"
          >
            <Zap size={13} className="fill-emerald-600 text-emerald-600" />
            $1 per course — limited premium offer
          </motion.div>

          <motion.h1
            variants={variant(fadeInDown)}
            initial="hidden"
            animate="visible"
            className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-ink leading-[1.08]"
          >
            Learn modern tech,
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">
              at your own pace.
            </span>
          </motion.h1>

          <motion.p
            variants={variant(fadeUp)}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-ink-secondary max-w-lg"
          >
            50+ in-depth courses across frontend, backend, mobile, CS
            fundamentals, cloud, and AI — priced so nothing stands between
            you and learning it right.
          </motion.p>

          <motion.form
            variants={variant(fadeUp)}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            onSubmit={onSearch}
            className="mt-8 max-w-lg relative"
          >
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-faint" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="What do you want to learn today?"
              className="w-full bg-white border border-surface-border rounded-2xl shadow-soft
                pl-12 pr-28 py-4 text-sm text-ink placeholder:text-ink-faint
                focus:border-indigo-300 transition-colors"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 rounded-xl bg-accent-indigo
                hover:bg-indigo-700 text-white text-sm font-medium transition-colors"
            >
              Search
            </button>
          </motion.form>

          <motion.div
            variants={variant(fadeUp)}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <Link
              to="/courses"
              className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl bg-accent-indigo hover:bg-indigo-700
                text-white text-sm font-semibold shadow-glow transition-colors"
            >
              Explore Courses <ArrowRight size={15} />
            </Link>
            <a
              href="#paths"
              className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl border border-surface-border
                bg-white hover:bg-surface-muted text-ink text-sm font-semibold transition-colors"
            >
              View Learning Paths
            </a>
          </motion.div>
        </div>

        {/* Dashboard mockup visual */}
        <motion.div
          variants={variant(fadeUp)}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="rounded-3xl border border-surface-border bg-white shadow-card p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-xs text-ink-faint">Continue learning</p>
                <p className="font-display font-semibold text-ink">React 19 Essentials and Hooks</p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-accent-emeraldSoft text-emerald-700 text-xs font-bold">72%</span>
            </div>
            <div className="h-2 w-full bg-surface-muted rounded-full overflow-hidden mb-6">
              <div className="h-full w-[72%] bg-gradient-to-r from-indigo-600 to-emerald-500 rounded-full" />
            </div>
            <div className="space-y-3">
              {[
                { label: 'Hooks deep dive', done: true },
                { label: 'Context & state sharing', done: true },
                { label: 'Performance patterns', done: false },
              ].map((row) => (
                <div key={row.label} className="flex items-center gap-3 p-3 rounded-xl bg-surface-muted">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${row.done ? 'bg-emerald-500 text-white' : 'bg-white border border-surface-border'}`}>
                    {row.done && <Check size={12} strokeWidth={3} />}
                  </span>
                  <span className="text-sm text-ink">{row.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 rounded-2xl border border-surface-border bg-white shadow-card px-4 py-3">
            <p className="text-xs text-ink-faint">Total price</p>
            <p className="font-display font-bold text-2xl text-emerald-600">$1.00</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
function TrustStrip({ variant }) {
  const stats = [
    { value: '50+', label: 'Tech Courses' },
    { value: '100K+', label: 'Learners' },
    { value: '500+', label: 'Hands-On Lessons' },
    { value: '$1', label: 'Per Course' },
  ];
  return (
    <section className="border-y border-surface-border bg-white">
      <motion.div
        variants={variant(staggerContainer(0.08))}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-6xl mx-auto px-4 md:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {stats.map((s) => (
          <motion.div key={s.label} variants={variant(fadeUp)} className="text-center">
            <p className="font-display text-2xl md:text-3xl font-semibold text-ink">{s.value}</p>
            <p className="text-xs text-ink-secondary mt-1">{s.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
function CategoryGrid({ counts, variant }) {
  return (
    <section id="categories" className="max-w-7xl mx-auto px-4 md:px-8 py-20">
      <p className="text-xs font-semibold uppercase tracking-wider text-accent-indigo mb-2">Explore by category</p>
      <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink mb-10">Six domains, fifty-plus paths forward</h2>

      <motion.div
        variants={variant(staggerContainer(0.06))}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {Object.entries(CATEGORY_META).map(([name, meta]) => {
          const Icon = meta.icon;
          return (
            <motion.div key={name} variants={variant(slideInLeft)}>
              <Link
                to={`/courses?category=${encodeURIComponent(name)}`}
                className="group flex items-start gap-4 rounded-2xl border border-surface-border bg-white p-6
                  shadow-soft transition-all duration-300 hover:border-indigo-200 hover:shadow-card hover:-translate-y-0.5"
              >
                <div className="w-11 h-11 rounded-xl bg-accent-indigoSoft text-accent-indigo flex items-center justify-center shrink-0
                  group-hover:bg-accent-indigo group-hover:text-white transition-colors">
                  <Icon size={20} />
                </div>
                <div className="min-w-0">
                  <p className="font-display font-semibold text-ink">{name}</p>
                  <p className="text-sm text-ink-secondary mt-1">{meta.blurb}</p>
                  <p className="text-xs text-accent-indigo font-medium mt-2">{counts[name] ?? '—'} courses</p>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
function FeaturedCourses({ courses, onEnroll, variant }) {
  return (
    <section id="courses" className="section-alt py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-indigo mb-2">Featured courses</p>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink">Top picks across every domain</h2>
          </div>
          <Link to="/courses" className="hidden sm:flex items-center gap-1.5 text-sm text-ink-secondary hover:text-ink transition-colors shrink-0">
            Browse all 50+ courses <ArrowRight size={14} />
          </Link>
        </div>

        {courses.length === 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-64 rounded-2xl bg-white border border-surface-border animate-pulse" />
            ))}
          </div>
        ) : (
          <motion.div
            variants={variant(staggerContainer(0.06))}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {courses.map((course) => (
              <FeaturedCourseCard key={course.slug} course={course} onEnroll={onEnroll} variant={variant} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}

function FeaturedCourseCard({ course, variant }) {
  const lessonCount = course.lessonsCount || course.modules?.reduce((s, m) => s + (m.lessons?.length || 0), 0) || 0;
  return (
    <motion.div
      variants={variant(fadeUp)}
      whileHover={variant(cardHover)}
      className="group relative rounded-2xl border border-surface-border bg-white p-5 flex flex-col shadow-soft"
    >
      <div className="absolute -top-3 right-5 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold shadow-card">
        ${course.price ?? 1} USD
      </div>

      <div className="h-28 rounded-xl bg-gradient-to-br from-indigo-50 to-emerald-50 border border-surface-border mb-4 flex items-center justify-center">
        <span className="text-xs font-medium text-accent-indigo">{course.category}</span>
      </div>

      <h3 className="font-display font-semibold text-ink leading-snug line-clamp-2">{course.title}</h3>
      <p className="mt-1.5 text-sm text-ink-secondary line-clamp-2">{course.shortDescription}</p>

      <div className="mt-3 flex items-center gap-3 text-xs text-ink-secondary">
        <span className="flex items-center gap-1 text-amber-600 font-medium">
          <Star size={13} className="fill-amber-500 text-amber-500" /> {course.rating ?? '4.8'}
        </span>
        <span className="flex items-center gap-1">
          <Users size={13} /> {course.studentsCount ?? '—'}
        </span>
        <span>{lessonCount} lessons</span>
      </div>

      <div className="mt-4 pt-4 border-t border-surface-border flex items-center justify-between">
        <span className="text-xs px-2.5 py-1 rounded-full border border-surface-border text-ink-secondary">{course.level}</span>
        <Link to={`/course/${course.slug}`} className="text-sm font-medium px-3 py-2 rounded-lg text-accent-indigo hover:bg-accent-indigoSoft transition-colors">
          View Details
        </Link>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
function LearningPaths({ variant }) {
  return (
    <section id="paths" className="max-w-7xl mx-auto px-4 md:px-8 py-20">
      <div className="flex items-end justify-between mb-10 gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-accent-indigo mb-2">Learning paths</p>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink">Structured routes, not random courses</h2>
        </div>
      </div>

      <motion.div
        variants={variant(staggerContainer(0.06))}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3, margin: '-100px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {LEARNING_PATHS.map((path) => (
          <motion.div
            key={path.title}
            variants={variant(slideInRight)}
            className="rounded-2xl border border-surface-border bg-white p-6 shadow-soft transition-all duration-300 hover:shadow-card hover:-translate-y-0.5"
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${path.accent === 'indigo' ? 'bg-accent-indigoSoft text-accent-indigo' : 'bg-accent-emeraldSoft text-emerald-700'}`}>
              <Layers size={18} />
            </div>
            <h3 className="font-display font-semibold text-ink">{path.title}</h3>
            <p className="text-sm text-ink-secondary mt-1">{path.duration}</p>
            <Link
              to="/courses"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-indigo hover:gap-2.5 transition-all"
            >
              Explore path <ArrowRight size={14} />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
function HowItWorks({ variant }) {
  return (
    <section className="section-alt py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent-indigo mb-2 text-center">How it works</p>
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink mb-12 text-center">From curious to enrolled in four steps</h2>

        <motion.div
          variants={variant(staggerContainer(0.1))}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {HOW_IT_WORKS.map(({ step, title, desc, icon: Icon }) => (
            <motion.div key={step} variants={variant(fadeUp)} className="relative rounded-2xl border border-surface-border bg-white p-6 shadow-soft">
              <span className="absolute top-4 right-5 font-display text-3xl font-bold text-surface-border">{step}</span>
              <div className="w-10 h-10 rounded-xl bg-accent-indigoSoft text-accent-indigo flex items-center justify-center mb-4">
                <Icon size={18} />
              </div>
              <h3 className="font-display font-semibold text-ink">{title}</h3>
              <p className="text-sm text-ink-secondary mt-2">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
function WhyChooseUs({ variant }) {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
      <p className="text-xs font-semibold uppercase tracking-wider text-accent-indigo mb-2 text-center">Why students choose us</p>
      <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink mb-12 text-center">Built for people who actually finish courses</h2>

      <motion.div
        variants={variant(staggerContainer(0.06))}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {WHY_US.map(({ title, desc, icon: Icon }) => (
          <motion.div key={title} variants={variant(fadeUp)} className="flex items-start gap-4 rounded-2xl border border-surface-border bg-white p-6 shadow-soft">
            <div className="w-10 h-10 rounded-xl bg-accent-emeraldSoft text-emerald-700 flex items-center justify-center shrink-0">
              <Icon size={18} />
            </div>
            <div>
              <h3 className="font-display font-semibold text-ink">{title}</h3>
              <p className="text-sm text-ink-secondary mt-1">{desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
function PricingSection({ onGetStarted, variant }) {
  const included = [
    'Lifetime access to the specific course material',
    'No monthly subscription, no auto-renewal trap',
    'Full syllabus: every module and lesson, unlocked',
    'Hands-on projects & capstone assignments',
    'Self-paced tracking that saves your progress automatically',
    'Certificate of completion',
  ];

  return (
    <section id="pricing" className="relative py-20 border-y border-surface-border bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8 text-center mb-12">
        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-2">Pricing</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">One price. Every course. No games.</h2>
        <p className="mt-4 text-ink-secondary">
          We stripped out the subscription tax that platforms use to make you
          pay for courses you never finish. Pick a course, pay $1, own it.
        </p>
      </div>

      <motion.div
        variants={variant(fadeUp)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-md mx-auto px-4"
      >
        <div className="relative rounded-3xl border border-emerald-200 bg-white p-8 shadow-lift">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold whitespace-nowrap">
            Pay As You Learn
          </div>

          <div className="text-center mt-2">
            <div className="flex items-end justify-center gap-1">
              <span className="font-display text-6xl font-bold text-ink">$1</span>
              <span className="text-ink-faint mb-2 text-sm">/ course</span>
            </div>
            <p className="text-sm text-ink-faint mt-2">Flat rate — every single course, no tiers</p>
          </div>

          <ul className="mt-8 space-y-3.5">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-ink">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-accent-emeraldSoft text-emerald-700 flex items-center justify-center shrink-0">
                  <Check size={12} strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <motion.button
            {...variant(buttonTap)}
            onClick={onGetStarted}
            className="mt-8 w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors"
          >
            Start learning for $1
          </motion.button>

          <p className="mt-3 text-center text-xs text-ink-faint">No card required to browse. Pay only when you enroll.</p>
        </div>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
function Testimonials({ index, setIndex, variant }) {
  const t = TESTIMONIALS[index];
  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);
  const prev = () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="section-alt py-20">
      <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent-indigo mb-2">Testimonials</p>
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink mb-10">Loved by students who actually finish</h2>

        <div className="relative min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={1}>
            <motion.div
              key={index}
              custom={1}
              variants={variant(testimonialSlide)}
              initial="enter"
              animate="center"
              exit="exit"
              className="rounded-2xl border border-surface-border bg-white p-8 shadow-soft w-full"
            >
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className={i < t.rating ? 'fill-amber-500 text-amber-500' : 'text-surface-border'} />
                ))}
              </div>
              <p className="text-ink text-lg leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-indigoSoft text-accent-indigo flex items-center justify-center font-semibold text-sm">
                  {t.name[0]}
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-ink-secondary">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-3 mt-6">
          <button onClick={prev} className="w-9 h-9 rounded-full border border-surface-border bg-white hover:bg-surface-muted flex items-center justify-center transition-colors">
            <ChevronLeft size={16} />
          </button>
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === index ? 'bg-accent-indigo w-5' : 'bg-surface-border'}`}
            />
          ))}
          <button onClick={next} className="w-9 h-9 rounded-full border border-surface-border bg-white hover:bg-surface-muted flex items-center justify-center transition-colors">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
function FinalCTA({ onGetStarted, variant }) {
  return (
    <section className="max-w-5xl mx-auto px-4 md:px-8 py-20 text-center">
      <motion.div variants={variant(fadeUp)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">Your next skill is one dollar away.</h2>
        <p className="mt-4 text-ink-secondary max-w-xl mx-auto">
          Join thousands of students building real, marketable tech skills — at
          a price that never asks you to justify the spend.
        </p>
        <motion.button
          {...variant(buttonTap)}
          onClick={onGetStarted}
          className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-accent-indigo
            hover:bg-indigo-700 text-white font-semibold shadow-glow transition-colors"
        >
          Get Started — $1/course
          <ArrowRight size={16} />
        </motion.button>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
function Footer() {
  const cols = [
    { title: 'Platform', links: ['Browse Courses', 'Learning Paths', 'Pricing', 'Categories'] },
    { title: 'Support', links: ['Help Center', 'Contact Us', 'FAQ', 'Refund Policy'] },
    { title: 'Company', links: ['About', 'Careers', 'Blog', 'Terms of Service'] },
  ];
  return (
    <footer className="border-t border-surface-border bg-white py-14">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-600 to-emerald-500" />
              <span className="font-display font-semibold text-ink">TechForge</span>
            </div>
            <p className="text-sm text-ink-secondary">Premium tech education, priced fairly.</p>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-ink mb-3">{col.title}</p>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-ink-secondary hover:text-ink transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-6 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-faint">© {new Date().getFullYear()} TechForge. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-ink-faint">
            <a href="#" className="hover:text-ink transition-colors">Twitter</a>
            <a href="#" className="hover:text-ink transition-colors">GitHub</a>
            <a href="#" className="hover:text-ink transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
