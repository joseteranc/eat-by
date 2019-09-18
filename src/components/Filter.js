import React from "react";
import styled from "styled-components";

const FilterSection = styled.select`
  width: 30%;
  height: 25px;
  background: #495773;
  flex-wrap: wrap;
  padding-top: 8px;
  outline: orange;
`;

function Filter({ onChange, filter, selectedValue }) {
  return (
    <FilterSection
      onChange={event => {
        onChange(filter.name, event.target.value);
      }}
      value={selectedValue}
      //onChange
    >
      <option value="">{filter.name}</option>
      {filter.options.map(option => {
        return <option key={option}>{option} </option>;
      })}
    </FilterSection>
  );
}
export default Filter;
