import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Get the intended destination from location state, or default to homepage
  const from = location.state?.from?.pathname || '/';

  // Check if user is already logged in
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      navigate(from, { replace: true });
    }
  }, [from, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      // Call the login API endpoint
      const response = await axios.post('https://kodefx-c6d6097c6d0c.herokuapp.com/api/v1/login', {
        email,
        password
      });

      console.log('Login response:', response.data);

      // Check for user_id in the response
      if (response.data && response.data.user_id) {
        // Store the user ID in localStorage
        localStorage.setItem('userId', response.data.user_id);
        
        // Store access token if needed
        if (response.data.access_token) {
          localStorage.setItem('accessToken', response.data.access_token);
        }
        
        // Navigate to the intended destination
        navigate(from, { replace: true });
      } else {
        setError('Login successful but user ID was not received. Please try again.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(err.response?.data?.message || 'Invalid email or password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1 className="auth-title">Login to KodeFX</h1>
        <p className="auth-subtitle">
          Please log in to access the KodeFX platform
        </p>
        
        {error && (
          <div className="alert alert-danger">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="btn btn-primary btn-block"
          >
            {isLoading ? 'Logging in...' : 'Log in'}
          </button>
        </form>
        
        <div className="demo-info">
          <h3>Demo Credentials</h3>
          <p><strong>Email:</strong> demo@kodefx.com</p>
          <p><strong>Password:</strong> password123</p>
        </div>
      </div>
    </div>
  );
};

export default Login;