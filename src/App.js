import React from "react";
import "./App.css";
import Header from "./components/Header";
import FilterList from "./components/FilterList";
import RestaurantList from "./components/RestaurantList";

function App() {
  const [filters, setFilters] = React.useState({});

  function handleFilterChange(name, value) {
    const newFilters = { ...filters };
    newFilters[name] = value;
    setFilters(newFilters);
    console.log(`${name}:  ${value}`);
    setFilters(newFilters);
  }
  return (
    <div className="app">
      <Header />

      <main className="main">
        <FilterList onFilterChange={handleFilterChange} />
        <RestaurantList selectedFilters={filters} />
      </main>
      <footer className="footer"> </footer>
    </div>
  );
}

export default App;
