const mongoose = require('mongoose');

try {
    mongoose.connect('mongodb://localhost/bootcamp', () => {
        console.log("Database connection established");
    });
} catch (error) {
    console.log(error);
}

const studentSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        min: 3,
        required: true,
    },
    dob: {
        type: Date,
    },
    email: {
        type: String,
        min: 3,
        required: true

    }
});

module.exports = mongoose.model('students', studentSchema);