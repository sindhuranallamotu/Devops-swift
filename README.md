This can be achieved by Pre-commit Hooks and Linting Tools here i have used ES lint to manage the custom scripts
1)here i have setup my backend in nodejs  by initializing npm 
I have setup the necessary routes and endpoints to interact with the swift ui frontend and these endpoints will handle HTTP requests from the frontend and respond accordingly in server.js 
I have implemented the rules for variable names validation with in the backend by following below
validationUtility.js-contains utility functions for validating variable names.
validationMiddleware.js--this contain middleware functions for validating variable names in incoming requests
variablesRoute.js-this define routes and request handlers for managing variables, integrating the validation middleware
2)I have created the  the github action workflow and precommithooks in .gitgub folder to enforce the rules for variablenames in the swift ui project the pre-commit hook runs ESLint locally to enforce linting standards before commits and This workflow will run SwiftLint, a tool to enforce Swift style and conventions, on swift UI
3)By using the ESLint i have written the customised script for variable name and camelcase and defined these rules in eslint.json 


