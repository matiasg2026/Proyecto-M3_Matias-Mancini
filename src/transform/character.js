function getOccupation(rawCharacter) {
  return rawCharacter?.occupation ?? "Sin ocupación";
}

function getPhrases(rawCharacter) {
  return rawCharacter?.phrases?.[0] ?? "Sin frase disponible";
}

export function toCharacterProfile(rawCharacter) {
  return {
    id: rawCharacter?.id ?? 0,
    name: rawCharacter?.name ?? "Desconocido",
    image: rawCharacter?.portrait_path
      ? `https://cdn.thesimpsonsapi.com/500${rawCharacter.portrait_path}`
      : "",
    status: rawCharacter?.status ?? "Estado desconocido",
    species: "Simpson",
    originName: getOccupation(rawCharacter),
    locationName: getPhrases(rawCharacter),
  };
}