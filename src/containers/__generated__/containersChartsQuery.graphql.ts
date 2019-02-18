/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type containersChartsQueryVariables = {};
export type containersChartsQueryResponse = {
    readonly chart: ({
        readonly chartName: string | null;
        readonly axisNameX: string | null;
        readonly axisNameY: string | null;
        readonly axis: ReadonlyArray<({
            readonly x: string | null;
            readonly y: string | null;
        }) | null> | null;
    }) | null;
};
export type containersChartsQuery = {
    readonly response: containersChartsQueryResponse;
    readonly variables: containersChartsQueryVariables;
};



/*
query containersChartsQuery {
  chart {
    chartName
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
  "name": "chartName",
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
    "name": "containersChartsQuery",
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
    "name": "containersChartsQuery",
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
    "name": "containersChartsQuery",
    "id": null,
    "text": "query containersChartsQuery {\n  chart {\n    chartName\n    axisNameX\n    axisNameY\n    axis {\n      x\n      y\n      id\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '22902b22663f347804f9a0101f61e36e';
export default node;
