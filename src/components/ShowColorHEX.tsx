import { ColorHEXTypes } from '../App.types';
import './ShowColorHEX.css';

const ShowColorHEX = ({ color }: ColorHEXTypes) => {
  const showInfo = () => {
    //Show text "Click to copy" with icon
  };

  const copyValue = () => {
    //Change text "Click to copy" with icon to "Copied to clipboard"
    navigator.clipboard.writeText(color);
  };

  return (
    <div
      className='ShowColorHEX_wrapper'
      onClick={copyValue}
      onMouseOver={showInfo}>
      <div>Background HEX</div>
      <div className='ShowColorHEX_value'>{color}</div>
    </div>
  );
};

export default ShowColorHEX;
