import React from "react";

const Persons = ({ filterPerson }) => {
  return (
    <div>
      {filterPerson.map((person, i) => (
        <p key={i}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default Persons;
