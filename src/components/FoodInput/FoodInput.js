import React, { useState } from 'react';
import './FoodInput.css';

const FoodInput = () => {
  const [food, setFood] = useState('');
  const [calories, setCalories] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Food logged:', { food, calories });
    // Add logic to save food log
    setFood('');
    setCalories('');
  };

  return (
    <div className="food-input">
      <h2>Log Food</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="food">Food Item:</label>
          <input
            type="text"
            id="food"
            value={food}
            onChange={(e) => setFood(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="calories">Calories:</label>
          <input
            type="number"
            id="calories"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Log Food</button>
      </form>
    </div>
  );
};

export default FoodInput;

