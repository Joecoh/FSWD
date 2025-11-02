import React from 'react';

const CandidateCard = ({ candidate, onVote }) => {
  return (
    <div className="candidate-card">
      <h3>{candidate.name}</h3>
      <p>Votes: {candidate.votes}</p>
      <button onClick={() => onVote(candidate.id)}>Vote</button>
    </div>
  );
};

export default CandidateCard;
