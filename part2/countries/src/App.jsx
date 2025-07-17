import { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'
import CountriesList from './components/CountriesList'

function App() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredCountries, setFilteredCountries] = useState([])
  const [countries, setCountries] = useState([])
  const [showCountry, setShowCountry] = useState(false)
 
  useEffect(() => {
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

  const handleShowCountry = () => {
    const newState = !showCountry
    setShowCountry(newState)
    console.log(showCountry);
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
        {filterExists && (
          filteredCountries.length > 1 && filteredCountries.length <= 10 && (
            <CountriesList 
              countries={filteredCountries} 
              handleShowCountry={handleShowCountry}
              showCountry={showCountry}
            />
          ) 
        )}
      {filterExists && (
        filteredCountries.length === 1 && (
          <Country 
             countryInfo={filteredCountries[0]} 
          />     
        ) 
      )}
    </div>
  )

}

export default App
