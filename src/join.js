function join(array, separator = ",") {
  let result = "";
  for (let index = 0; index < array.length - 1; index++) {
    const element = array[index];
    result += element;
    result += separator;
  }
  return result + array[array.length - 1];
}

const words = ["Hello", "World!", "Hey"];
const result = join(words, "-");
console.log(result);

export default join;
