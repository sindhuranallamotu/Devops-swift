// routes/variablesRoute.js

const express = require('express');
const router = express.Router();
const { validateVariables } = require('../middleware/validationMiddleware');

// POST route for handling variables
router.post('/variables', validateVariables, (req, res) => {
    // If validation passes, handle the request
    res.status(200).json({ message: 'Variables received and validated successfully' });
});

module.exports = router;