import React from 'react';

const Help = () => {
  return (
    <div>
      <h2>Help</h2>
      <p>Hangman is a word-guessing game where the player tries to guess a word by suggesting letters within a certain number of guesses.</p>
      <p>Here are the rules of the Hangman game:</p>
      <ol>
        <li>A random word is selected from a predefined list of words.</li>
        <li>The player guesses letters one at a time.</li>
        <li>If the guessed letter is part of the word, it is revealed in its correct position(s).</li>
        <li>If the guessed letter is not part of the word, a part of the hangman is drawn.</li>
        <li>The game continues until the player correctly guesses the entire word or runs out of guesses.</li>
      </ol>
    </div>
  );
}

export default Help;
