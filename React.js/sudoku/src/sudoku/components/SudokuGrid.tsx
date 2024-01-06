import { useCallback, useMemo, useState } from "react";
import "./SudokuGrid.styles.css";
import GridCell from "./GridCell";
const initialGrid = Array.from(Array(9), () =>
  new Array(9).fill({ value: 0, enabled: true })
);

const SudokuGrid = () => {
  const [grid, setGrid] = useState(initialGrid);
  const [focus, setFocus] = useState("00");

  const isValid = useCallback(
    (val: number, row: number, col: number) => {
      if (val === 0) return true;

      const inRow = grid[row].filter(
        (cell, i) => i !== col && cell.value === val
      );

      if (inRow.length) return false;

      for (let x = 0; x < 9; x++) {
        if (x !== row && grid[x][col].value === val) return false;
      }

      return true;
    },
    [grid]
  );

  const handleOnChange = useCallback(
    (row: number, col: number, val: number) => {
      if (!Number.isNaN(val))
        setGrid((current) => {
          current[row][col] = {
            ...current[row][col],
            value: val || 0,
          };
          return [...current];
        });
    },
    []
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const pos = focus.split("");
      const row = parseInt(pos[0]);
      const col = parseInt(pos[1]);

      console.log("move with " + e.key, focus);
      switch (e.key) {
        case "j":
        case "s":
          if (row < grid.length - 1) setFocus([row + 1, col].join(""));
          break;
        case "k":
        case "w":
          if (row > 0) setFocus([row - 1, col].join(""));
          break;
        case "h":
        case "a":
          if (col > 0) setFocus([row, col - 1].join(""));
          break;
        case "l":
        case "d":
          if (col < grid[0].length - 1) setFocus([row, col + 1].join(""));
          break;
      }
    },
    [focus, grid]
  );

  const GridMemoized = useMemo<JSX.Element>(() => {
    return (
      <div className="grid">
        {grid.map((row, rowIndex) =>
          row.map((cell, cellIndex) => (
            <GridCell
              key={`${rowIndex}_${cellIndex}`}
              row={rowIndex}
              isValid={isValid(cell.value, rowIndex, cellIndex)}
              focus={focus}
              setFocus={setFocus}
              cell={cellIndex}
              value={cell.value}
              onChange={handleOnChange}
              onKeyDown={handleKeyDown}
            />
          ))
        )}
      </div>
    );
  }, [focus, grid, handleKeyDown, handleOnChange, isValid]);

  return <div className="container">{GridMemoized}</div>;
};

export default SudokuGrid;
