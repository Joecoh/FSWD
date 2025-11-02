import React, { useState } from 'react';
import CandidateCard from './CandidateCard';

const VotingPanel = () => {
  const [candidates, setCandidates] = useState([
    { id: 1, name: 'Alice', votes: 0 },
    { id: 2, name: 'Bob', votes: 0 },
    { id: 3, name: 'Charlie', votes: 0 },
  ]);

  const handleVote = (id) => {
    setCandidates(
      candidates.map((c) =>
        c.id === id ? { ...c, votes: c.votes + 1 } : c
      )
    );
  };

  return (
    <div className="voting-panel">
      <h2>Vote for Your Candidate</h2>
      {candidates.map((candidate) => (
        <CandidateCard
          key={candidate.id}
          candidate={candidate}
          onVote={handleVote}
        />
      ))}
    </div>
  );
};

export default VotingPanel;
