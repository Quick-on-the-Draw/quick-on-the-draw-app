import React from 'react';
import './styles/ControlButtons.css';

const ControlButtons = ({ handleUndo, handleClear, handleDownload }) => {
  return (
    <>
      <div className="buttonBox">
        <button className="canvasBtn" onClick={handleUndo}>
          <i className="fas fa-undo-alt fa-2x"></i>
        </button>
        <button className="canvasBtn" onClick={handleClear}>
          <i className="far fa-trash-alt fa-2x"></i>
        </button>
        <a
          className="canvasBtn"
          href="my drawing"
          download="drawing.png"
          onClick={handleDownload}
        >
          <i className="fas fa-download fa-2x"></i>
        </a>
      </div>
    </>
  );
};

export default ControlButtons;
