import './App.css';
import RandomNum from './components/RandomNum';

function App() {
  return (
    <div className="App">
      <RandomNum maxNum={10} />
    </div>
  );
}

export default App;
