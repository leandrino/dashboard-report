import React, { Component } from "react";
import { QueryRenderer } from "react-relay";
const graphql = require("babel-plugin-relay/macro");
import { Global, css } from "@emotion/core";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";
import { globalCSS } from "./app.style";
import AppBar from "./shared/app-bar";

const environment = require("./relay/environment");

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];

class App extends Component {
  public render() {
    return (
      <>
        <QueryRenderer
          environment={environment}
          query={graphql`
            query ChartQuery {
              name_project
              axisNameX
              axisNameY
              axis {
                x
                y
              }
            }
          `}
          variables={{}}
          render={({ error, props }) => {
            if (error) {
              return <div>Error!</div>;
            }
            if (!error) {
              return <div>Loading</div>;
            }
            return <div>{props}</div>;
          }}
        />
        <Global styles={globalCSS} />
        <AppBar>Any render</AppBar>
        <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
          <VictoryAxis
            tickValues={[1, 2, 3, 4]}
            tickFormat={["Quater 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
          />
          <VictoryAxis
            dependentAxis={true}
            tickFormat={x => `R$${x / 1000}k`}
          />
          <VictoryBar data={data} x="quarter" y="earnings" />
        </VictoryChart>
      </>
    );
  }
}

export default App;
