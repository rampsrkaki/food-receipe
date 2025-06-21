import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';           
import './Signin.css';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!email || !password || !confirmPassword) {
      setError('All fields are required.');
      toast.error('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      toast.error('Passwords do not match.');
      return;
    }

    setError('');
    console.log('Signed in:', { email, password });
    toast.success('Signed in successfully!');

  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit} className="signin-form">
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit">Sign In</button>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Signin;
