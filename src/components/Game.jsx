import React from "react";
import Board from "./Board";
import { useState } from "react";
import "../styles/GameStyle.scss";
import { caculateWinner } from "../helper";
const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(true);
  const winner = caculateWinner(board);
  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) {
      //nếu có người thắng hoặc ô đã được chọn thì dừng
      return;
    }
    boardCopy[index] = turn ? "X" : "O";
    setBoard(boardCopy);
    setTurn(!turn);
  };
  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setTurn(true);
  };
  return (
    <div>
      <Board cells={board} onClick={handleClick}></Board>
      {winner && <div className="game-winner">Winner is {winner}</div>}

      <button onClick={handleReset} className="game-reset">
        Play Again
      </button>
    </div>
  );
};

export default Game;
