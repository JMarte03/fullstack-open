import React from 'react'

const Person = ({name, phone}) => {
    return <p>{name} {phone}</p>
}

const Persons = ({filterExists, filteredPersons, persons}) => {
  return (
    <div>
        {filterExists
          ? filteredPersons.map((person) => (
              <Person key={person.id} name={person.name} phone={person.phone} />
            ))
          : persons.map((person) => (
              <Person key={person.id} name={person.name} phone={person.phone} />
            ))
        }
    </div>
  )
}

export default Persons