import React from 'react';
import './styles/ControlButtons.css';

const ControlButtons = ({ handleUndo, handleClear, handleSave }) => {
  return (
    <>
      <button className="canvasBtn" onClick={handleUndo}>
        Undo
      </button>
      <button className="canvasBtn" onClick={handleClear}>
        Clear
      </button>
      <button className="canvasBtn" onClick={handleSave}>
        SAVE
      </button>
    </>
  );
};

export default ControlButtons;
