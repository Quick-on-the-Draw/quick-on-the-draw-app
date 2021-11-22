import React from 'react';
import './styles/BrushSize.css';

const BrushSize = ({ setBrushSize }) => {
    return (
        <div>
            <label>Brush Size:</label>
            <button
                className='brushSizeButtons'
                onClick={() => {
                    setBrushSize(1);
                }}
            >
                Small
            </button>
            <button
                className='brushSizeButtons'
                onClick={() => {
                    setBrushSize(10);
                }}
            >
                Med
            </button>
            <button
                className='brushSizeButtons'
                onClick={() => {
                    setBrushSize(15);
                }}
            >
                large
            </button>
        </div>
    );
};

export default BrushSize;
