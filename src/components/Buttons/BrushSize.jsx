import React from 'react';
import './styles/BrushSize.module.css';
import brush from '../../assets/icons/buttons/brush.png';
const BrushSize = ({ setBrushSize }) => {
  return (
    <div className="row-span-1">
      <button
        className="brushSizeButtons"
        onClick={() => {
          setBrushSize(1);
        }}
      >
        <img className="h-12 w-12" src={brush} alt=" Small Brush Button" />
      </button>
      <button
        className="brushSizeButtons btMed"
        onClick={() => {
          setBrushSize(10);
        }}
      >
        {' '}
        <img className="h-14 w-14" src={brush} alt=" Med Brush Button" />
      </button>
      <button
        className="brushSizeButtons btLg"
        onClick={() => {
          setBrushSize(15);
        }}
      >
        {' '}
        <img className="h-16 w-16" src={brush} alt=" Large Brush Button" />
      </button>
    </div>
  );
};

export default BrushSize;
