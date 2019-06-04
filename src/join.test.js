import join from "./join";

test("join should return a string with all the elements from the array", () => {
  const words = ["Hello", "World!", "Hey"];
  const result = join(words, "-");
  expect(result).toBe("Hello-World!-Hey");
});

test("join should return a string with all the elements from the array, with the default separator ','", () => {
  const words = ["Hello", "World!", "Hey"];
  const result = join(words);
  expect(result).toBe("Hello,World!,Hey");
});
