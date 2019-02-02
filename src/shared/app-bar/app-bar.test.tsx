import React from "react";
import ReactDOM from "react-dom";
import AppBar from "./index";
import { render, waitForElement } from "react-testing-library";

describe("AppBar component", () => {
  it("should be render correctly", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AppBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should render a personalized title", async () => {
    const { getByText } = render(
      <AppBar title="A simple dashboard report tool" />
    );

    await waitForElement(() => getByText(/A simple dashboard report tool/i));
  });
});
