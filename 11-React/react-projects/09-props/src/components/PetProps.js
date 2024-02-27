//

function PetProps(props) {
  const {pet, age} = props;
  return (
    <h1>
      My {pet} is {age} years old!
    </h1>
  );
}

export default PetProps;
