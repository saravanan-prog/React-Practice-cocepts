import { useState } from "react";

export function UpdateState() {
  const [count, setCount] = useState(0);
  const [decrementcount, setDecrementCount] = useState(100);
  const [candidateName, setCandidateName] = useState("Saravanan");
  const [fruits, setFruits] = useState([
    "apple",
    "Orange",
    "grapes",
    "pineapple",
  ]);

  const handleClick = () => {
    setCount(count + 1);
  };
  /* Parameterized Event */
  const handleIncrement = (input) => {
    setCount(count + input);
  };

  return (
    <div>
      <h1> Update State Learning </h1>
      <div className="increment">
        <p>Count: {count} </p>
        <button onClick={handleClick}> Increment </button>
        <button onClick={() => handleIncrement(5)}>Increment + 5</button>
      </div>
      <div className="decrement">
        <p>Decrement count : {decrementcount}</p>
        <button onClick={() => setDecrementCount(decrementcount - 1)}>
          decrement
        </button>
        <button onClick={() => setDecrementCount(decrementcount - 5)}>
          Decrement - 5
        </button>
      </div>
      <div className="canidate-data">
        <p> Canidate Name : {candidateName} </p>
        <button onClick={() => setCandidateName("Raja")}> update name </button>
      </div>
      <div className="fruits-list">
        {fruits && fruits.length != 0 ? (
          fruits.map((value, index) => {
            return <p key={index}>{value}</p>;
          })
        ) : (
          <h5>No fruits found</h5>
        )}
        <button onClick={() => setFruits([...fruits,"banana"])}> Add Fruit</button>
      </div>
    </div>
  );
}
