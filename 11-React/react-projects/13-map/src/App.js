import { useState } from 'react';

import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

const texts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <Counter count={count} />
      {texts.map((text) => {
        return <Button onClick={incrementCount} text={text} />;
      })}
    </div>
  );
}

export default App;
