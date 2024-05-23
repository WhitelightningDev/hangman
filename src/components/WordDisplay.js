// WordDisplay.js
import React from 'react';

const WordDisplay = ({ word, guessedLetters }) => {
  return (
    <div className="word-display">
      {word && word.split('').map((letter, index) => (
        <span key={index} className="letter">
          {guessedLetters.includes(letter.toLowerCase()) ? letter : '_'}
        </span>
      ))}
    </div>
  );
}

export default WordDisplay;
