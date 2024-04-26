const express = require('express');
const path = require('path');
const compression = require('compression');
const app = express();

app.use(compression());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Handle GET requests to all other routes by serving the React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3001; // Use the port provided by the environment or default to 3001
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
