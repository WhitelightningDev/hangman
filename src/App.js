import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Help from './components/Help';
import WordDisplay from './components/WordDisplay';
import Keyboard from './components/Keyboard';
import HangmanIcon from './components/HangmanIcon';

function App() {
  // State variables
  const [word, setWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [gameState, setGameState] = useState('playing'); // playing, won, lost
  const [showHelp, setShowHelp] = useState(false);

  // Array of words for the game
  const words = ['hangman', 'javascript', 'react', 'developer', 'openai'];

  // Function to select a random word
  const selectRandomWord = () => {
    if (words.length === 0) {
      throw new Error('No words available for the game.');
    }
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  };

  // Function to check if the guessed letter is correct
  const handleGuess = (letter) => {
    if (!word) {
      throw new Error('Word is not initialized.');
    }
    const lowerCaseLetter = letter.toLowerCase();
    if (word.toLowerCase().includes(lowerCaseLetter)) {
      if (!guessedLetters.includes(lowerCaseLetter)) {
        setGuessedLetters([...guessedLetters, lowerCaseLetter]);
      }
    } else {
      setIncorrectGuesses(incorrectGuesses + 1);
    }
  };

  // Function to restart the game
  const restartGame = () => {
    setWord(selectRandomWord());
    setGuessedLetters([]);
    setIncorrectGuesses(0);
    setGameState('playing');
  };

  // Effect hook to check game status
  useEffect(() => {
    const checkGameStatus = () => {
      if (!word) {
        throw new Error('Word is not initialized.');
      }
      const correctLetters = word.toLowerCase().split('').filter(letter => guessedLetters.includes(letter));
      if (correctLetters.length === word.length) {
        setGameState('won');
      } else if (incorrectGuesses >= 6) { // Assuming the hangman has 6 parts
        setGameState('lost');
      }
    };

    try {
      checkGameStatus();
    } catch (error) {
      console.error('Error in checkGameStatus:', error.message);
    }
  }, [guessedLetters, incorrectGuesses, word]);

  // Effect hook to initialize the game
  useEffect(() => {
    try {
      setWord(selectRandomWord());
    } catch (error) {
      console.error('Error in initializing the game:', error.message);
    }
  }, []);

  // Render the hangman
  const renderHangman = () => {
    const hangmanParts = [
      { key: 'head', component: <circle cx="150" cy="90" r="20" strokeWidth="4" stroke="black" fill="white" /> },
      { key: 'body', component: <line x1="150" y1="110" x2="150" y2="170" strokeWidth="4" stroke="black" /> },
      { key: 'left-arm', component: <line x1="150" y1="130" x2="120" y2="160" strokeWidth="4" stroke="black" /> },
      { key: 'right-arm', component: <line x1="150" y1="130" x2="180" y2="160" strokeWidth="4" stroke="black" /> },
      { key: 'left-leg', component: <line x1="150" y1="170" x2="130" y2="200" strokeWidth="4" stroke="black" /> },
      { key: 'right-leg', component: <line x1="150" y1="170" x2="170" y2="200" strokeWidth="4" stroke="black" /> }
    ];

    return hangmanParts.slice(0, incorrectGuesses).map((part) => part.component);
  };

  // JSX
  return (
    <div className="container">
      <h1 className="mt-5 mb-4">Hangman Game</h1>
      {gameState === 'playing' && (
        <>
          <WordDisplay word={word} guessedLetters={guessedLetters} />
          <p>Incorrect Guesses Remaining: {6 - incorrectGuesses}</p>
          <Keyboard handleGuess={handleGuess} />
        </>
      )}
      {gameState === 'won' && <p className="alert alert-success">Congratulations! You won!</p>}
      {gameState === 'lost' && <p className="alert alert-danger">Sorry! You lost. The word was "{word}".</p>}
      <HangmanIcon incorrectGuesses={incorrectGuesses} />
      <div className="text-center">
        <button className="btn btn-primary" onClick={restartGame}>Restart Game</button>
        <button className="btn btn-info" onClick={() => setShowHelp(!showHelp)}>Toggle Help</button>
      </div>
      {showHelp && <Help />}
    </div>
  );
}

export default App;
