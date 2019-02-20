import { Environment, Network, RecordSource, Store } from "relay-runtime";
import { BASE_URL } from "../constants";

function fetchQuery(operation: any, variables: any) {
  return fetch(`${BASE_URL}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => {
    return response.json();
  });
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
});

export default environment;
