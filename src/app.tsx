import React, { Component } from "react";
import { Global, css } from "@emotion/core";
import AppBar from "./shared/app-bar";
import { globalCSS } from "./app.style";

class App extends Component {
  public render() {
    return (
      <>
        <Global styles={globalCSS} />
        <AppBar title="Dashboard report" />
      </>
    );
  }
}

export default App;
