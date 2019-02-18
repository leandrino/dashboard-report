import { css } from "@emotion/core";

export const globalCSS = css`
  @import url("https://fonts.googleapis.com/css?family=Montserrat|Roboto");
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    background-color: #eef1f5;
    font-family: "Roboto", sans-serif;
  }
`;
