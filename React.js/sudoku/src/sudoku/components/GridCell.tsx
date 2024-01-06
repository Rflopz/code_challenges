import { useEffect, useRef } from "react";

type TGridCell = {
  row: number;
  cell: number;
  value: number;
  isValid: boolean;
  focus: string;
  setFocus(focus: string): void;
  onChange(row: number, col: number, val: number): void;
  onKeyDown(e: React.KeyboardEvent<HTMLInputElement>): void;
};

const GridCell = ({
  row,
  cell,
  value,
  isValid,
  focus,
  setFocus,
  onChange,
  onKeyDown,
}: TGridCell) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const pos = [row, cell].join("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(row, cell, parseInt(e.target.value.slice(-1)));
  }

  const handleFocus = () => {
    setFocus(pos);
  };

  useEffect(() => {
    if (inputRef.current && focus === pos) inputRef.current.focus();
  }, [inputRef, focus, pos]);

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
        onFocus={handleFocus}
        ref={inputRef}
      />
    </div>
  );
};

export default GridCell;
