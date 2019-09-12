import React from "react";
import Filter from "./Filter";
import { filters } from "../api/filterData";

function FilterList() {
  return (
    <section className="filterlist">
      {filters.map(filter => {
        return <Filter key={filter.name} filter={filter} />;
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
