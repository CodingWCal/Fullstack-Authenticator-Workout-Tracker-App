const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  exerciseName: {
    type: String,
    required: true
  },
  sets: {
    type: Number,
    required: true
  },
  reps: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: false
  },
  date: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('workout', WorkoutSchema);
