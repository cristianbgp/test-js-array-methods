function every(array, callback) {
  for (let index = 0; index < array.length; index++) {
    if (!callback(array[index])) {
      return false;
    }
  }
  return true;
}

const numbers = [1, 2, 3];
console.log(numbers);
const evens = every(numbers, number => number % 2 === 0);
console.log(evens);

export default every;
