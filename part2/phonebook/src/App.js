import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import services from "./services/services";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response);
      setNewName("");
      setNewNumber("");
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

  const filterPerson = persons
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(newFilter.toLowerCase())
      )
    : [];

  const AddPerson = (event) => {
    event.preventDefault();

    persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    )
      ? alert(`${newName} is already added to phonebook`)
      : setPersons([...persons, { name: newName, number: newNumber }]);

    services.create({ name: newName, number: newNumber }).then((res) => {
      console.log(res);
    });
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} filterChange={filterChange} />
      <h3>Add a new</h3>
      <PersonForm
        addPerson={AddPerson}
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
