// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// Define routes
app.get('/', (req, res) => {
  // Handle GET request to the root URL
  res.send('Welcome to the backend API');
});

// Define more routes as needed
// For example, handling API requests from the SwiftUI frontend

// Example endpoint to handle POST requests
app.post('/api/data', (req, res) => {
  // Handle POST request to /api/data
  // You can process data here and send a response
  res.send('Data received successfully');
});

// Example endpoint with URL parameters
app.get('/api/users/:id', (req, res) => {
  // Handle GET request with URL parameter
  const userId = req.params.id;
  // Fetch user data based on userId
  // Send response
  res.send(`User details for ID ${userId}`);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
