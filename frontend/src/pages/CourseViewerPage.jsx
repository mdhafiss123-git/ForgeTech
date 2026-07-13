import CourseViewer from '../components/course-viewer/CourseViewer';

// The course viewer intentionally renders full-bleed (its own header + split
// screen) rather than inside the dashboard Sidebar/Topbar shell, matching the
// "distraction-free" requirement from the design brief.
export default function CourseViewerPage() {
  return <CourseViewer />;
}
