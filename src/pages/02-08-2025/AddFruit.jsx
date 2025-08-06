import { useState } from "react";

const AddFruit = () => {
  const [fruits, setFruits] = useState(["Mango", "Banana", "Cherry"]);
  const [newFruit, setNewFruit] = useState();
  const [modalFruit, setModalFruit] = useState(null);

  const handleInputChange = (e) => {
    setNewFruit(e.target.value);
  };

  const handleSubmit = () => {
    setFruits([...fruits, newFruit]);
    setNewFruit("");
  };

  const askDelete = (fruit) => {
    setModalFruit(fruit);
  };

  const confirmDelete = () => {
    setFruits(fruits.filter((f) => f !== modalFruit));
    setModalFruit(null);
  };

  const cancelDelete = () => {
    setModalFruit(null);
  };

  return (
    <div>
      <h2>Fruits</h2>
      {fruits.map((fruit, index) => (
        <p>
          {index + 1}. {fruit}
          <button onClick={() => askDelete(fruit)}>Delete</button>
        </p>
      ))}

      <input value={newFruit} onChange={handleInputChange}></input>
      <br />
      <button onClick={handleSubmit}>Add</button>

      {modalFruit && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.3)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "8px",
              width: "300px",
              textAlign: "center",
            }}
          >
            <p>
              Are you sure you want to delete <b>{modalFruit}</b>?
            </p>
            <button onClick={confirmDelete}>Yes</button>
            <button onClick={cancelDelete}>No</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddFruit;
