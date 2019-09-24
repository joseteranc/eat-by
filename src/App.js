import React from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import News from "./components/News";
import defaultTheme from "./theme/Default";
import fbTimeTheme from "./theme/FbTime";

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
  font-family: ${props => props.theme.font};
  background: ${props => props.theme.background};
  /* background: #495773; */
  font: Roboto;
  border-radius: 25px;
  z-index: 2;
`;

function App() {
  return (
    <ThemeProvider theme={fbTimeTheme}>
      <AppSection>
        <MainSection>
          <Router>
            <Route path="/" exact component={Home} />
            <Route path="/news" component={News} />
          </Router>
        </MainSection>
      </AppSection>
    </ThemeProvider>
  );
}

export default App;

//filters is a state created by me. set filters is the option to modify the state (React.useState)
//const [filters, setFilters] = React.useState({});
// with this option we xchange the conntend of the state based on the click or change of the filter

/*function handleFilterChange(name, value) {
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
  <Router>
  <Switch>
  <Route path="/" exact componet={Home} />
  <Route path="/news" componet={News} />
  <FilterList
  selectedFilters={filters}
  onFilterChange={handleFilterChange}
  />
  </Switch>
  </Router>
  <RestaurantList selectedFilters={filters} />
  </MainSection>
  
  <FooterStyle Eb> ></FooterStyle>
  </AppSection>
  );
}
// set a preporty call SelectedFilters, to push down the state to the restaurant
//list

export default App;*/
