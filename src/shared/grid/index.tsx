import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

export const baseGrid = (props: any) => css`
  display: grid;
  grid-gap: 20px;
`;

export const columnsGrid = css`
  grid-template-columns: repeat(2, 1fr);
`;

const Grid = styled.section`
  ${baseGrid};
  ${columnsGrid};
  padding: 20px;
  width: 100%;
`;

export default Grid;
