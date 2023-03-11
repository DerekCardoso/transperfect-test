import React, { useState } from "react";
import { Container, Title, Input, Button } from "./styles";

function NumberGame() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [gameWon, setGameWon] = useState(false);

  const handleGuess = (event) => {
    event.preventDefault();
    const parsedGuess = parseInt(guess, 10);
    if (parsedGuess === number) {
      setMessage("You win!");
      setGameWon(true);
    } else if (parsedGuess < number) {
      setMessage("Try again! Your guess was too low.");
    } else {
      setMessage("Try again! Your guess was too high.");
    }
    setGuess("");
  };

  const handleGuessChange = (event) => {
    setGuess(event.target.value);
  };

  const handleRestart = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
    setMessage("");
    setGuess("");
    setGameWon(false);
  };

  return (
    <Container>
      <Title>Lucky Game</Title>
      <p>Guess a number between 1 and 100:</p>
      <form onSubmit={handleGuess}>
        <Input
          type="number"
          value={guess}
          onChange={handleGuessChange}
          min="1"
          max="100"
        />
        <Button className="button" type="submit">
          Guess
        </Button>
      </form>
      {message && <p>{message}</p>}
      {gameWon && <Button onClick={handleRestart}>Restart</Button>}
    </Container>
  );
}

export default NumberGame;
