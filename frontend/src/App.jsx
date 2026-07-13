import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { AuthProvider, useAuth } from './context/AuthContext';
import Sidebar from './components/layout/Sidebar';
import Topbar from './components/layout/Topbar';
import LandingPage from './pages/LandingPage';
import CoursesPage from './pages/CoursesPage';
import CourseDetails from './pages/CourseDetails';
import DashboardPage from './pages/DashboardPage';
import CourseViewerPage from './pages/CourseViewerPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import { pageTransition } from './animations/motionVariants';

// Soft opacity + directional transition between routes. Kept subtle so
// navigation never feels sluggish — see pageTransition in motionVariants.js.
function PageTransition({ children }) {
  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition}>
      {children}
    </motion.div>
  );
}

// Wraps routes that need the full dashboard chrome (Sidebar + Topbar) and
// a logged-in user. Anything under here is genuinely private.
function ProtectedShell({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center text-ink-secondary">
        Loading…
      </div>
    );
  }
  if (!user) return <Navigate to="/login" replace />;

  return (
    <div className="flex min-h-screen bg-surface">
      <Sidebar user={user} />
      <div className="flex-1 min-w-0 flex flex-col">
        <Topbar user={user} />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}

// Lightweight guard for routes that need auth but not the dashboard chrome
// (e.g. checkout, the full-bleed course viewer).
function RequireAuth({ children }) {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center text-ink-secondary">
        Loading…
      </div>
    );
  }
  return user ? children : <Navigate to="/login" replace />;
}

function AppRoutes() {
  const { user } = useAuth();
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* ---------- Public: no auth required, ever ---------- */}
        <Route path="/" element={<PageTransition><LandingPage /></PageTransition>} />
        <Route path="/courses" element={<PageTransition><CoursesPage /></PageTransition>} />
        <Route path="/course/:courseId" element={<PageTransition><CourseDetails /></PageTransition>} />

        {/* ---------- Auth entry point ---------- */}
        <Route
          path="/login"
          element={user ? <Navigate to="/dashboard" replace /> : <PageTransition><LoginPage /></PageTransition>}
        />

        {/* ---------- Private: require a logged-in user ---------- */}
        <Route
          path="/checkout/:slug"
          element={
            <RequireAuth>
              <PageTransition><CheckoutPage /></PageTransition>
            </RequireAuth>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedShell>
              <DashboardPage user={user} />
            </ProtectedShell>
          }
        />

        {/* Course viewer renders full-bleed (its own header), outside the
            dashboard Sidebar/Topbar shell — this is the *unlocked* lesson
            content, distinct from the public CourseDetails preview. */}
        <Route
          path="/courses/:slug"
          element={
            <RequireAuth>
              <CourseViewerPage />
            </RequireAuth>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}
