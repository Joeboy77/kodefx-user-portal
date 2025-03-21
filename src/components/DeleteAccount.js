import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navigation from './Navigation';
import './DeleteAccount.css';

const DeleteAccount = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [userId, setUserId] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Get userId from localStorage
    const storedUserId = localStorage.getItem('userId');
    
    if (!storedUserId) {
      // If no userId is found, redirect to login
      navigate('/login');
      return;
    }
    
    setUserId(storedUserId);
  }, [navigate]);

  const handleShowConfirmation = () => {
    setShowConfirmation(true);
  };

  const handleCancel = () => {
    setShowConfirmation(false);
  };

  const handleDelete = async () => {
    if (!userId) {
      setError('User ID not found. Please login again.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Make the DELETE request to your API
      await axios.delete(`https://kodefx-c6d6097c6d0c.herokuapp.com/api/v1/users/${userId}`);
      
      // Show success message
      setSuccess(true);
      setShowConfirmation(false);
      
      // After 3 seconds, logout and redirect to login page
      setTimeout(() => {
        localStorage.removeItem('userId');
        navigate('/login');
      }, 3000);
    } catch (err) {
      console.error('Delete error:', err);
      setError(err.response?.data?.message || 'An error occurred while deleting your account. Please try again.');
      setShowConfirmation(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="delete-account-page">
      <Navigation />
      
      <div className="container">
        <div className="delete-account-content">
          <h1 className="delete-account-title">Delete Your Account</h1>
          
          {success ? (
            <div className="success-container">
              <div className="success-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h2 className="success-title">Account Deleted Successfully</h2>
              <p className="success-message">Your account has been deleted from our system.</p>
              <p className="redirect-message">Redirecting to login page...</p>
            </div>
          ) : (
            <>
              {error && (
                <div className="alert alert-danger">
                  {error}
                </div>
              )}

              {showConfirmation ? (
                <div className="confirmation-container">
                  <div className="alert alert-warning">
                    <strong>Warning:</strong> This action cannot be undone. All your data will be permanently deleted.
                  </div>
                  
                  <h3>Are you absolutely sure?</h3>
                  <p>This will permanently delete:</p>
                  <ul className="delete-list">
                    <li>Your profile and all personal information</li>
                    <li>All connections with forex experts</li>
                    <li>Trading history and analytics</li>
                    <li>Saved preferences and settings</li>
                  </ul>
                  
                  <div className="buttons-group">
                    <button
                      onClick={handleDelete}
                      disabled={isLoading}
                      className="btn btn-danger"
                    >
                      {isLoading ? 'Deleting Account...' : 'Yes, Delete My Account'}
                    </button>
                    <button
                      onClick={handleCancel}
                      disabled={isLoading}
                      className="btn btn-light ml-2"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="delete-info-container">
                  <p className="delete-info-text">
                    Before you proceed, please understand that deleting your account will remove all your data from our system permanently. This includes your profile information, trading history, connections with forex experts, and any saved preferences.
                  </p>
                  
                  <h3>What happens when you delete your account?</h3>
                  <ul className="delete-list">
                    <li>All your personal information will be removed from our system</li>
                    <li>Your profile will no longer be accessible to forex experts</li>
                    <li>Any ongoing connections or transactions will be terminated</li>
                    <li>You will need to create a new account if you wish to use our services again</li>
                  </ul>
                  
                  <div className="mt-4">
                    <button
                      onClick={handleShowConfirmation}
                      className="btn btn-danger"
                    >
                      Delete Account
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;