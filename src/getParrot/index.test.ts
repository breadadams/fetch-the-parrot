import { ParrotRecords } from "../types";
import { getParrot } from "./index";

let parrots: ParrotRecords;
const parrotNames = ["angel parrot", "old timey parrot"];

beforeAll(async () => {
  const response = await Promise.all([
    getParrot(parrotNames[0]),
    getParrot(parrotNames[1]),
  ]);

  parrots = response;
});

test("is a function", () => expect(typeof getParrot).toBe("function"));

test("returns an object", () => {
  expect(typeof parrots[0]).toBe("object");
});

test("response matches the query", async () => {
  expect(parrots[0].name.toLowerCase()).toBe(parrotNames[0]);
});

test("response has a gif or hd property", async () => {
  expect(parrots[0]).toHaveProperty("hd");
  expect(parrots[1]).toHaveProperty("gif");
});

test("returns null when name is invalid", async () => {
  const parrot = await getParrot("an invalid parrot");

  expect(parrot).toBeNull();
});

test("returns null when name is undefined", async () => {
  const parrot = await getParrot();

  expect(parrot).toBeNull();
});
