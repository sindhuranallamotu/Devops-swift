// middleware/validationMiddleware.js

const { validateVariableNames } = require('../utils/validationUtility');

function validateVariables(req, res, next) {
    const variables = req.body.variables;

    // Validate variable names
    const invalidVariables = validateVariableNames(variables);

    if (invalidVariables.length > 0) {
        return res.status(400).json({ error: 'Invalid variable names', invalidVariables });
    }

    // If validation passes, proceed to the next middleware
    next();
}

module.exports = {
    validateVariables
};
