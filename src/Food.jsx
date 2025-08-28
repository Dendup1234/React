const foods = [
  { name: "Food1", id: crypto.randomUUID() },
  { name: "Food2", id: crypto.randomUUID() },
  { name: "Food3", id: crypto.randomUUID() },
];
function Food() {
  return (
    <ul>
      {foods.map((food) => (
        <li key={food.id}>{food.name}</li>
      ))}
    </ul>
  );
}
export default Food;
