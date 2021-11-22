import React, { useState, useRef } from 'react';
import CanvasDraw from 'react-canvas-draw';
import BrushSize from '../components/Buttons/BrushSize';
import ColorPallette from '../components/Buttons/ColorPallette';
import Timer from '../components/Timer/Timer';

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
    canvasWidth: 700,
    canvasHeight: 700,
  };

  const handleColorChange = (color) => {
    setBrushColor(color);
  };

  return (
    <div className={container}>
      <Timer />
      <div>
        <CanvasDraw {...canvasProps} className={mainCanvas} ref={canvasRef} />
      </div>

      <div>
        <ColorPallette
          pickColor={handleColorChange}
          setBrushColor={setBrushColor}
        />
        <BrushSize setBrushSize={setBrushSize} />
      </div>
      <button className={canvasBtn} onClick={() => canvasRef.current.undo()}>
        Undo
      </button>
      <button className={canvasBtn} onClick={() => canvasRef.current.clear()}>
        Clear Canvas
      </button>
    </div>
  );
};

const container = `
flex 
flex-col 
justify-center 
items-center
`;

const mainCanvas = `
h-12
w-12
border-8
border-black
border-double

flex
content-center
justify-center
m-2
`;

const canvasBtn = `
rounded-lg px-4 py-2 bg-green-700 text-green-100
`;

export default Canvas;
