import React from 'react';
import './styles/BrushSize.module.css';
import brush from '../../assets/icons/buttons/brush.png';
const BrushSize = ({ setBrushSize }) => {
  return (
    <div className="flex justify-center col-span-2  m-2">
      <button
        className="brushSizeButtons rounded-lg focus:ring-2 focus: ring-inset focus:ring-purple "
        onClick={() => {
          setBrushSize(1);
        }}
      >
        <img
          className="h-12 w-12 m-4 transition 
    duration-300 
    ease-in-out
    
    transform hover:-translate-y-1 hover:scale-110;"
          src={brush}
          alt=" Small Brush Button"
        />
      </button>
      <button
        className="brushSizeButtons rounded-lg focus:ring-2 focus: ring-inset focus:ring-purple"
        onClick={() => {
          setBrushSize(10);
        }}
      >
        {' '}
        <img
          className="h-16 w-16 m-4 h-12 w-12 m-4  transition 
          duration-300 
          ease-in-out 
          transform hover:-translate-y-1 hover:scale-110   "
          src={brush}
          alt=" Med Brush Button"
        />
      </button>
      <button
        className="brushSizeButtons rounded-lg focus:ring-2 focus: ring-inset focus:ring-purple"
        onClick={() => {
          setBrushSize(15);
        }}
      >
        {' '}
        <img
          className="h-18 w-18 m-4 transition 
    duration-300 
    ease-in-out 
    
    
    
    transform hover:-translate-y-1 hover:scale-120 "
          src={brush}
          alt=" Large Brush Button"
        />
      </button>
    </div>
  );
};

export default BrushSize;
