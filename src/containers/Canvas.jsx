import React, { useState, useRef } from 'react';
import CanvasDraw from 'react-canvas-draw';
import BrushSize from '../components/Buttons/BrushSize';
import ColorPalette from '../components/Buttons/ColorPalette';
import ControlButtons from '../components/Buttons/ControlButtons';
import Timer from '../components/Timer/Timer';
// import { addDrawing } from '../utils/apiFetch';
import './styles/Canvas.css';
import cactus from '../assets/Cactus.png';
import title from '../assets/QuickTitle.png';

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
    canvasWidth: 900,
    canvasHeight: 600,
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

  // const handleSave = (e) => {
  //     console.log('saved!!!');
  //     e.preventDefault();
  //     const saveDataString = canvasRef.current.getSaveData();
  //     console.log(JSON.parse(saveDataString));
  //     // const form = new FormData();
  //     // const dataUrl = canvasRef.current.getDataURL();
  //     // // console.log(dataUrl);
  //     // form.append('url', dataUrl);
  //     // form.append('title', 'testing');
  //     // form.append('createdDate', '1999-01-09');
  //     // form.append('timerSetting', 5);
  //     // addDrawing(form);
  //     // console.log('the end');
  //     addDrawing({
  //         title: 'title',
  //         createdDate: '1999-01-09',
  //         timerSetting: 5,
  //         url: saveDataString,
  //     });
  //     // console.log(dataUrl);
  // };

  // if (loading) return 'LOADING';

  return (
    <main className="drawMain">
      <div className="centerDiv">
        <div class="mainGrid">
          <img className="titleImg" src={title} alt="QOTD Title" />

          <Timer className="timerGrid" />

          <ControlButtons
            className="controlBtnGrid"
            handleUndo={handleUndo}
            handleClear={handleClear}
            handleDownload={handleDownload}
            // handleSave={handleSave}
          />

          <CanvasDraw {...canvasProps} className="canvasGrid" ref={canvasRef} />
          <div className="sidebarGrid">
            <div className="sidebarContainer">
              <BrushSize setBrushSize={setBrushSize} />

              <img className="cactusImg " src={cactus} alt="cactus logo" />

              <ColorPalette
                className="colorGrid"
                pickColor={handleColorChange}
                setBrushColor={setBrushColor}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Canvas;
