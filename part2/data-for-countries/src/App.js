import React, { useState, useEffect } from "react";
// import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState("");
  const [newName, setNewName] = useState("");
  const [newFilter, setNewFilter] = useState("");

  //   useEffect(() => {
  //     axios.get("https://restcountries.eu/all").then((response) => {
  //       setPersons(response.data);
  //     });
  //   }, []);

  const searchChange = (event) => {
    setNewFilter(event.target.value);
  };

  //   const search = countries.filter((country) =>
  //     country.name.toLowerCase().includes(newFilter.toLowerCase())
  //   );

  return (
    <div>
      <div>
        find countries <input onChange={searchChange} />
      </div>
    </div>
  );
};

export default App;
