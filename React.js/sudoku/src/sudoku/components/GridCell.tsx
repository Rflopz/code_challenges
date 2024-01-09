import { useEffect, useRef } from "react";

type TGridCell = {
  position: [x: number, y: number];
  value: number;
  isValid: boolean;
  focus: { value: string; set(pos: string): void };
  onChange(position: [x: number, y: number], val: number): void;
  onKeyDown(e: React.KeyboardEvent<HTMLInputElement>): void;
};

const GridCell = ({
  position,
  value,
  isValid,
  focus,
  onChange,
  onKeyDown,
}: TGridCell) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(position, parseInt(e.target.value.slice(-1)));
  }

  const handleFocus = () => {
    focus.set(position.join(""));
  };

  useEffect(() => {
    if (inputRef.current && focus.value === position.join(""))
      inputRef.current.focus();
  }, [inputRef, focus, position]);

  return (
    <div
      className={`cell 
        ${position[0] % 3 === 2 ? "row" : ""} 
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
