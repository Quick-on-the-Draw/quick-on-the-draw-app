import React from 'react';
import './styles/ControlButtons.css';
import save from '../../assets/icons/buttons/save.png';
import undo from '../../assets/icons/buttons/undo.png';
import trash from '../../assets/icons/buttons/trash.png';

const ControlButtons = ({ handleUndo, handleClear, handleDownload }) => {
  return (
    <>
      <div className="buttonBox">
        <button className="canvasBtn" onClick={handleUndo}>
          <img src={undo} alt="Undo Button" />
        </button>
        <button className="canvasBtn" onClick={handleClear}>
          <img src={trash} alt="Delete Button" />
        </button>
        <a
          className="canvasBtn"
          href="my drawing"
          download="drawing.png"
          onClick={handleDownload}
        >
          <img className="save" src={save} alt="Save Button" />
        </a>
      </div>
    </>
  );
};

export default ControlButtons;
