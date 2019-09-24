import React from "react";
import FilterList from "../components/FilterList";
import RestaurantList from "../components/RestaurantList";
import Header from "../components/Header";
import styled from "styled-components";

const MainSection = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;
export default function Home({ history, location }) {
  const params = new URLSearchParams(location.search);
  const [filters, setFilters] = React.useState({
    category: params.get("Category") || "",
    distance: params.get("Distance") || "",
    price: params.get("Price") || ""
  });

  function handleFiltersChange(name, value) {
    const newFilters = { ...filters };
    params.delete(name);
    if (value) {
      newFilters[name] = value;
      params.append(name, value);
    } else {
      delete newFilters[name];
    }
    setFilters(newFilters);
    history.push(`${location.pathname}?${params.toString()}`);
  }
  return (
    <>
      <Header />
      <MainSection>
        <FilterList
          selectedFilters={filters}
          onfilterchange={handleFiltersChange}
        />
        <RestaurantList selectedFilters={filters} />
      </MainSection>
    </>
  );
}

/*function Home() {
  //const data= await fetch('')
  return (
    <div className="App">
      <h1>HOME</h1>
    </div>
  );
}

export default Home;*/
