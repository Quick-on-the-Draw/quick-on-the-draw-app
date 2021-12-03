import React from 'react';
import './styles/BrushSize.css';
import brush from '../../assets/icons/buttons/brush.png';
const BrushSize = ({ setBrushSize }) => {
  return (
    <div className="btnDiv">
      <button
        className="brushSizeButtons"
        onClick={() => {
          setBrushSize(1);
        }}
      >
        <img
          className="btImage btSmall"
          src={brush}
          alt=" Small Brush Button"
        />
      </button>
      <button
        className="brushSizeButtons"
        onClick={() => {
          setBrushSize(10);
        }}
      >
        {' '}
        <img className="btImage btMed" src={brush} alt=" Med Brush Button" />
      </button>
      <button
        className="brushSizeButtons"
        onClick={() => {
          setBrushSize(15);
        }}
      >
        {' '}
        <img className="btImage btLg" src={brush} alt=" Large Brush Button" />
      </button>
    </div>
  );
};

export default BrushSize;
