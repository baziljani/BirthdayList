import React, { useState } from "react";
import "./BirthdayList.scss";

const BirthdayList = () => {
  const originalBirthdays = [
    { id: 1, name: "Sudesh Gowda", age: 29 },
    { id: 2, name: "Hester Hogan", age: 32 },
    { id: 3, name: "Larry Little", age: 36 },
    { id: 4, name: "Sean Walsh", age: 34 },
    { id: 5, name: "Lola Gardner", age: 29 },
    { id: 6, name: "Bazil Jani", age: 26 },
    { id: 7, name: "Renish Rani", age: 30 },
    { id: 8, name: "Renish Raja", age: 28 },
    { id: 9, name: "Jane Doe", age: 31 },
    { id: 10, name: "Tom Brown", age: 27 },
  ];

  const [birthdays, setBirthdays] = useState(originalBirthdays);

  const clearAll = () => setBirthdays([]);
  const checkAgain = () => setBirthdays(originalBirthdays);

  return (
    <div className="birthday-container">
      <div className="birthday-list">
        <h2>{birthdays.length} 🍰 Birthdays 🎈 today</h2>
        <ul>
          {birthdays.map((person) => (
            <li key={person.id}>
              <img
                src={`https://i.pravatar.cc/50?img=${person.id}`}
                alt={person.name}
                className="avatar"
              />
              <div>
                <h4>{person.name}</h4>
                <p>{person.age} years</p>
              </div>
            </li>
          ))}
        </ul>
        <button onClick={clearAll} disabled={birthdays.length === 0}>
          Clear All
        </button>
        <button onClick={checkAgain} disabled={birthdays.length}>Check Again</button>
      </div>
    </div>
  );
};

export default BirthdayList;
