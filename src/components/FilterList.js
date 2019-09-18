import React from "react";
import Filter from "./Filter";
import { filters } from "../api/filterData";
import styled from "styled-components";

const FilterListsection = styled.section`
  background: whitesmoke;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
`;
function FilterList({ onFilterChange, selectedFilters }) {
  return (
    <FilterListsection>
      {filters.map(filter => {
        return (
          <Filter
            key={filter.name}
            filter={filter}
            onChange={onFilterChange}
            selectedValue={selectedFilters[filter.name]}
          />
        );
      })}
      ;
    </FilterListsection>
  );
}

export default FilterList;
/*function FilterList() {
  return (
    <section className="list">
      <Filter />
      <Filter />
      <Filter />
    </section>
  );
}*/
