import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
      setNewName("");
    });
  }, []);

  const nameChange = (event) => {
    setNewName(event.target.value);
  };
  const numberChange = (event) => {
    setNewNumber(event.target.value);
  };
  const filterChange = (event) => {
    setNewFilter(event.target.value);
  };

  const filterPerson = persons.filter((person) =>
    person.name.toLowerCase().includes(newFilter.toLowerCase())
  );

  const addPerson = (event) => {
    event.preventDefault();
    persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    )
      ? alert(`${newName} is already added to phonebook`)
      : setPersons([...persons, { name: newName, number: newNumber }]);
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} filterChange={filterChange} />
      <h3>Add a new</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        nameChange={nameChange}
        numberChange={numberChange}
      />
      <h3>Numbers</h3>
      <Persons filterPerson={filterPerson} />
    </div>
  );
};

export default App;
