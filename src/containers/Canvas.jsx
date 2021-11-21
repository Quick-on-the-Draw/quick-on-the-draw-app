import React, { useState, useRef } from 'react';
import CanvasDraw from 'react-canvas-draw';
import BrushSize from '../components/Buttons/BrushSize';
import ColorPallette from '../components/Buttons/ColorPallette';
import { Timer } from '../components/Timer/Timer';
import style from './Canvas.module.css';

const Canvas = () => {
    const [brushColor, setBrushColor] = useState('#000000');
    const [brushSize, setBrushSize] = useState(1);

    const canvasRef = useRef();
    const canvasProps = {
        lazyRadius: 0,
        brushColor: brushColor,
        brushRadius: brushSize,
        hideInterface: true,
        hideGrid: true,
    };

    const handleColorChange = (color) => {
        setBrushColor(color);
    };

    return (
        <div>
            <Timer />
            <div className={style.canvasContainer}>
                <CanvasDraw
                    {...canvasProps}
                    className={style.mainCanvas}
                    ref={canvasRef}
                />
            </div>

            <div>
                <ColorPallette
                    pickColor={handleColorChange}
                    setBrushColor={setBrushColor}
                />
                <BrushSize setBrushSize={setBrushSize} />
            </div>
            <button onClick={() => canvasRef.current.undo()}>Undo</button>
            <button onClick={() => canvasRef.current.clear()}>
                Clear Canvas
            </button>
        </div>
    );
};

export default Canvas;
