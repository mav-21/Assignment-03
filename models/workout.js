// loading mongoose to build structure of collection
const mongoose = require('mongoose');

// this defines what a workout document looks like in the db
const workoutSchema = new mongoose.Schema({
    title: { type: String, required: true },      // name of workout
    category: { type: String, required: true },   // cardio, strength, etc
    duration: { type: Number, required: true },   // in minutes
    date: { type: Date, default: Date.now },      // auto-fills with todays date
    notes: String                                  // extra notes
});

// this creates the actual model we can use to talk to the db
module.exports = mongoose.model('Workout', workoutSchema);
