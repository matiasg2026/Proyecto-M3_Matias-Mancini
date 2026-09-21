import { describe, it, expect, vi, beforeEach } from "vitest";
import { fetchJson } from "../src/api.js";

global.fetch = vi.fn();

describe("fetchJson", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it("debería obtener datos correctamente", async () => {
    const mockData = {
      message: "Hola Homero",
    };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const result = await fetchJson("/api/chat");

    expect(fetch).toHaveBeenCalledWith("/api/chat");
    expect(result).toEqual(mockData);
  });
});

it("debería lanzar un error si la respuesta HTTP falla", async () => {
  fetch.mockResolvedValueOnce({
    ok: false,
    status: 500,
  });

  await expect(fetchJson("/api/chat")).rejects.toThrow("HTTP 500");
});

it("debería manejar un error de red", async () => {
  fetch.mockRejectedValueOnce(new Error("Network error"));

  await expect(fetchJson("/api/chat")).rejects.toThrow("Network error");
});

it("debería devolver correctamente una respuesta vacía", async () => {
  fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => null,
  });

  const result = await fetchJson("/api/chat");

  expect(result).toBeNull();
});