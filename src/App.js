import React from "react";
import "./App.css";
import Header from "./components/Header";
import Filter from "./components/Filter";
import FilterList from "./components/FilterList";
import RestaurantList from "./components/RestaurantList";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <RestaurantList />
        <FilterList />
      </main>
    </div>
  );
}

export default App;
