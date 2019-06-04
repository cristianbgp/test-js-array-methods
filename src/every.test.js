import every from "./every";

test("every should return true if all the elements from the array satifies the condition", () => {
  const numbers = [0, 2, 6];
  const evens = every(numbers, number => number % 2 === 0);
  expect(evens).toBe(true);
});
