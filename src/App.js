import React from "react";
import "./App.css";
import Header from "./components/Header";
import FilterList from "./components/FilterList";
import RestaurantList from "./components/RestaurantList";

function App() {
  function handleFilterChange(filter, name) {
    console.log(filter, name);
  }
  return (
    <div className="app">
      <Header />

      <main className="main">
        <FilterList onFilterChange={handleFilterChange} />
        <RestaurantList />
      </main>
      <footer className="footer"> </footer>
    </div>
  );
}

export default App;
