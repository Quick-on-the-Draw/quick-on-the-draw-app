import React from 'react';

const ControlButtons = ({ handleUndo, handleClear }) => {
    return (
        <>
            <button className={canvasBtn} onClick={handleUndo}>
                Undo
            </button>
            <button className={canvasBtn} onClick={handleClear}>
                Clear
            </button>
            {/* <button className={canvasBtn}>Save</button> */}
        </>
    );
};

const canvasBtn = `
rounded-lg px-4 py-2 bg-green-700 text-green-100
`;

export default ControlButtons;
