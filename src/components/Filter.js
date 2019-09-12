import React from "react";

function Filter(props) {
  return (
    <div className="filter">
      <select>
        <option>{props.filter.name}</option>
      </select>
    </div>
  );
}
export default Filter;
