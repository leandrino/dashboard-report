/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type containersChartLineQueryVariables = {
    readonly chartType: string;
};
export type containersChartLineQueryResponse = {
    readonly chart: ({
        readonly nameProject: string | null;
        readonly chartName: string | null;
        readonly axis: ReadonlyArray<({
            readonly x: string | null;
            readonly y: string | null;
        }) | null> | null;
    }) | null;
};
export type containersChartLineQuery = {
    readonly response: containersChartLineQueryResponse;
    readonly variables: containersChartLineQueryVariables;
};



/*
query containersChartLineQuery(
  $chartType: String!
) {
  chart(chartType: $chartType) {
    nameProject
    chartName
    axis {
      x
      y
      id
    }
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "chartType",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "chartType",
    "variableName": "chartType",
    "type": "String!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "nameProject",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "chartName",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "x",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "y",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "containersChartLineQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "chart",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Chart",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "axis",
            "storageKey": null,
            "args": null,
            "concreteType": "Axis",
            "plural": true,
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "containersChartLineQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "chart",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Chart",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "axis",
            "storageKey": null,
            "args": null,
            "concreteType": "Axis",
            "plural": true,
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/)
            ]
          },
          (v6/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "containersChartLineQuery",
    "id": null,
    "text": "query containersChartLineQuery(\n  $chartType: String!\n) {\n  chart(chartType: $chartType) {\n    nameProject\n    chartName\n    axis {\n      x\n      y\n      id\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '78c664f33891f55f5ed61760b7e0645a';
export default node;
