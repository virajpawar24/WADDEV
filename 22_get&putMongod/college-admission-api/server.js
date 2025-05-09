
// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Initialize app
const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/college_admissions', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Define schema and model
const AdmissionSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String,
    contact: String
});

const Admission = mongoose.model('Admission', AdmissionSchema);

// GET API - Retrieve all admissions
app.get('/api/admissions', async (req, res) => {
    try {
        const admissions = await Admission.find();
        res.json(admissions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// PUT API - Update an admission by ID
app.put('/api/admissions/:id', async (req, res) => {
    try {
        const admission = await Admission.findById(req.params.id);
        if (!admission) return res.status(404).json({ message: 'Admission not found' });

        // Update fields
        admission.name = req.body.name || admission.name;
        admission.age = req.body.age || admission.age;
        admission.course = req.body.course || admission.course;
        admission.contact = req.body.contact || admission.contact;

        const updatedAdmission = await admission.save();
        res.json(updatedAdmission);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
