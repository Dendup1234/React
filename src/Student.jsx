function Student(props) {
  return (
    <div>
      <p className="text-lg">Name: {props.name}</p>;
      <p className="text-lg">Age: {props.age}</p>;
      <p className="text-lg">isStudent: {props.isStudent}</p>;
    </div>
  );
}

export default Student;
