// HangmanIcon.js
import React from 'react';

const HangmanIcon = ({ incorrectGuesses }) => {
  const hangmanParts = [
    { key: 'head', component: <circle cx="150" cy="90" r="20" strokeWidth="4" stroke="black" fill="white" /> },
    { key: 'body', component: <line x1="150" y1="110" x2="150" y2="170" strokeWidth="4" stroke="black" /> },
    { key: 'left-arm', component: <line x1="150" y1="130" x2="120" y2="160" strokeWidth="4" stroke="black" /> },
    { key: 'right-arm', component: <line x1="150" y1="130" x2="180" y2="160" strokeWidth="4" stroke="black" /> },
    { key: 'left-leg', component: <line x1="150" y1="170" x2="130" y2="200" strokeWidth="4" stroke="black" /> },
    { key: 'right-leg', component: <line x1="150" y1="170" x2="170" y2="200" strokeWidth="4" stroke="black" /> }
  ];

  return (
    <div className="hangman-icon mb-4">
      <svg width="300" height="300">
        {hangmanParts.slice(0, incorrectGuesses).map((part) => part.component)}
      </svg>
    </div>
  );
}

export default HangmanIcon;
