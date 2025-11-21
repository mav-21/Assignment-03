// loading our model so we can interact with the workouts collection
const Workout = require('../models/workout');

// show all workouts
exports.getAllWorkouts = async (req, res) => {
    const workouts = await Workout.find().sort({ date: -1 }); // newest first
    res.render('workouts/list', { workouts });
};

// show "new workout" page
exports.showCreateForm = (req, res) => {
    res.render('workouts/new');
};

// create a workout
exports.createWorkout = async (req, res) => {
    // req.body holds all form data
    await Workout.create(req.body);
    res.redirect('/workouts');
};

// show edit page for one workout
exports.showEditForm = async (req, res) => {
    const workout = await Workout.findById(req.params.id);
    res.render('workouts/edit', { workout });
};

// update workout
exports.updateWorkout = async (req, res) => {
    await Workout.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/workouts');
};

// delete workout with confirmation
exports.deleteWorkout = async (req, res) => {
    await Workout.findByIdAndDelete(req.params.id);
    res.redirect('/workouts');
};
