import pop from "./pop";

test("pop should return the element that is removing", () => {
  const array = [1, 2, 3];
  expect(pop(array)).toBe(3);
});
