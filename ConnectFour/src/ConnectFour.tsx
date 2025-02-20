import React, { useEffect, useState } from "react";
import Column from "./Column";

const matrix = () => {
  const matrix = [];
  for (let i = 0; i < 7; i++) {
    matrix.push(Array.from({ length: 6 }, () => null));
  }
  return matrix;
};

export default function ConnectFour({}) {
  const [board, setBoard] = useState<(number | null)[][]>(matrix);
  const [currentTile, setCurrentTile] = useState<number[]>([]);

  const [currentPlayer, setCurrentPlayer] = useState<number>(1);

  function handlePlayerMove(colIndex: number) {
    const updatedBoard = board.map((col) => [...col]);
    let rowIndex;
    for (let i = 5; i >= 0; i--) {
      if (updatedBoard[colIndex][i] === null) {
        updatedBoard[colIndex][i] = currentPlayer;
        rowIndex = i;
        break;
      }
    }
    setCurrentPlayer((prev) => (prev === 1 ? 2 : 1));
    setBoard(updatedBoard);
    if (rowIndex) setCurrentTile([colIndex, rowIndex]);
  }

  useEffect(() => {
    if (currentTile.length) {
      let [startCol, startRow, endCol, endRow, count] =
        setInitialCoordinates(currentTile);
      const startColCondion = startCol - 3 > 0 ? startCol - 3 : 0;
      const startRowCondion = startRow - 3 > 0 ? startRow - 3 : 0;
      const endColConditon = endCol + 3 < 6 ? endCol + 3 : 6;
      const endRowConditon = endRow + 3 < 5 ? endRow + 3 : 5;
      const currentTileValue = board[currentTile[0]][currentTile[1]];

      const currRowIndex = currentTile[1];
      const currentColIndex = currentTile[0];
      while (
        (startCol > startColCondion || endCol < endColConditon) &&
        count < 4
      ) {
        // horizonal
        if (startCol > 0) {
          startCol--;
          if (board[startCol][currRowIndex] === currentTileValue) {
            count++;
          }
        }
        if (endCol < 6) {
          endCol++;
          if (board[endCol][currRowIndex] === currentTileValue) {
            count++;
          }
        }
        if (count >= 4) {
          console.log("You win!");
          break;
        }
      }
      count = 1;
      // vertical
      [startCol, startRow, endCol, endRow] = setInitialCoordinates(currentTile);
      // while (
      //   (startRow > startRowCondion || endRow < endRowConditon) &&
      //   count < 4
      // ) {
      //   if (startRow > startRowCondion) {
      //   }
      // }
      //check the position at 3 different direction from the current tile
      // two pointer that would move outward in both direction on the plane
      // count the if the tiles contain same player div

      // diagonal
      //if win update win state
    }
  }, [board, currentTile]);

  function setInitialCoordinates(currentTile: number[]) {
    console.log("tile", currentTile);
    let startCol = currentTile[0];
    let startRow = currentTile[1];
    let endCol = currentTile[0];
    let endRow = currentTile[1];
    return [startCol, startRow, endCol, endRow, 1];
  }

  return (
    <div className="board">
      {board.map((col, i) => {
        return (
          <Column key={i} column={col} onClick={() => handlePlayerMove(i)} />
        );
      })}
    </div>
  );
}
