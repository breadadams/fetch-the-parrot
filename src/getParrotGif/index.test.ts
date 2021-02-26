import { getParrotGif } from "./index";

let gifs: string[];
const parrotNames = ["angel parrot", "old timey parrot"];

beforeAll(async () => {
  const response = await Promise.all([
    getParrotGif(parrotNames[0]),
    getParrotGif(parrotNames[1]),
  ]);

  gifs = response;
});

test("is a function", () => expect(typeof getParrotGif).toBe("function"));

test("returns a string", async () => {
  expect(typeof gifs[0]).toBe("string");
});

test("prepends path correctly", async () => {
  const path = "custom-path/";
  const gif = await getParrotGif(parrotNames[0], path);

  expect(gif.indexOf(path)).toEqual(0);
});

test("returns gif fallback when no hd", async () => {
  expect(gifs[1].indexOf("hd/")).toEqual(-1);
});

test("returns null when name is undefined", async () => {
  // @ts-ignore
  const parrot = await getParrotGif();

  expect(parrot).toBeNull();
});
