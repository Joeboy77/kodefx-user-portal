import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PrivacyPolicy from './components/PrivacyPolicy';
import Login from './components/Login';
import DeleteAccount from './components/DeleteAccount';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public route for login */}
          <Route path="/login" element={<Login />} />
          
          {/* Protected routes */}
          <Route path="/" element={
            <PrivateRoute>
              <PrivacyPolicy />
            </PrivateRoute>
          } />
          
          <Route path="/delete-account" element={
            <PrivateRoute>
              <DeleteAccount />
            </PrivateRoute>
          } />
          
          {/* Redirect all other routes to login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
          <Route path='/privacy' element={<PrivacyPolicy />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;