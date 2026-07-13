import ReactMarkdown from 'react-markdown';
import { CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button';

export default function LessonContent({ lesson, moduleTitle, isCompleted, onMarkComplete, saving }) {
  if (!lesson) {
    return (
      <div className="flex items-center justify-center h-full text-ink-secondary text-sm">
        Select a lesson from the syllabus to begin.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 md:px-10 py-10">
      <p className="text-xs font-semibold uppercase tracking-wider text-accent-indigo mb-2">{moduleTitle}</p>
      <h1 className="font-display text-2xl md:text-3xl font-semibold text-ink mb-6">{lesson.title}</h1>

      {lesson.type === 'video' && lesson.content && (
        <div className="aspect-video w-full rounded-2xl overflow-hidden border border-surface-border mb-8 bg-slate-900">
          <video src={lesson.content} controls className="w-full h-full" />
        </div>
      )}

      <article className="prose prose-slate max-w-none prose-headings:font-display
        prose-a:text-accent-indigo prose-code:text-emerald-700 prose-pre:bg-slate-50 prose-pre:border prose-pre:border-surface-border">
        <ReactMarkdown>{lesson.type !== 'video' ? lesson.content || '' : ''}</ReactMarkdown>
      </article>

      <div className="mt-12 pt-6 border-t border-surface-border flex justify-end">
        <Button
          variant={isCompleted ? 'subtle' : 'emerald'}
          icon={CheckCircle2}
          disabled={isCompleted || saving}
          onClick={onMarkComplete}
        >
          {isCompleted ? 'Completed' : saving ? 'Saving…' : 'Mark as completed'}
        </Button>
      </div>
    </div>
  );
}
