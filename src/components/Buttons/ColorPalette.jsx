import React from 'react';
// import style from './styles/ColorPalette.module.css';

const ColorPalette = ({ pickColor, brushColor, setBrushColor }) => {
  const colors = [
    '#892301',
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
        className="flex
    flex-col
    pt-10
    w-2"
      >
        {colors.map((color) => {
          let thisColor = { background: color };

          return (
            <button
              key={color}
              className="w-10
                            h-8
                            m-2"
              style={thisColor}
              onClick={() => {
                handleColorPick(color);
              }}
            ></button>
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
