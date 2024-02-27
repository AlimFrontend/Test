//

function PetProps(props) {
  const { pet, age, hasPet } = props;
  return hasPet ? (
    <h1>{`My ${pet} is ${age} years old!`}</h1>
  ) : (
    <h1>{`I don't have a pet!`}</h1>
  );
}

export default PetProps;
