import './RandomNum.css';
import { useState } from 'react';
import generateRandomNum from '../utils/GenNum';

function RandomNum(props) {
  const { maxNum } = props;
  const [randomNum, setRandomNum] = useState(generateRandomNum);
  const changeRandomNum = () => setRandomNum(generateRandomNum(maxNum));

  return (
    <div>
      <h1 class="h1">{randomNum}</h1>
      <button class="btn" onClick={changeRandomNum}>
        Generate new num!
      </button>
    </div>
  );
}

export default RandomNum;
