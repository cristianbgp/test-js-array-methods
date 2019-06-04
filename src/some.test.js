import some from "./some";

test("some should return true if one of the elements from the array satifies the condition ", () => {
  const numbers = [1, 2, 3];
  const evens = some(numbers, number => number % 2 === 0);
  expect(evens).toBe(true);
});
