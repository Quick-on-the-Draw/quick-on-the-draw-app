import React, { useState, useRef } from 'react';
import CanvasDraw from 'react-canvas-draw';
import BrushSize from '../components/Buttons/BrushSize';
import ColorPalette from '../components/Buttons/ColorPalette';
import ControlButtons from '../components/Buttons/ControlButtons';
import Timer from '../components/Timer/Timer';
// import { addDrawing } from '../utils/apiFetch';
import './styles/Canvas.css';
import background from '../assets/QuickBackground.png';
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
    canvasWidth: 800,
    canvasHeight: 500,
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
    <main className="main" style={{ backgroundImage: `url(${background})` }}>
      <div className="container">
        <img className="title" src={title} alt="QOTD Title" />
        <Timer />
        <ControlButtons
          className="controlButtons"
          handleUndo={handleUndo}
          handleClear={handleClear}
          handleDownload={handleDownload}
          // handleSave={handleSave}
        />

        <div className="sideContainer">
          <div className="canvasContainer">
            <CanvasDraw
              {...canvasProps}
              className="mainCanvas"
              ref={canvasRef}
            />
          </div>
          <div className="colorContainer">
            <div className="brushDiv">
              <BrushSize setBrushSize={setBrushSize} />
            </div>
            <div className="imgDiv">
              <img className="cactus" src={cactus} alt="cactus logo" />
            </div>
            <div className="colorDiv">
              <ColorPalette
                className="colorPalette"
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
