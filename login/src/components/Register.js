import React, { useState } from 'react';

function Register({ switchToLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[username]) {
      alert('Username already exists!');
      return;
    }
    users[username] = password;
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful!');
    switchToLogin();
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" required />
        <br/>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
        <br/>
        <button type="submit">Register</button>
      </form>
      <button onClick={switchToLogin}>Go to Login</button>
    </div>
  );
}

export default Register;

