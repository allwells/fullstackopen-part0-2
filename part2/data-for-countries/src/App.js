import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ weather }) => {
  if (weather) {
    return (
      <div>
        <h2>weather in {weather.location.name}</h2>
        <p>
          <strong>temperature: </strong>
          {weather.current.temperature}
        </p>
        <img src={weather.current.weather_icons[0]} alt={"weather icon"}></img>
        <p>
          <strong>wind: </strong>
          {weather.current.wind_speed} mph direction {weather.current.wind_dir}
        </p>
      </div>
    );
  } else {
    return null;
  }
};

const Country = ({ country }) => {
  const [newWeather, setNewWeather] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${country.capital}`;

  useEffect(() => {
    axios.get(URL).then((response) => {
      setNewWeather(response.data);
    });
  }, [URL]);

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
      <Weather weather={newWeather} />
    </div>
  );
};

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
