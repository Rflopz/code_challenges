import { useState } from "react";

const initialGrid = Array.from(Array(9), () => new Array(9));

const SudokuGrid = () => {
  const [grid, setGrid] = useState(initialGrid);
  return <div>sudoku grid</div>;
};

export default SudokuGrid;
