import { useState } from "react";

const AddFruit = () => {
  const [fruits, setFruits] = useState(["Mango", "Banana", "Cherry"]);
  const [newFruit, setNewFruit] = useState();

  const handleInputChange = (e) => {
    setNewFruit(e.target.value);
  };

  const handleSubmit = () => {
    setFruits([...fruits, newFruit]);
    setNewFruit("");
  };

  return (
    <div>
      <h2>Fruits</h2>
      {fruits.map((fruit, index) => (
        <p>
          {index + 1}. {fruit}
        </p>
      ))}
      <input value={newFruit} onChange={handleInputChange}></input>
      <br />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default AddFruit;
