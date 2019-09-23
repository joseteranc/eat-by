import React from "react";
import styled from "styled-components";

const Title = styled.header`
  background: hsl(52, 96%, 69%);
  height: 30px;
  width: 100%;
  padding: 0.2 px;
  margin: 1;
  text-align: space-around;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  align-items: center;
  justify-content: center;
`;
const HeadInfo = styled.h1`
  margin: 0;
  color: hsl(52, 12%, 18%);
  font-weight: normal;
  font-family: "Ultra", sans-serif;
  font-size: 26px;
  line-height: 32px;
  text-transform: uppercase;
  text-shadow: 0 2px white, 0 3px #777;
`;
function Header() {
  return (
    <Title>
      <HeadInfo>
        <b>Eat</b>by.
      </HeadInfo>
    </Title>
  );
}
export default Header;
