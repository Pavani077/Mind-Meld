import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import googleLogo from '../assets/google-logo.svg';
import './Auth.css';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    try {
      setError('');
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('Account created successfully');
      navigate('/login');
    } catch (error) {
      console.error('Signup error:', error);
      setError('Failed to create account. Email may already be in use.');
    }
  };
  
  const handleGoogleSignUp = async () => {
    try {
      setError('');
      await signInWithPopup(auth, googleProvider);
      console.log('Google signup successful');
      navigate('/dashboard');
    } catch (error) {
      console.error('Google signup error:', error);
      setError('Failed to sign up with Google');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Create Account</h2>
        <p className="subtitle">Sign up for your MindMeld account</p>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </div>
          
          <button type="submit" className="login-button">Create Account</button>
        </form>
        
        <div className="social-login">
          <p>Or sign up with</p>
          <button 
            onClick={handleGoogleSignUp} 
            className="google-login-button"
          >
            <img src={googleLogo} alt="Google logo" />
            <span>Sign up with Google</span>
          </button>
        </div>
        
        <div className="signup-prompt">
          <p>Already have an account? <Link to="/login">Sign in</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;