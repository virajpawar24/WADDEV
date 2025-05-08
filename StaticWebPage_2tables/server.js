
const express = require('express');
const app = express();
const path = require('path');

// Set up the static files to be served from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Set the route for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));

});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
