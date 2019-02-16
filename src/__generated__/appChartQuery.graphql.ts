/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type appChartQueryVariables = {};
export type appChartQueryResponse = {
    readonly chart: ({
        readonly name_project: string | null;
        readonly axisNameX: string | null;
        readonly axisNameY: string | null;
        readonly axis: ReadonlyArray<({
            readonly x: string | null;
            readonly y: string | null;
        }) | null> | null;
    }) | null;
};
export type appChartQuery = {
    readonly response: appChartQueryResponse;
    readonly variables: appChartQueryVariables;
};



/*
query appChartQuery {
  chart {
    name_project
    axisNameX
    axisNameY
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
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name_project",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "axisNameX",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "axisNameY",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "x",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "y",
  "args": null,
  "storageKey": null
},
v5 = {
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
    "name": "appChartQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "chart",
        "storageKey": null,
        "args": null,
        "concreteType": "Chart",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "axis",
            "storageKey": null,
            "args": null,
            "concreteType": "Axis",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "appChartQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "chart",
        "storageKey": null,
        "args": null,
        "concreteType": "Chart",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "axis",
            "storageKey": null,
            "args": null,
            "concreteType": "Axis",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/)
            ]
          },
          (v5/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "appChartQuery",
    "id": null,
    "text": "query appChartQuery {\n  chart {\n    name_project\n    axisNameX\n    axisNameY\n    axis {\n      x\n      y\n      id\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '2816f5f8d98843efb1d51b4cbad20c3b';
export default node;
