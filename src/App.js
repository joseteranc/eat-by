import React from "react";
import "./App.css";
import Header from "./components/Header";
import FilterList from "./components/FilterList";
import RestaurantList from "./components/RestaurantList";
import styled from "styled-components";

const FooterStyle = styled.footer`
  background: #f2600c;
  height: 40px;
  text-align: center;
  box-shadow: 125px 55px 45px 10px rgb(223, 233, 243);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

const MainSection = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;
const AppSection = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #495773;
  border-radius: 25px;
  z-index: 2;
`;
function App() {
  //filters is a state created by me. set filters is the option to modify the state (React.useState)
  const [filters, setFilters] = React.useState({});
  // with this option we xchange the conntend of the state based on the click or change of the filter

  function handleFilterChange(name, value) {
    const newFilters = { ...filters };
    newFilters[name] = value;
    setFilters(newFilters);
    console.log(`${name}:  ${value}`);
    setFilters(newFilters);
  }
  return (
    <AppSection>
      <Header />

      <MainSection>
        <FilterList
          selectedFilters={filters}
          onFilterChange={handleFilterChange}
        />
        <RestaurantList selectedFilters={filters} />
      </MainSection>
      <FooterStyle Eb> ></FooterStyle>
    </AppSection>
  );
}
// set a preporty call SelectedFilters, to push down the state to the restaurant
//list

export default App;
