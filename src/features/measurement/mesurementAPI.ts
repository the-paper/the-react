import { RectangleKind, Sample } from "./mesurementSlice";

export function fetchSamples(kind: RectangleKind): Promise<{ data: Sample[] }> {
  return fetch(`./api/${kind}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(
    response => response.json()
  );
}
