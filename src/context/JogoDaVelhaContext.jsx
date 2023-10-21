

import React, { createContext, useContext, useState, useEffect } from 'react';

// Cria um contexto para o jogo da velha
const JogoDaVelhaContext = createContext();

export const JogoDaVelhaProvider = ({ children }) => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [delayNextRound, setDelayNextRound] = useState(false);
  const [moves, setMoves] = useState(0);
  const [endGame, setEndGame] = useState(false);


  const winner = calculateWinner(squares);

  const resetGame = () => {
    if (confirm("deseja reiniciar o placar ?") == true) {
      setSquares(Array(9).fill(null));
      setPlayer1Score(0),
        setPlayer2Score(0)
    }
  }

  const restartGame = () => {
    setSquares(Array(9).fill(null));
    setMoves(0);
  };

  const handleClick = (i) => {
    const newSquares = squares.slice();
    if (calculateWinner(newSquares) || newSquares[i]) return;

    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
    setDelayNextRound(true);
    setMoves(moves + 1);


  };

  useEffect(() => {
    if (delayNextRound) {
      const delay = setTimeout(() => {

        if (winner) {
          if (winner === 'X') {
            setPlayer1Score(player1Score + 1);

            restartGame();
          } else if (winner === 'O') {
            setPlayer2Score(player2Score + 1);
            restartGame();
          }

        } else if (moves === squares.length) {
          restartGame();
        }
        setDelayNextRound(false);

      }, 3000);

      return () => clearTimeout(delay);
    }
  }, [delayNextRound, winner, moves, player1Score, player2Score]);




  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }



  // Objeto de contexto que será fornecido aos componentes filhos
  const contextValue = {
    winner,
    squares,
    xIsNext,
    handleClick,
    player1Score,
    player2Score,
    restartGame,
    moves,
    endGame,
    resetGame
  };

  // Fornece o contexto aos componentes filhos
  return (
    <JogoDaVelhaContext.Provider value={contextValue}>
      {children}
    </JogoDaVelhaContext.Provider>
  );
};

// Hook personalizado para acessar o contexto
export const useJogoDaVelha = () => {
  return useContext(JogoDaVelhaContext);
};