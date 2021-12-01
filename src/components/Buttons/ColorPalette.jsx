import React from 'react';
import './styles/ColorPalette.module.css';

const ColorPalette = ({ pickColor, brushColor, setBrushColor }) => {
  const colors = [
    '#892301',
    '#ea9473ff',
    '#C8752D',
    '#FEDA86',
    '#86AC9B',
    '#26543F',
    '#111615',
  ];

  const handleColorPick = (color) => {
    pickColor(color);
  };

  return (
    <>
      <div
        className="
        flex
    flex-col
    w-2  
   col-start-3 row-start-1 row-span-3 w-24 bg-gray-100 bg-opacity-25"
      >
        {colors.map((color) => {
          let thisColor = { background: color };

          return (
            <div>
              <button
                key={color}
                className=" flex justify-items-end w-14
              h-10
              m-4 transition 
              duration-150 
              ease-in-out 
              transform hover:-translate-y-1 hover:scale-120
              focus:ring-4 focus:ring-purple"
                style={thisColor}
                onClick={() => {
                  handleColorPick(color);
                }}
              ></button>
            </div>
          );
        })}

        <input
          style={{ background: { brushColor } }}
          type="color"
          value={brushColor}
          onChange={(e) => {
            setBrushColor(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default ColorPalette;
