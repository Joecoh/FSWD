import React, { useState } from 'react';

function Login({ setUser, switchToRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[username] && users[username] === password) {
      localStorage.setItem('loggedInUser', username);
      setUser(username);
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" required />
        <br/>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
        <br/>
        <button type="submit">Login</button>
      </form>
      <button onClick={switchToRegister}>Go to Register</button>
    </div>
  );
}

export default Login;

