import React, { Component } from "react";
import { QueryRenderer } from "react-relay";
const graphql = require("babel-plugin-relay/macro");
import { Global, css } from "@emotion/core";
import { VictoryLine, VictoryChart, VictoryAxis, VictoryTheme } from "victory";
import { globalCSS } from "./app.style";
import AppBar from "./shared/app-bar";
import * as moment from "moment";
import environment from "./relay/environment";

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
        <Global styles={globalCSS} />
        <AppBar>Any render</AppBar>
        <QueryRenderer
          environment={environment}
          query={graphql`
            query appChartQuery {
              chart {
                name_project
                axisNameX
                axisNameY
                axis {
                  x
                  y
                }
              }
            }
          `}
          variables={{}}
          render={({ error, props }) => {
            if (error) {
              return <div>Error!</div>;
            }
            if (!props) {
              return <div> loading ... </div>;
            }
            const dataChart = props.chart.axis.map((item: any) => {
              return {
                x: item.x,
                y: parseFloat(item.y)
              };
            });
            return (
              <VictoryChart
                width={600}
                height={470}
                theme={VictoryTheme.material}
                domainPadding={20}
              >
                <VictoryAxis tickFormat={x => x} />
                <VictoryAxis dependentAxis={true} tickFormat={y => y} />
                <VictoryLine data={dataChart} x="x" y="y" />
              </VictoryChart>
            );
          }}
        />
      </>
    );
  }
}

export default App;
