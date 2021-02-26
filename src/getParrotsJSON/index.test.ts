import { getParrotsJSON } from "./index";

test("is a function", () => expect(typeof getParrotsJSON).toBe("function"));

test("returns an array", async () => {
  const parrots = await getParrotsJSON();

  expect(Array.isArray(parrots)).toBe(true);
});

test("returns an empty array when fetch fails", async () => {
  const parrots = await getParrotsJSON("");

  expect(Array.isArray(parrots) && parrots.length === 0).toBe(true);
});
