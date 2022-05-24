import fetch from "node-fetch";

export interface ChuckNorrisJoke {
  categories: string[];
  icon_url: string;
  id: string;
  url: string;
  value: string;
}

export async function getChuckNorrisJoke(): Promise<ChuckNorrisJoke> {
  const response = await fetch(`https://api.chucknorris.io/jokes/random`);
  const json = await response.json();
  return json as ChuckNorrisJoke;
}
