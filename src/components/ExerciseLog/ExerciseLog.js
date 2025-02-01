import React, { useState } from 'react';
import './ExerciseLog.css';

const ExerciseLog = () => {
  const [exercise, setExercise] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Exercise logged:', { exercise, duration });
    // Add logic to save exercise log
    setExercise('');
    setDuration('');
  };

  return (
    <div className="exercise-log">
      <h2>Log Exercise</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exercise">Exercise:</label>
          <input
            type="text"
            id="exercise"
            value={exercise}
            onChange={(e) => setExercise(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration (minutes):</label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Log Exercise</button>
      </form>
    </div>
  );
};

export default ExerciseLog;

