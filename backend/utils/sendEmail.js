const nodemailer = require('nodemailer');

/**
 * Sends an email via SMTP if credentials are configured (SMTP_HOST,
 * SMTP_USER, SMTP_PASS in .env). If they're not set — e.g. in local
 * development, where most people don't want to configure a real mail
 * server just to test a password reset flow — this falls back to
 * logging the email content (including the reset link) to the console,
 * so the flow is still fully testable without any email setup.
 */
async function sendEmail({ to, subject, html, text }) {
  const smtpConfigured = process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS;

  if (!smtpConfigured) {
    console.log('\n===== EMAIL NOT SENT (SMTP not configured) =====');
    console.log(`To: ${to}`);
    console.log(`Subject: ${subject}`);
    console.log(text || html);
    console.log('==================================================\n');
    return { sent: false, mode: 'console-fallback' };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_PORT === '465',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM || `"TechForge" <${process.env.SMTP_USER}>`,
    to,
    subject,
    html,
    text,
  });

  return { sent: true, mode: 'smtp' };
}

module.exports = sendEmail;
