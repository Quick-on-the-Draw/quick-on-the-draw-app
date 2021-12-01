import React, { useState, useRef } from 'react';
import CanvasDraw from 'react-canvas-draw';
import BrushSize from '../components/Buttons/BrushSize';
import ColorPalette from '../components/Buttons/ColorPalette';
import ControlButtons from '../components/Buttons/ControlButtons';
import Timer from '../components/Timer/Timer';
// import { addDrawing } from '../utils/apiFetch';
import './styles/Canvas.module.css';
// import background from '../assets/QuickBackground.png';
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
    <main
      className="
      h-screen bg-red
      bg-background bg-center
      bg-no-repeat bg-cover
      bg-fixed
      overflow-hidden"
      // style={{ backgroundImage: `url(${background})` }}
    >
      <div className="min-h-screen flex items-center justify-center">
        <div class="grid grid-cols-3 grid-rows-5 mb-20 ">
          <img
            className="h-9/12 w-9/12 col-span-1"
            src={title}
            alt="QOTD Title"
          />

          <Timer className="col-start-2" />

          <ControlButtons
            className="col-start-2 col-span-2 row-span-5"
            handleUndo={handleUndo}
            handleClear={handleClear}
            handleDownload={handleDownload}
            // handleSave={handleSave}
          />

          <CanvasDraw
            {...canvasProps}
            className="bg-offwhite border-8 border-yellow border-dashed rounded-xl shadow col-start-2 col-span-2 row-span-5"
            ref={canvasRef}
          />
          <div className="row-start-2 row-span-4">
            <div className="grid grid-cols-3 rows-3">
              <BrushSize setBrushSize={setBrushSize} />

              <img
                className="col-start-1 col-span-2 row-span-4 h-auto flex  "
                src={cactus}
                alt="cactus logo"
              />

              <ColorPalette
                className="row-span-3"
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
