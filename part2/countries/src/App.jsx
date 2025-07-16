import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredCountries, setFilteredCountries] = useState([])
  const [countries, setCountries] = useState([])
 
  useEffect (() => {
     axios
        .get('https://studies.cs.helsinki.fi/restcountries/api/all')
        .then(response => {
          setCountries(response.data)
        })
  })

  useEffect(() => {
    setFilteredCountries(countries.filter(country => (
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    )))
  },[searchQuery])
  
  
  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }
  
  const filterExists = searchQuery === "" ? false : true;
  
  return (
    <div>
      find countries <input value={searchQuery} onChange={handleChange} />
      {filterExists && (
        filteredCountries.length > 10 && (
          <p>Too many matches, specify another filter</p>
        ) 
      )}
      <ul>
        {filterExists && (
          filteredCountries.length > 1 && filteredCountries.length <= 10 && (
            filteredCountries.map(country => (
              <li key={country.name.common}>{country.name.common}</li>
            ))
          ) 
        )}
      </ul>
      {filterExists && (
        filteredCountries.length === 1 && (
          <div>
            <h1>{filteredCountries[0].name.common}</h1>
            <p>Capital {filteredCountries[0].capital[0]}</p>
            <p>Area {filteredCountries[0].area}</p>
            <h2>Languages</h2>
            <ul>
              {Object.values(filteredCountries[0].languages).map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
            <img 
              src={filteredCountries[0].flags.png} 
              alt={filteredCountries[0].flags.alt} 
            />
          </div>        
        ) 
      )}
    </div>
  )

}

export default App
