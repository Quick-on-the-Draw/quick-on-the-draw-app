import React from 'react';
import './styles/ColorPalette.css';

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
      <div className="colorContainer">
        {colors.map((color) => {
          let thisColor = { background: color };

          return (
            <div>
              <button
                key={color}
                className="colorBtn"
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
