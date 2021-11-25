import React from 'react';
import './styles/BrushSize.css';

const BrushSize = ({ setBrushSize }) => {
  return (
    <div className="btnDiv">
      <button
        className="brushSizeButtons btSmall"
        onClick={() => {
          setBrushSize(1);
        }}
      ></button>
      <button
        className="brushSizeButtons btMed"
        onClick={() => {
          setBrushSize(10);
        }}
      ></button>
      <button
        className="brushSizeButtons btLg"
        onClick={() => {
          setBrushSize(15);
        }}
      ></button>
    </div>
  );
};

export default BrushSize;
