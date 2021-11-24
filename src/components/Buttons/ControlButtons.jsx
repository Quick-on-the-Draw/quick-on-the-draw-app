import React from 'react';
import './styles/ControlButtons.css';

const ControlButtons = ({ handleUndo, handleClear, handleDownload }) => {
  return (
    <>
      <button className="canvasBtn" onClick={handleUndo}>
        Undo
      </button>
      <button className="canvasBtn" onClick={handleClear}>
        Clear
      </button>
      <a
        className="canvasBtn"
        href="my drawing"
        download="drawing.png"
        onClick={handleDownload}
      >
        Download
      </a>
    </>
  );
};

export default ControlButtons;
