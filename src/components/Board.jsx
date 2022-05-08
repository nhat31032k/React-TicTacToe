import React from "react";
import Cell from "./Cell";
// import "../styles/GameStyle.scss";
const Board = (props) => {
  return (
    <div className="game-board">
      {/* cú pháp render khi ko có dữ liệu tạo sẵn  */}
      {props.cells.map((item, index) => (
        // truyền index để bik nhấn vaoìo nào
        <Cell
          key={index}
          value={item}
          onClick={() => props.onClick(index)}
          className={item === "X" ? "is-X" : item === "O" ? "is-O" : ""}
          // style={props.value === X ? { color: "red" } : { color: "blue" }}
        ></Cell>
      ))}
    </div>
  );
};

export default Board;
