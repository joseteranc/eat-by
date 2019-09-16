import React from "react";
import Filter from "./Filter";
import { filters } from "../api/filterData";

function FilterList(props) {
  return (
    <section>
      {filters.map(filter => {
        return (
          <Filter
            key={filter.name}
            filter={filter}
            onChange={props.onFilterChange}
          />
        );
      })}
      ;
    </section>
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
