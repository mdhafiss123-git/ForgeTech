import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Share2 } from 'lucide-react';
import { fetchCertificate } from '../services/api';
import Button from '../components/ui/Button';
import { fadeUp } from '../animations/motionVariants';

export default function CertificatePage() {
  const { certificateId } = useParams();
  const [certificate, setCertificate] = useState(null);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetchCertificate(certificateId)
      .then(({ data }) => setCertificate(data))
      .catch(() => setError('This certificate could not be found. It may be invalid or expired.'));
  }, [certificateId]);

  const handleShare = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (error) {
    return (
      <div className="min-h-screen bg-surface flex flex-col items-center justify-center text-center px-4">
        <p className="text-ink font-medium mb-2">{error}</p>
        <Link to="/" className="text-sm text-accent-indigo hover:text-indigo-700">Back to TechForge</Link>
      </div>
    );
  }

  if (!certificate) {
    return <div className="min-h-screen bg-surface flex items-center justify-center text-ink-secondary">Loading…</div>;
  }

  const issuedDate = new Date(certificate.issuedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center px-4 py-16">
      <Link to="/" className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-emerald-500" />
        <span className="font-display font-semibold text-lg tracking-tight text-ink">TechForge</span>
      </Link>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="w-full max-w-2xl rounded-3xl border-2 border-indigo-200 bg-white shadow-lift p-10 md:p-14 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-indigo-200 rounded-tl-3xl" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-indigo-200 rounded-br-3xl" />

        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
          <Award size={28} className="text-white" />
        </div>

        <p className="text-xs font-semibold uppercase tracking-widest text-accent-indigo mb-3">
          Certificate of Completion
        </p>

        <p className="text-ink-secondary text-sm mb-1">This certifies that</p>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-ink mb-4">{certificate.userName}</h1>
        <p className="text-ink-secondary text-sm mb-1">has successfully completed</p>
        <h2 className="font-display text-xl md:text-2xl font-semibold text-ink mb-6">{certificate.courseTitle}</h2>

        <div className="flex items-center justify-center gap-2 text-sm text-emerald-700 font-medium mb-8">
          <CheckCircle2 size={16} />
          Scored {certificate.score}% on the certification exam
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-ink-faint border-t border-surface-border pt-6">
          <span>Issued {issuedDate}</span>
          <span className="hidden sm:inline">·</span>
          <span>Certificate ID: {certificate.certificateId}</span>
        </div>
      </motion.div>

      <Button variant="ghost" icon={Share2} className="mt-6" onClick={handleShare}>
        {copied ? 'Link copied!' : 'Copy shareable link'}
      </Button>
    </div>
  );
}
