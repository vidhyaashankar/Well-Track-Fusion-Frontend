import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import FoodHistory from './pages/FoodHistory/FoodHistory';
import ExerciseHistory from './pages/ExerciseHistory/ExerciseHistory';
import NutriBot from './pages/NutriBot/NutriBot';
import './App.css';
import './styles/globals.css';


function AppContent() {
  const location = useLocation();
  const hideNavbarAndFooter = ["/login", "/register"].includes(location.pathname);

  return (
    <div className="App">
      {!hideNavbarAndFooter && <Navbar />}
      <main className="mainContent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/food-history" element={<FoodHistory />} />
          <Route path="/exercise-history" element={<ExerciseHistory />} />
          <Route path="/nutriBot" element={<NutriBot/>}/>
        </Routes>
      </main>
      {!hideNavbarAndFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
