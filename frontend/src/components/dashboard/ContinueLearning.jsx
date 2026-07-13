import { Link } from 'react-router-dom';
import { PlayCircle } from 'lucide-react';
import ProgressBar from '../ui/ProgressBar';
import Button from '../ui/Button';

export default function ContinueLearning({ progress }) {
  if (!progress?.course) return null;
  const { course, completionPercent, lastVisitedLessonId } = progress;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-surface-border bg-gradient-to-br from-indigo-50 via-white to-white p-6 md:p-8 shadow-soft">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent-indigo mb-2">Continue learning</p>
          <h2 className="font-display text-xl md:text-2xl font-semibold text-ink mb-2">{course.title}</h2>
          <div className="max-w-xs">
            <ProgressBar percent={completionPercent} showLabel />
          </div>
        </div>

        <Link to={`/courses/${course.slug}${lastVisitedLessonId ? `?lesson=${lastVisitedLessonId}` : ''}`}>
          <Button variant="primary" icon={PlayCircle} className="whitespace-nowrap">
            Resume course
          </Button>
        </Link>
      </div>
    </div>
  );
}
