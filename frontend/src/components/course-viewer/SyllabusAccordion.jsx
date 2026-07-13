import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2, Circle, PlayCircle, FileText } from 'lucide-react';

export default function SyllabusAccordion({
  modules = [],
  completedLessonIds = new Set(),
  activeLessonId,
  onSelectLesson,
}) {
  const activeModuleIndex = modules.findIndex((m) => m.lessons.some((l) => l._id === activeLessonId));
  const [openModules, setOpenModules] = useState(new Set(activeModuleIndex >= 0 ? [activeModuleIndex] : [0]));

  const toggleModule = (index) => {
    setOpenModules((prev) => {
      const next = new Set(prev);
      next.has(index) ? next.delete(index) : next.add(index);
      return next;
    });
  };

  return (
    <div className="h-full overflow-y-auto py-4 px-2">
      {modules.map((module, index) => {
        const isOpen = openModules.has(index);
        const completedCount = module.lessons.filter((l) => completedLessonIds.has(l._id)).length;

        return (
          <div key={module._id} className="mb-1">
            <button
              onClick={() => toggleModule(index)}
              className="w-full flex items-center justify-between gap-2 px-3 py-3 rounded-lg hover:bg-surface-muted transition-colors text-left"
            >
              <div className="min-w-0">
                <p className="text-xs text-ink-faint mb-0.5">Module {index + 1}</p>
                <p className="text-sm font-medium text-ink truncate">{module.title}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs text-ink-faint">{completedCount}/{module.lessons.length}</span>
                <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                  <ChevronDown size={15} className="text-ink-faint" />
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
                  <ul className="pl-3 border-l border-surface-border ml-4 mt-1 mb-2 space-y-0.5">
                    {module.lessons
                      .slice()
                      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
                      .map((lesson) => {
                        const isCompleted = completedLessonIds.has(lesson._id);
                        const isActive = lesson._id === activeLessonId;
                        const Icon = lesson.type === 'video' ? PlayCircle : FileText;

                        return (
                          <li key={lesson._id}>
                            <button
                              onClick={() => onSelectLesson(lesson, module)}
                              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-left transition-all duration-150 ${
                                isActive
                                  ? 'bg-accent-indigoSoft text-accent-indigo border border-indigo-200'
                                  : 'text-ink-secondary hover:text-ink hover:bg-surface-muted border border-transparent'
                              }`}
                            >
                              {isCompleted ? (
                                <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                              ) : (
                                <Circle size={15} className="text-slate-300 shrink-0" />
                              )}
                              <Icon size={13} className="text-ink-faint shrink-0" />
                              <span className="truncate flex-1">{lesson.title}</span>
                              <span className="text-xs text-ink-faint shrink-0">{lesson.duration}</span>
                            </button>
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
