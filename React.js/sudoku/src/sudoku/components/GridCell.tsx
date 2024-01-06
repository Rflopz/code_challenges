import { useEffect, useRef } from "react";

type TGridCell = {
  row: number;
  cell: number;
  value: number;
  isValid: boolean;
  focus: string;
  onChange(row: number, col: number, val: number): void;
  onKeyDown(e: React.KeyboardEvent<HTMLInputElement>): void;
};

const GridCell = ({
  row,
  cell,
  value,
  isValid,
  focus,
  onChange,
  onKeyDown,
}: TGridCell) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(row, cell, parseInt(e.target.value.slice(-1)));
  }

  useEffect(() => {
    if (inputRef.current && focus === [row, cell].join(""))
      inputRef.current.focus();
  }, [inputRef, focus, row, cell]);

  return (
    <div
      className={`cell 
        ${row % 3 === 2 ? "row" : ""} 
        ${!isValid ? "invalid" : ""}`}
    >
      <input
        value={value}
        onKeyDown={onKeyDown}
        onChange={handleChange}
        ref={inputRef}
      />
    </div>
  );
};

export default GridCell;
