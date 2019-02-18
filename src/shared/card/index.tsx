import * as React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const cardBase = () => css`
  background-color: #ffffff;
  border-radius: 2px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);
  &:hover {
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.75);
  }
`;

const Card = styled.section`
  ${cardBase};
  overflow: hidden;
`;

export default Card;
