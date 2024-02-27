import persons from '../data/persons';
import Person from './Person';
import './Persons.css';

function Persons() {
  return (
    <div className="thePersons">
      {persons.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
}

export default Persons;
