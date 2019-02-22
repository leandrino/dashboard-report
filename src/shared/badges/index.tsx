import * as React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const baseBadge = (props: any) => css`
  background-color: ${props.color};
  color: ${props.fontColor};
  padding: 5px 10px;
  position: relative;
  z-index: 100;
`;

const fontBadge = css`
  font-family: roboto;
  font-size: 1rem;
  font-weight: 600;
`;

const Badge = styled.span`
  ${props => baseBadge(props)};
  ${fontBadge}
`;

export default Badge;
