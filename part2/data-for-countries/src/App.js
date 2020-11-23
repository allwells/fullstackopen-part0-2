import React, { useState, useEffect } from "react";
import axios from "axios";

const Countries = ({ countries, newFilter, setNewFilter }) => {
  const search = countries.filter((country) => {
    return country.name.toLowerCase().includes(newFilter.toLowerCase());
  });

  if (search.length === 1) {
    return (
      <div>
        {search.map((country) => (
          <Country key={country.name} country={country} />
        ))}
      </div>
    );
  } else if (search.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else {
    return (
      <div>
        {search.map((country) => (
          <div key={country.name}>
            <p>{country.name}</p>
            <button onClick={() => setNewFilter(country.name)}>show</button>
          </div>
        ))}
      </div>
    );
  }
};

const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h2>languages</h2>
      <ul>
        {country.languages.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img src={country.flag} alt="flag" width={70}></img>
    </div>
  );
};

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newFilter, setNewFilter] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const searchChange = (event) => {
    setNewFilter(event.target.value);
  };

  return (
    <div>
      <div>
        find countries <input value={newFilter} onChange={searchChange} />
      </div>
      <Countries
        countries={countries}
        newFilter={newFilter}
        setNewFilter={setNewFilter}
      />
    </div>
  );
};

export default App;
