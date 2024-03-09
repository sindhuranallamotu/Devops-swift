// validationUtility.js

// Function to validate variable names
function validateVariableNames(swiftCode) {
    // Regular expression to match variable names in camel case
    const variableNameRegex = /\b[a-z][a-zA-Z0-9]{4,19}\b/g;

    // Extract variable names from the Swift code
    const variableNames = swiftCode.match(variableNameRegex);

    // Check if any variable name violates the rules
    if (variableNames) {
        const invalidVariableNames = variableNames.filter(name => {
            // Check if the variable name is shorter than 5 characters or longer than 20 characters
            return name.length < 5 || name.length > 20;
        });

        return invalidVariableNames;
    }

    return [];
}

module.exports = {
    validateVariableNames
};
