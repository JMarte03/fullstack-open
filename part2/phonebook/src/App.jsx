import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from './services/persons'

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filter, setFilter] = useState("");

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

  // read
  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      });
  }, []);

  // addPerson
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
      : updatePhone(foundObject.id);
    setNewName("");
    setNewPhone("");
  };

  // deletePerson
  const deletePerson = (id) => {
    const personToDelete = persons.find(p => p.id === id)
    if (window.confirm(`Delete ${personToDelete.name}?`)){
      personService
        .erase(id)
        .then(setPersons(persons.filter(p => p.id !== id)))
    } 
  }

  // update phone number
  const updatePhone = (id) => {
    const personToUpdate = persons.find(p => p.id === id)
    if (window.confirm(`${personToUpdate.name} is already added to phonebook, replace the old number with a new one?`)){
      const newPerson = { ...personToUpdate, phone: newPhone }
      personService
        .update(id, newPerson)
        .then(returnedPerson => {
          setPersons(persons.map(person => (
            person.id === id? returnedPerson : person
          )))
        })
    }
  }

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
        onClickDelete={deletePerson}
      />
    </div>
  );
}

export default App;