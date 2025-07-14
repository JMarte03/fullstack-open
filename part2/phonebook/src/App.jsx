import { useState, useEffect } from "react";
import axios from 'axios'
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from './services/persons'

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      phone: newPhone,
    };
    const foundObject = persons.find((person) => person.name === newName);
    foundObject === undefined
      ? personService
        .create(newPerson)
        .then(returnedPerson => setPersons(persons.concat(returnedPerson)))
      : alert(`${newName} is already added to phonebook`);
    setNewName("");
    setNewPhone("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value);
  };

  const handleFilterChange = (event) => {
    const newFilter = event.target.value;
    setFilter(newFilter);
  };

  const filterExists = filter === "" ? false : true;
  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );
  console.log(filteredPersons);
  console.log(filterExists);

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter
        text="Filter shown with"
        value={filter}
        onChange={handleFilterChange}
      />
      <h2>Add a new</h2>
      <PersonForm
        onSubmit={addPerson}
        nameValue={newName}
        phoneValue={newPhone}
        onChangeName={handleNameChange}
        onChangePhone={handlePhoneChange}
      />
      <h2>Numbers</h2>
      <Persons
        filterExists={filterExists}
        filteredPersons={filteredPersons}
        persons={persons}
      />
    </div>
  );
}

export default App;
