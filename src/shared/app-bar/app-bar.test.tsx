import React from "react";
import ReactDOM from "react-dom";
import AppBar from "./index";

describe("AppBar component", () => {
  it("should be render correctly", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AppBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
