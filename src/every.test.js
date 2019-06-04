import every from "./every";

test("every should return true if all the elements from the array satisfies the condition", () => {
  const numbers = [0, 2, 6];
  const evens = every(numbers, number => number % 2 === 0);
  expect(evens).toBe(true);
});

test("every should return false if one element from the array doesn't satisfy the condition", () => {
  const numbers = [0, 2, 11];
  const evens = every(numbers, number => number % 2 === 0);
  expect(evens).toBe(false);
});
