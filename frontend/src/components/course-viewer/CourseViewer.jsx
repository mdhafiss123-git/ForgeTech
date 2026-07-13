import { useState, useEffect, useMemo } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { ArrowLeft, PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import SyllabusAccordion from './SyllabusAccordion';
import LessonContent from './LessonContent';
import ProgressBar from '../ui/ProgressBar';
import { getCourseBySlug } from '../../services/courseService';
import { markLessonComplete } from '../../services/api';

export default function CourseViewer() {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();

  const [course, setCourse] = useState(null);
  const [progress, setProgress] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);
  const [activeModule, setActiveModule] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    getCourseBySlug(slug).then(({ data, progress: progressData }) => {
      setCourse(data);
      setProgress(progressData);

      const requestedId = searchParams.get('lesson') || progressData?.lastVisitedLessonId;
      const flatLessons = data.modules.flatMap((m) => m.lessons.map((l) => ({ ...l, module: m })));
      const target = flatLessons.find((l) => l._id === requestedId) || flatLessons[0];

      if (target) {
        setActiveLesson(target);
        setActiveModule(target.module);
      }
    });
  }, [slug, searchParams]);

  const completedLessonIds = useMemo(
    () => new Set((progress?.completedLessons || []).map((c) => c.lessonId)),
    [progress]
  );

  const handleSelectLesson = (lesson, module) => {
    setActiveLesson(lesson);
    setActiveModule(module);
  };

  const handleMarkComplete = async () => {
    if (!course || !activeLesson) return;
    setSaving(true);
    try {
      const { data } = await markLessonComplete(course._id, activeLesson._id);
      setProgress(data);
    } catch (err) {
      console.error('Failed to save progress', err);
    } finally {
      setSaving(false);
    }
  };

  if (!course) return <ViewerSkeleton />;

  const isActiveCompleted = activeLesson && completedLessonIds.has(activeLesson._id);

  return (
    <div className="h-screen flex flex-col bg-surface">
      <header className="flex items-center justify-between gap-4 px-4 md:px-6 py-3 border-b border-surface-border bg-white shrink-0">
        <div className="flex items-center gap-3 min-w-0">
          <Link to="/dashboard" className="text-ink-secondary hover:text-ink transition-colors shrink-0">
            <ArrowLeft size={18} />
          </Link>
          <button
            onClick={() => setSidebarOpen((v) => !v)}
            className="text-ink-secondary hover:text-ink transition-colors shrink-0 lg:hidden"
          >
            {sidebarOpen ? <PanelLeftClose size={18} /> : <PanelLeftOpen size={18} />}
          </button>
          <h1 className="font-display font-medium text-ink truncate">{course.title}</h1>
        </div>
        <div className="w-40 shrink-0">
          <ProgressBar percent={progress?.completionPercent || 0} accent="emerald" />
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        <div
          className={`${sidebarOpen ? 'w-80' : 'w-0'} shrink-0 border-r border-surface-border bg-white overflow-hidden transition-all duration-300`}
        >
          <SyllabusAccordion
            modules={course.modules}
            completedLessonIds={completedLessonIds}
            activeLessonId={activeLesson?._id}
            onSelectLesson={handleSelectLesson}
          />
        </div>

        <main className="flex-1 overflow-y-auto bg-surface">
          <LessonContent
            lesson={activeLesson}
            moduleTitle={activeModule?.title}
            isCompleted={isActiveCompleted}
            onMarkComplete={handleMarkComplete}
            saving={saving}
          />
        </main>
      </div>
    </div>
  );
}

function ViewerSkeleton() {
  return (
    <div className="h-screen flex bg-surface animate-pulse">
      <div className="w-80 border-r border-surface-border bg-white p-4 space-y-3">
        {[1, 2, 3, 4].map((i) => <div key={i} className="h-10 bg-slate-100 rounded-lg" />)}
      </div>
      <div className="flex-1 p-10 space-y-4">
        <div className="h-8 w-1/3 bg-slate-200 rounded-lg" />
        <div className="h-4 w-2/3 bg-slate-100 rounded-lg" />
        <div className="h-64 bg-slate-100 rounded-2xl" />
      </div>
    </div>
  );
}
