import { useState } from 'react';
import { ColorHEXTypes } from '../App.types';
import './ShowColorHEX.css';

const ShowColorHEX = ({ color }: ColorHEXTypes) => {

  const copyValue = () => {
    //Change text "Click to copy" with icon to "Copied to clipboard"
    navigator.clipboard.writeText(color);
  };

  return (
    <>
      <div
        className='ShowColorHEX_wrapper'
        onClick={copyValue}>
        {color}
      </div>
    </>
  );
};

export default ShowColorHEX;
