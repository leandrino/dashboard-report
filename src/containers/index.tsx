import * as React from "react";
import { QueryRenderer } from "react-relay";
import { Global, css } from "@emotion/core";
import { VictoryLine, VictoryChart, VictoryAxis, VictoryTheme } from "victory";
import { globalCSS } from "../app.style";
import environment from "../relay/environment";
import Card from "../shared/card";
import CardTitle from "../shared/card/cart-title";
import CardContent from "../shared/card/card-content";
import Grid from "../shared/grid";
/* tslint:disable */
const graphql = require("babel-plugin-relay/macro");
/* tslint:enable*/
const Containers = () => (
  <>
    <Global styles={globalCSS} />
    <Grid>
      <QueryRenderer
        environment={environment}
        query={graphql`
          query containersChartCoverageQuery($chartType: String!) {
            chart(chartType: $chartType) {
              nameProject
              chartName
              axis {
                x
                y
              }
            }
          }
        `}
        variables={{ chartType: "coverage" }}
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
            <Card>
              <CardTitle>{props.chart.chartName}</CardTitle>
              <CardContent>
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
              </CardContent>
            </Card>
          );
        }}
      />
      <QueryRenderer
        environment={environment}
        query={graphql`
          query containersChartLineQuery($chartType: String!) {
            chart(chartType: $chartType) {
              nameProject
              chartName
              axis {
                x
                y
              }
            }
          }
        `}
        variables={{ chartType: "lines" }}
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
              y: parseInt(item.y, 10)
            };
          });
          return (
            <Card>
              <CardTitle>{props.chart.chartName}</CardTitle>
              <CardContent>
                <VictoryChart
                  width={600}
                  height={470}
                  theme={VictoryTheme.material}
                  padding={{ left: 70, bottom: 50, top: 50, right: 30 }}
                  domainPadding={20}
                >
                  <VictoryAxis tickFormat={x => x} />
                  <VictoryAxis
                    dependentAxis={true}
                    tickFormat={y => `${Math.round(y)}k`}
                  />
                  <VictoryLine data={dataChart} x="x" y="y" />
                </VictoryChart>
              </CardContent>
            </Card>
          );
        }}
      />
    </Grid>
  </>
);

export default Containers;
