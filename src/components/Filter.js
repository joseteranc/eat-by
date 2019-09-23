import React from "react";
import styled from "styled-components";

const FilterSection = styled.select`
  width: 30%;
  height: 25px;
  background: #80f6f6;
  flex-wrap: wrap;
  padding-top: 2px;
  border-style: Solid;
  border-color: ${props => (props.value ? "green" : "orange")};
  border-width: 5px;
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
