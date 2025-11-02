import React from 'react';
import './App.css';
import Header from './components/Header';
import VotingPanel from './components/VotingPanel';

const App = () => {
  return (
    <div className="app">
      <Header />
      <VotingPanel />
    </div>
  );
};

export default App;
