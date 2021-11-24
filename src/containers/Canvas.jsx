import React, { useState, useRef } from 'react';
import CanvasDraw from 'react-canvas-draw';
import BrushSize from '../components/Buttons/BrushSize';
import ColorPalette from '../components/Buttons/ColorPalette';
import ControlButtons from '../components/Buttons/ControlButtons';
import Timer from '../components/Timer/Timer';
import { addDrawing } from '../utils/apiFetch';
// import { addDrawing } from '../utils/apiFetch';
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

  const handleDownload = (e) => {
    const dataURL = canvasRef.current.getDataURL({
      fileType: 'png',
      useBgImage: true,
      backgroundColour: '#ffffff',
    });
    e.target.href = dataURL;
    console.log(dataURL);
  };

  const handleSave = (e) => {
    console.log('saved!!!');
    e.preventDefault();
    const saveDataString = canvasRef.current.getSaveData();
    console.log(JSON.parse(saveDataString));
    // const form = new FormData();
    // const dataUrl = canvasRef.current.getDataURL();
    // // console.log(dataUrl);
    // form.append('url', dataUrl);
    // form.append('title', 'testing');
    // form.append('createdDate', '1999-01-09');
    // form.append('timerSetting', 5);
    // addDrawing(form);
    // console.log('the end');
    addDrawing({
      title: 'title',
      createdDate: '1999-01-09',
      timerSetting: 5,
      url: saveDataString,
    });
    // console.log(dataUrl);
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
        <ControlButtons
          handleUndo={handleUndo}
          handleClear={handleClear}
          handleSave={handleSave}
        />

        <a
          className="download-link"
          href="my drawing"
          download="drawing.png"
          onClick={handleDownload}
        >
          Download
        </a>
      </div>
    </div>
  );
};

export default Canvas;
