import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import * as Icon from 'react-feather';

const App = () => {
  const [count, setCount] = useState(0);
  const [latestCount, updateLatestCount] = useState('');

  // increase by 1
  const increaseByOne = () => {
    setCount(count + 1);
    updateLatestCount('Increased the count by 1.');
  };

  // increase by 10
  const increaseByTen = () => {
    setCount(count + 10);
    updateLatestCount('Increased the count by 10.');
  };

  // decrease by 1
  const decreaseByOne = () => {
    setCount(count - 1);
    updateLatestCount('Decreased the count by 1.');
  };

  // decrease by 10
  const decreaseByTen = () => {
    setCount(count - 10);
    updateLatestCount('Decreased the count by 10.');
  };

  // reset count to 0
  const resetToZero = () => {
    setCount(0);
    updateLatestCount('Reset count to 0.');
  };

  // generate random number
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // set count to a random number between 1 and 100
  const setRandomNumber = () => {
    setCount(generateRandomNumber(1, 100));
    updateLatestCount('Set count to a random number between 1 and 100.');
  };

  return (
    <div className="card">
      <h1>Current Value:</h1>

      <p className="value">{count}</p>

      <p className="text">
        <Icon.Terminal /> {latestCount}
      </p>

      <div className="button-wrapper">
        <button onClick={increaseByOne}>
          <Icon.ChevronUp />
        </button>
        <button onClick={increaseByTen}>
          <Icon.ChevronsUp />
        </button>
        <button onClick={resetToZero}>
          <Icon.RotateCcw />
        </button>
        <button onClick={setRandomNumber}>
          <Icon.Hash />
        </button>
        <button onClick={decreaseByTen}>
          <Icon.ChevronsDown />
        </button>
        <button onClick={decreaseByOne}>
          <Icon.ChevronDown />
        </button>
      </div>
    </div>
  );
};

export default App;
