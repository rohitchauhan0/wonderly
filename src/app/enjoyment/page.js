"use client";
import Navbar from "@/components/Navbar";
import React, { useState, useEffect } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [mode, setMode] = useState(null); // 'pvp' or 'pvc'
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState(""); // To hold the message for modal (win or draw)
  const winner = calculateWinner(board);

  useEffect(() => {
    if (mode === "pvc" && !isXNext && !winner) {
      const emptySquares = board.reduce(
        (acc, value, idx) => (value === null ? acc.concat(idx) : acc),
        []
      );
      const randomIndex =
        emptySquares[Math.floor(Math.random() * emptySquares.length)];

      if (randomIndex !== undefined) {
        const newBoard = board.slice();
        newBoard[randomIndex] = "O";
        setTimeout(() => {
          setBoard(newBoard);
          setIsXNext(true);
        }, 500); // Add delay for computer move
      }
    }

    if (winner) {
      setTimeout(() => {
        setModalMessage(` winner: ${winner}` );
        setShowModal(true);
      }, 500);
    } else if (board.every((square) => square !== null)) {
      // If the board is full and no winner, it's a draw
      setTimeout(() => {
        setModalMessage("😯 It's a Draw! 😯");
        setShowModal(true);
      }, 500);
    }
  }, [isXNext, mode, board, winner]);

  const handleClick = (index) => {
    if (board[index] || winner || (!isXNext && mode === "pvc")) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const renderSquare = (index) => (
    <div
      className="w-24 h-24 md:w-32 md:h-32 bg-black text-yellow-500 text-4xl font-bold flex items-center justify-center border-4 border-yellow-500 cursor-pointer hover:bg-gray-800 transition duration-300"
      onClick={() => handleClick(index)}
    >
      {board[index]}
    </div>
  );

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setShowModal(false);
  };

  const chooseMode = (chosenMode) => {
    setMode(chosenMode);
    resetGame();
  };

  return (
  <>
  <Navbar />
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white font-sans p-4">
      {!mode ? (
        <>
          <h1 className="text-4xl font-bold font-mono mb-8 text-yellow-500">
            Tic-Tac-Toe
          </h1>
          <div className="flex space-x-4 mb-8">
            <button
              onClick={() => chooseMode("pvp")}
              className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition duration-300"
            >
              Player vs Player
            </button>
            <button
              onClick={() => chooseMode("pvc")}
              className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition duration-300"
            >
              Player vs Computer
            </button>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-4xl font-bold font-mono mb-8 text-yellow-500">
            Tic-Tac-Toe: {mode === "pvp" ? "PvP" : "PvC"}
          </h1>

          <div className="grid grid-cols-3 gap-4 mb-8">
            {Array.from({ length: 9 }, (_, i) => renderSquare(i))}
          </div>

          {winner ? (
            <div className="text-2xl font-mono text-yellow-500 mb-4">
              Winner: {winner}
            </div>
          ) : (
            <div className="text-2xl font-mono text-yellow-500 mb-4">
              {mode === "pvc" && !isXNext
                ? "Computer's Turn"
                : `Next Player: ${isXNext ? "X" : "O"}`}
            </div>
          )}

          <button
            onClick={resetGame}
            className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition duration-300 mb-4"
          >
            Reset Game
          </button>

          <button
            onClick={() => setMode(null)}
            className="px-6 py-3 bg-black text-yellow-500 font-semibold rounded-lg border-2 border-yellow-500 hover:bg-gray-900 transition duration-300"
          >
            Back to Menu
          </button>

          {/* Modal for winner or draw */}
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-black bg-opacity-90 w-full h-full absolute"></div>
              <div className="bg-yellow-500 text-black rounded-lg p-6 z-10 text-center w-11/12 md:w-1/3">
                <h2 className="text-3xl font-bold font-mono mb-4">
                  {modalMessage}
                </h2>
                <button
                  onClick={resetGame}
                  className="px-6 py-3 bg-black text-yellow-500 font-semibold rounded-lg hover:bg-gray-800 transition duration-300"
                >
                  Play Again
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  </>
  );
};

// Helper function to calculate winner
const calculateWinner = (squares) => {
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

  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default TicTacToe;