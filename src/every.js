function every(array, callback) {
  for (let index = 0; index < array.length; index++) {
    if (!callback(array[index])) {
      return false;
    }
  }
  return true;
}

export default every;
