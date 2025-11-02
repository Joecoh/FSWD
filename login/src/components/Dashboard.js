import React from 'react';

function Dashboard({ username, onLogout }) {
  return (
    <div>
      <h2>Welcome, {username}!</h2>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
