const mongoose = require('mongoose');
const crypto = require('crypto');

// One document per issued certificate. Certificates are immutable once
// created — re-passing an exam does not create a new certificate, it's
// looked up and reused (see examController.submitExam).
const CertificateSchema = new mongoose.Schema(
  {
    certificateId: {
      type: String,
      required: true,
      unique: true,
      index: true,
      default: () => crypto.randomBytes(8).toString('hex'), // short, URL-friendly
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
      required: true,
    },
    // Denormalized snapshot fields — so the certificate still displays
    // correctly even if the user's name changes or the course is later
    // renamed/removed. A certificate should represent a moment in time.
    userName: { type: String, required: true },
    courseTitle: { type: String, required: true },
    score: { type: Number, required: true }, // percent scored on the passing attempt
    issuedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

CertificateSchema.index({ user: 1, course: 1 }, { unique: true }); // one certificate per user/course

module.exports = mongoose.model('Certificate', CertificateSchema);
