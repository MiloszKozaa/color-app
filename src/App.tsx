import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import ShowColorHEX from './components/ShowColorHEX';
import Button from './components/Button';
import './App.css';

function App() {
  let color = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ];
  const [randomColor, randomColorSet] = useState('#fff');

  const getRandomNumber = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  const getRandomColor = () => {
    let currentColor = '#';
    while (currentColor.length < 7) {
      currentColor += color[getRandomNumber(15)];
    }
    return currentColor;
  };

  const useRandomColor = () => {
    randomColorSet(getRandomColor());
  };

  useEffect(() => {
    randomColorSet(getRandomColor());
  }, []);

  return (
    <div className='App' style={{ backgroundColor: randomColor }}>
      <Header />
      <div>
        <ShowColorHEX color={randomColor} />
        <Button onClick={useRandomColor} name={'Random color'} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
