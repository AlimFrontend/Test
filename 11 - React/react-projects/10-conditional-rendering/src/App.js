import './App.css';
import PetProps from './components/PetProps';

function App() {
  return (
    <div className="App">
      <PetProps pet="cat" age="4" hasPet={false} />
      <PetProps pet="dog" age="7" hasPet={true} />
    </div>
  );
}

export default App;
