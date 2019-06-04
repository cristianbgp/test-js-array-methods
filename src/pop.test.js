import pop from "./pop";

test("pop should return the element that is removing", () => {
  const array = [1, 2, 3];
  expect(pop(array)).toBe(3);
});

test("pop should change the original array", () => {
  const array = [1, 2, 3];
  pop(array);
  expect(array).toEqual([1, 2]);
});
