import { useState } from 'react';
import { ColorHEXTypes } from '../App.types';
import './ShowColorHEX.css';

const ShowColorHEX = ({ color }: ColorHEXTypes) => {
  const [hoverStatus, hoverStatusSet] = useState(false);
  const [copyStatus, copyStatusSet] = useState(false);
  const showCopyIcon = () => {
    console.log('Enter');
    hoverStatusSet(true);
  };

  const hideCopyIcon = () => {
    console.log('Leave');
    hoverStatusSet(false);
    copyStatusSet(false);
  };

  const copyValue = async () => {
    console.log('Click');
    copyStatusSet(true);
    navigator.clipboard.writeText(color);
  };

  return (
    <>
      <div
        className='ShowColorHEX_wrapper'
        onClick={copyValue}
        onMouseEnter={showCopyIcon}
        onMouseLeave={hideCopyIcon}>
        {!hoverStatus ? (
          <div>{color}</div>
        ) : !copyStatus ? (
          <img src={`${process.env.PUBLIC_URL}/icon/copy.png`} alt='' />
        ) : (
          <img src={`${process.env.PUBLIC_URL}/icon/done.png`} alt='' />
        )}
      </div>
    </>
  );
};

export default ShowColorHEX;
