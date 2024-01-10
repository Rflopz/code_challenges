import { useCallback, useMemo, useState } from "react";
import GridCell from "../components/GridCell";

const getRandomInitials = (n: number) => {
  const list: { [key: string]: number } = {};
  for (let x = 0; x <= n; x++) {
    const row = Math.floor(Math.random() * 9);
    const col = Math.floor(Math.random() * 9);

    list[`${row}${col}`] = Math.floor(Math.random() * 9);
  }

  return list;
};
const getInitialGrid = () => {
  const randomInitials = getRandomInitials(5);

  const grid = Array.from(Array(9), () =>
    new Array(9).fill({ value: 0, enabled: true })
  );

  for (const [key, val] of Object.entries(randomInitials)) {
    const [row, col] = key.split("").map((x) => parseInt(x));
    grid[row][col] = { value: val, enabled: false };
  }

  return grid;
};

const initialPosition = "00";

const useSudoku = () => {
  const [grid, setGrid] = useState(getInitialGrid());
  const [position, setPosition] = useState(initialPosition);

  const isValid = useCallback(
    (val: number, row: number, col: number) => {
      if (val === 0) return true;

      const findInRows = grid[row].filter(
        (cell, i) => i !== col && cell.value === val
      );

      if (findInRows.length) return false;

      for (let r = 0; r < grid.length; r++) {
        if (r !== row && grid[r][col].value == val) return false;
      }

      return true;
    },
    [grid]
  );

  const handleOnChange = useCallback(
    (position: [x: number, y: number], val: number) => {
      const [row, col] = position;
      if (!Number.isNaN(val))
        setGrid((current) => {
          current[row][col] = {
            ...current[row][col],
            value: val,
          };

          return [...current];
        });
    },
    []
  );

  const handleClearGrid = () => {
    setGrid(getInitialGrid());
    setPosition(initialPosition);
  };

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const [x, y] = position.split("");
      const row = parseInt(x);
      const col = parseInt(y);

      switch (e.key) {
        case "j":
        case "s":
          if (row < grid.length - 1) setPosition([row + 1, col].join(""));
          break;
        case "k":
        case "w":
          if (row > 0) setPosition([row - 1, col].join(""));
          break;
        case "h":
        case "a":
          if (col > 0) setPosition([row, col - 1].join(""));
          break;
        case "l":
        case "d":
          if (col < grid[0].length - 1) setPosition([row, col + 1].join(""));
          break;
      }
    },
    [position, grid]
  );

  const GridMemo = useMemo<JSX.Element>(
    () => (
      <div className="grid">
        {grid.map((row, x) =>
          row.map((col, y) => (
            <GridCell
              key={`${x}_${y}`}
              position={[x, y]}
              isValid={isValid(col.value, x, y)}
              enabled={col.enabled}
              focus={{ value: position, set: setPosition }}
              value={col.value}
              onChange={handleOnChange}
              onKeyDown={handleKeyDown}
            />
          ))
        )}
      </div>
    ),
    [grid, handleKeyDown, handleOnChange, isValid, position]
  );

  return {
    GridMemo,
    handleClearGrid,
  };
};

export default useSudoku;
