import React, { useReducer } from "react";
import Board from "./Board";
import { useState } from "react";
import "../styles/GameStyle.scss";
import { caculateWinner } from "../helper";
const Game = () => {
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [turn, setTurn] = useState(true);
  // dủng cho trường hợp state phức tạp/
  //useReducer
  // const action = { type: "X",payload:index};
  // tạo biến ban đầu
  const initialState = {
    board: Array(9).fill(null),
    turn: true,
  };
  // tạo reducer
  // nếu obj quá sâu thì t dùng kỹ thuật deep copy
  // JSON.parse(JSON.stringify(obj))
  const gameReducer = (state, action) => {
    switch (action.type) {
      case "Click":
        // lấy ra giá trị của ô đang nhấn
        console.log(state, action);
        // const newBoard = [...state.board];
        ///
        const { board, turn } = state;
        const { index, winner } = action.payload;
        // nếu ô đang nhấn chưa có giá trị
        if (winner || board[index]) {
          // nếu có người thắng hoặc ô đã được chọn thì dừng
          return state;
        }
        const nextState = JSON.parse(JSON.stringify(state));
        console.log(nextState);
        nextState.board[index] = turn ? "X" : "O";
        nextState.turn = !turn;
        return nextState;
        break;
      case "Reset":
        return initialState;
        break;
      default:
        throw new Error("error");
    }
  };
  const [state, dispatch] = useReducer(gameReducer, initialState);
  // const [state, setState] = useState({
  //   board: Array(9).fill(null),
  //   turn: true,
  // });
  const winner = caculateWinner(state.board);
  const handleClick = (index) => {
    // const boardCopy = [...state.board];
    // if (winner || boardCopy[index]) {
    //   nếu có người thắng hoặc ô đã được chọn thì dừng
    //   return;
    // }
    dispatch({ type: "Click", payload: { index, winner } });
    // tại vị trí index thì gán giá trị của người chơi
    // boardCopy[index] = state.turn ? "X" : "O";
    // setBoard(boardCopy);
    // setTurn(!state.turn);
    // setState({
    //   ...state,
    //   board: boardCopy,
    //   turn: !state.turn,
    // });
  };
  console.log(state);
  const handleReset = () => {
    // setBoard(Array(9).fill(null));
    // setTurn(true);
    // setState({
    //   board: Array(9).fill(null),
    //   turn: true,
    // });
    dispatch({ type: "Reset" });
  };
  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
      {winner && <div className="game-winner">Winner is {winner}</div>}

      <button onClick={handleReset} className="game-reset">
        Play Again
      </button>
    </div>
  );
};

export default Game;
