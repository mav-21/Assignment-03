// express router lets us create grouped routes
const express = require('express');
const router = express.Router();

// loading controller logic
const controller = require('../controllers/workoutcontroller');

// GET all workouts
router.get('/', controller.getAllWorkouts);

// NEW workout form
router.get('/new', controller.showCreateForm);

// CREATE workout
router.post('/', controller.createWorkout);

// EDIT form
router.get('/edit/:id', controller.showEditForm);

// UPDATE workout
router.put('/edit/:id', controller.updateWorkout);

// DELETE
router.delete('/delete/:id', controller.deleteWorkout);

module.exports = router; // exporting to app.js
