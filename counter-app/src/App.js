import "./App.css";
import peopleData from "./data/peopleData";
import { useState } from "react";
function App() {
  const [card, setCard] = useState(peopleData);

  const removeClick = (id) => {
    const filteredCard = card.filter((prevCard) => prevCard.id !== id);
    setCard(filteredCard);
  };

  return (
    <div className="App">
      <h1>Birthday reminder App</h1>

      <div className="wrapper">
        {card.map((person) => {
          return (
            <div className="card" key={person.id}>
              <img className="images" src={person.img} alt={person.name} />
              <div className="texts">
                <h4>{person.name}</h4>
                <h5>{person.age} years old</h5>
              </div>
              <button className="btn " onClick={() => removeClick(person.id)}>
                Remove
              </button>
            </div>
          );
        })}

        {card.length === 0 ? (
          <button onClick={() => setCard(peopleData)} className="btn-all">
            Show All
          </button>
        ) : (
          <button onClick={() => setCard([])} className="btn-all">
            Remove All
          </button>
        )}
      </div>
      <p className="tag">Developed with passion by Turbat Bay</p>
    </div>
  );
}

export default App;
