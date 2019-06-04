function some(array, callback) {
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index])) {
      return true;
    }
  }
  return false;
}

const numbers = [1, 2, 3];
console.log(numbers);
const evens = some(numbers, number => number % 2 === 0);
console.log(evens);

export default some;
