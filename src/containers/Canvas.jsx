import React, { useState, useRef } from 'react';
import CanvasDraw from 'react-canvas-draw';
import BrushSize from '../components/Buttons/BrushSize';
import ColorPalette from '../components/Buttons/ColorPalette';
import ControlButtons from '../components/Buttons/ControlButtons';
import Timer from '../components/Timer/Timer';
import './styles/Canvas.css';

const Canvas = () => {
    const [brushColor, setBrushColor] = useState('#000000');
    const [brushSize, setBrushSize] = useState(1);
    // const [loading, setLoading] = useState(true);

  const canvasRef = useRef();
  const canvasProps = {
    lazyRadius: 0,
    brushColor: brushColor,
    brushRadius: brushSize,
    hideInterface: true,
    hideGrid: true,
    canvasWidth: 700,
    canvasHeight: 700,
  };

  const handleColorChange = (color) => {
    setBrushColor(color);
  };

  const handleUndo = () => {
    canvasRef.current.undo();
  };

  const handleClear = () => {
    canvasRef.current.clear();
  };

  return (
    <div className="container">
      <Timer />
      <div>
        <CanvasDraw {...canvasProps} className="mainCanvas" ref={canvasRef} />
      </div>
      <div>
        <ColorPalette
          pickColor={handleColorChange}
          setBrushColor={setBrushColor}
        />
        <BrushSize setBrushSize={setBrushSize} />
        <ControlButtons handleUndo={handleUndo} handleClear={handleClear} />
      </div>
    </div>
  );
};

export default Canvas;
