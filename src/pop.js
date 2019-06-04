function pop(array) {
  let lastElement = array[array.length - 1];
  --array.length;
  return lastElement;
}

export default pop;
