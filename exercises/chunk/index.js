// --- Directions
// Given an array and chunk size, divide the array into many sub arrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

/* function chunk(array, size) {
  const container = [];
  array.forEach((element) => {
    const last = container[container.length - 1];
    if (!last || last.length === size) {
      container.push([element]);
    } else {
      last.push(element);
    }
  });
  return container;
} */

function chunk(array, size) {
  const chunkWrapper = [];
  let idx = 0;

  while (idx < array.length) {
    chunkWrapper.push(array.slice(idx, idx + size));
    idx += size;
  }

  return chunkWrapper;
}

module.exports = chunk;
