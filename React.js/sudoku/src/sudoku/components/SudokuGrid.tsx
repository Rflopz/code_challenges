import "./SudokuGrid.styles.css";
import useSudoku from "../Hooks/useSudoku";

const SudokuGrid = () => {
  const { GridMemo, handleClearGrid } = useSudoku();

  return (
    <div className="container">
      {GridMemo}
      <div className="actions">
        <button className="save">Save</button>
        <button className="clear" onClick={handleClearGrid}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default SudokuGrid;
