import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons
import "./Login.css";
import animationGif from "../../assets/gifs/MedicalCropped.gif";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }

      // Store token and navigate
      localStorage.setItem("token", data.token);
      console.log("Login successful:", data);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-left-card">
        <img src={animationGif} alt="Welcome Animation" style={{ width: "100%", height: "auto" }} />
      </div>
      <div className="login-right-card">
        <h2>Login to Your Account</h2>
        {error && <p className="error-message" style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit} className="login-form">
          <div className="login-form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="login-input"
              required
            />
          </div>
          <div className="login-form-group">
            <label htmlFor="password">Password:</label>
            <div className="password-input-wrapper">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="************"
              className="login-input"
              required
            />
            <button
              type="button"
              className="toggle-password-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            </div>
          </div>
          <button type="submit" className="ctaButton btn btn-accent">Login</button>
        </form>
        <p className="register-link">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
        <p className="register-login-link register-home-link">
          Or go back to <Link to="/">Home</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
