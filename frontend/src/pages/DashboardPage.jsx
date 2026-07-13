import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProgressStats from '../components/dashboard/ProgressStats';
import ContinueLearning from '../components/dashboard/ContinueLearning';
import CourseCatalog from '../components/dashboard/CourseCatalog';
import { getCourses } from '../services/courseService';
import { fetchAllProgress, fetchContinueLearning } from '../services/api';

export default function DashboardPage({ user }) {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [courses, setCourses] = useState([]);
  const [progressList, setProgressList] = useState([]);
  const [continueLearning, setContinueLearning] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    Promise.all([getCourses(), fetchAllProgress(), fetchContinueLearning()])
      .then(([coursesRes, progressRes, continueRes]) => {
        if (!mounted) return;
        setCourses(coursesRes.data);
        setProgressList(progressRes.data);
        setContinueLearning(continueRes.data);
      })
      .catch(console.error)
      .finally(() => mounted && setLoading(false));

    return () => (mounted = false);
  }, []);

  const progressMap = progressList.reduce((acc, p) => {
    acc[p.course?._id] = p.completionPercent;
    return acc;
  }, {});

  if (loading) return <DashboardSkeleton />;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-8">
      <header>
        <h1 className="font-display text-2xl md:text-3xl font-semibold text-ink">
          Welcome back{user?.name ? `, ${user.name.split(' ')[0]}` : ''}
        </h1>
        <p className="text-ink-secondary mt-1">Pick up where you left off, or start something new.</p>
      </header>

      <ProgressStats stats={user?.stats} />

      {continueLearning && <ContinueLearning progress={continueLearning} />}

      <section>
        <h2 className="font-display text-lg font-semibold text-ink mb-4">Explore courses</h2>
        <CourseCatalog courses={courses} progressMap={progressMap} initialCategory={initialCategory} />
      </section>
    </div>
  );
}

function DashboardSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-8 animate-pulse">
      <div className="h-8 w-64 bg-slate-200 rounded-lg" />
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => <div key={i} className="h-24 bg-slate-100 rounded-2xl" />)}
      </div>
      <div className="h-40 bg-slate-100 rounded-2xl" />
      <div className="grid grid-cols-3 gap-5">
        {[1, 2, 3, 4, 5, 6].map((i) => <div key={i} className="h-56 bg-slate-100 rounded-2xl" />)}
      </div>
    </div>
  );
}
