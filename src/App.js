import './App.css';
import React, { useState, useEffect } from 'react';
import Search from "./components/Search";
import List from "./components/List";

const apiRoot = "https://www.thecocktaildb.com/api/json/v1/1/";
const apiPath = "search.php?s=";
let apiValue = "";

export default function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      apiValue = e.target.value;
    } return
  }

  useEffect(() => {
    fetch(apiRoot + apiPath + apiValue)
      .then(response => {
        if (!response.ok) {
          throw Error("No cocktail under that name");
        }
        return response.json();
      })
      .then(cocktailData => { setData(cocktailData); setError(null) })
      .catch(error => setError(error.message));
  }, [handleSearch]);

  if (!data && Error) {
    return (
      <div>
        <Search onSearch={handleSearch} />
        <div>{error && <div>{error}</div>}</div>
      </div>
    )
  }

  return (
    <div className="App">
      <Search onSearch={handleSearch} />
      {error && <div>{error}</div>}
      <List drinksList={data.drinks} />
    </div>
  );
}