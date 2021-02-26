import { getParrotsYAML } from "./index";

test("is a function", () => expect(typeof getParrotsYAML).toBe("function"));

test("returns a non-empty string", async () => {
  const yaml = await getParrotsYAML();

  expect(typeof yaml === "string" && yaml.length > 0).toBeTruthy();
});

test("returns an empty string when fetch fails", async () => {
  const yaml = await getParrotsYAML("");

  expect(yaml).toBe("");
});

test("returns an empty string when fetch fails 2", async () => {
  const yaml = await getParrotsYAML(
    "//raw.githubusercontent.com/jmhobbs/cultofthepartyparrot.com/master/parrots"
  );

  expect(yaml).toBe("");
});
