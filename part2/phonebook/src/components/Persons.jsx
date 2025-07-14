import React from 'react'

const Button = ({ onClickDelete }) => {
  return <button onClick={onClickDelete}>delete</button>
}

const Person = ({id, name, phone, onClickDelete}) => {
    return (
      <>
        <div>
          {name} {phone} <Button onClickDelete={() => onClickDelete(id)} />
        </div>
        <br />
      </>
    )
}

const Persons = ({filterExists, filteredPersons, persons, onClickDelete}) => {
  return (
    <div>
        {filterExists
          ? filteredPersons.map((person) => (
              <Person key={person.id} id={person.id} name={person.name} phone={person.phone} onClickDelete={onClickDelete} />
            ))
          : persons.map((person) => (
              <Person key={person.id} id={person.id} name={person.name} phone={person.phone} onClickDelete={onClickDelete} />
            ))
        }
    </div>
  )
}

export default Persons