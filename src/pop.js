function pop(array) {
  let lastElement = array[array.length - 1];
  --array.length;
  return lastElement;
}

const numbers = [1, 2, 3];
console.log("before function", numbers);
const total = pop(numbers);
console.log("after function", numbers);
console.log("return of the function", total);

export default pop;
