function FruitsList() {
    const fruits = ["Apple", "Banana", "Mango"];
  
    return (
      <ul>
        <h2>Fruit list</h2>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    );
  }
  
  export default FruitsList;
  