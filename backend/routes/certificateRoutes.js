const express = require('express');
const router = express.Router();
const { getCertificateById } = require('../controllers/examController');

// Public — anyone with a certificate link can verify it, no login required.
// This is the entire point of a certificate: a third party needs to be
// able to check it without an account.
router.get('/:certificateId', getCertificateById);

module.exports = router;
