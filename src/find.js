function find(array, callback) {
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index, array)) {
      return array[index];
    }
  }
}

const numbers = [1, -3, -5];
console.log(numbers);
const result = find(numbers, number => number < 0);
console.log(result);

export default find;
