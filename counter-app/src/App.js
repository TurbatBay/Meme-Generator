import "./App.css";
import peopleData from "./data/peopleData";
import { useState } from "react";
function App() {
  const [card, setCard] = useState([]);
  const pepData = peopleData.map((person) => (
    <div className="card" key={person.id}>
      <img className="images" src={person.img} alt={person.name} />
      <div className="texts">
        <h4>{person.name}</h4>
        <h5>{person.age}</h5>
      </div>
      <button className="btn" onClick={() => removeClick(person.id)}>
        Remove
      </button>
    </div>
  ));
  const removeClick = () => {
    console.log("all cleared");
  };
  const removeAllClick = (id) => {
    console.log();
  };
  return (
    <div className="App">
      <div className="wrapper">
        {pepData}
        {/* <button onClick={() => removeAllClick(setCard([]))}>Remove All</button> */}
      </div>
    </div>
  );
}

export default App;
