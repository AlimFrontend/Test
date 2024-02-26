import { useState } from 'react';

import './App.css';
// import Button from './components/Button';
import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState(0);
  const incrementCount1 = () => {
    setCount(count + 1);
  };
  const removeCount1 = () => {
    setCount(count - 1);
  };
  const resetCount1 = () => {
    setCount(0);
  };
  const resetCount2 = () => {
    setCount(Infinity);
  };
  return (
    <div className="App">
      <Counter count={count} />
      <div>
        <button onClick={incrementCount1}>Give</button>
      </div>
      <div>
        <button onClick={removeCount1}>Take</button>
      </div>
      <div>
        <button onClick={resetCount1}>Reset</button>
      </div>
      <button onClick={resetCount2}>DO NOT CLICK</button>
    </div>
  );
}

export default App;
