import * as React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const CardTitle = styled.h1`
  background-color: #3867d6;
  color: #f5f5f5;
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  padding: 30px 30px 0 30px;
  position: relative;
  text-transform: uppercase;
  width: 100%;
  z-index: 100;
  &:before {
    background-color: #3867d6;
    content: "";
    height: 130px;
    left: 0;
    transform: skewY(-5deg);
    position: absolute;
    width: 100%;
    bottom: -40px;
    z-index: -1;
  }
`;

export default CardTitle;
