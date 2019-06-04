import find from "./find";

test("find should return the first element in the array that satisfies the condition", () => {
  const numbers = [1, -3, -5];
  const result = find(numbers, number => number < 0);
  expect(result).toBe(-3);
});

test("find should return undefined if there is no element in the array that satisfies the condition", () => {
  const numbers = [1, 3, 5];
  const result = find(numbers, number => number < 0);
  expect(result).toBe(undefined);
});
