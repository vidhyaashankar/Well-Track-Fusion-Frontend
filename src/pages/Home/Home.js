import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="homePage">
      <section className="hero bg-secondary text-white">
        <h1>Welcome to Well-Track Fusion</h1>
        <p>Your all-in-one solution for diet and activity synergy</p>
        <Link to="/register" className="ctaButton btn btn-accent">Get Started</Link>
      </section>
      <section className="features">
        <h2>Key Features</h2>
        <div className="featureList">
          <div className="feature card">
            <h3>Calorie Tracking</h3>
            <p>Easily log and monitor your daily calorie intake</p>
          </div>
          <div className="feature card">
            <h3>Exercise Logging</h3>
            <p>Keep track of your workouts and physical activities</p>
          </div>
          <div className="feature card">
            <h3>Personalized Insights</h3>
            <p>Get tailored recommendations based on your health data</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

