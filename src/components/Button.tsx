import { ButtonTypes } from '../App.types';
import './Button.css';
const Button = ({ onClick, name }: ButtonTypes) => {
  return <button onClick={onClick} className="Button_style">{name}</button>;
};

export default Button;