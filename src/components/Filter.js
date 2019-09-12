import React from "react";

function Filter(props) {
  return (
    <div className="filter">
      {props.filter.name}
      <select>
        {props.filter.options.map(SingleElement => {
          return <option>{SingleElement}</option>;
        })}
      </select>
    </div>
  );
}
export default Filter;
