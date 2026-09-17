import { fetchJson } from "../api.js";

const API_BASE = "https://thesimpsonsapi.com/api/characters";

export function buildCharactersUrl(page = 1) {
  const params = new URLSearchParams({
    page: String(page)
  });

  return `${API_BASE}?${params.toString()}`;
}

export async function getCharacterById(id) {
  const url = `${API_BASE}/${id}`;

  console.log("URL:", url);

  return await fetchJson(url);
}