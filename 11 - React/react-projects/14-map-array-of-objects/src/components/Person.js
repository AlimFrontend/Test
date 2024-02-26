import './Person.css';

function Person(props) {
  const { id, name, surname, email, gender } = props;
  console.log(id);
  return (
    <div className="card">
      <img src={gender} alt="8" />
      <h3>
        {name} {surname}
      </h3>
      <h4>{email}</h4>
    </div>
  );
}

export default Person;
