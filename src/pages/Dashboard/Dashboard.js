import React from 'react';
import DashboardWidgets from '../../components/DashboardWidgets/DashboardWidgets';
import FoodInput from '../../components/FoodInput/FoodInput';
import ExerciseLog from '../../components/ExerciseLog/ExerciseLog';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <DashboardWidgets />
      <div className="input-sections">
        <FoodInput />
        <ExerciseLog />
      </div>
    </div>
  );
};

export default Dashboard;

