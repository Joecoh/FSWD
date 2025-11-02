import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

function App() {
  const [user, setUser] = useState(null);
  const [view, setView] = useState('login'); // 'login' or 'register'

  useEffect(() => {
    const savedUser = localStorage.getItem('loggedInUser');
    if (savedUser) setUser(savedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setUser(null);
    setView('login');
  };

  if (user) return <Dashboard username={user} onLogout={handleLogout} />;

  return (
    <div>
      {view === 'login' ? (
        <Login setUser={setUser} switchToRegister={() => setView('register')} />
      ) : (
        <Register switchToLogin={() => setView('login')} />
      )}
    </div>
  );
}

export default App;
