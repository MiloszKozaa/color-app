import { ColorHEX } from '../App.types';

const ShowColorHEX = ({ color }: ColorHEX) => {
  return (
    <div className='ShowColorHEX_wrapper'>
      <div>{color}</div>
    </div>
  );
};

export default ShowColorHEX;
