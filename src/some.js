function some(array, callback) {
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index])) {
      return true;
    }
  }
  return false;
}

export default some;
