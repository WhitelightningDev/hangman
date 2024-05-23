// Keyboard.js
import React from 'react';

const Keyboard = ({ handleGuess }) => {
  return (
    <div className="keyboard">
      {Array.from(Array(26), (_, i) => String.fromCharCode(65 + i)).map((letter) => (
        <button key={letter} className="btn btn-primary mr-2 mb-2" onClick={() => handleGuess(letter)}>
          {letter}
        </button>
      ))}
    </div>
  );
}

export default Keyboard;
