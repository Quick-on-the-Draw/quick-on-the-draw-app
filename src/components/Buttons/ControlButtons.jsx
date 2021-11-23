import React from 'react';
import './styles/ControlButtons.css';

const ControlButtons = ({ handleUndo, handleClear }) => {
    return (
        <>
            <button className='canvasBtn' onClick={handleUndo}>
                Undo
            </button>
            <button className='canvasBtn' onClick={handleClear}>
                Clear
            </button>
            {/* <button className='canvasBtn'>Save</button> */}
        </>
    );
};

export default ControlButtons;
