import { Sample } from "./mesurementSlice";

export function fetchPapers(): Promise<{ data: Sample[] }> {
  return fetch('api/papers.json', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(
    response => response.json()
  );
}
