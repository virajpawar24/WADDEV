// app.js
const express = require('express');
const path = require('path');
const app = express();

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (images, CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Route to render the index page
app.get('/', (req, res) => {
    res.render('index');
});

// Set the port for the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

