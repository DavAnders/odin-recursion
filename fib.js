// take number, return an array containing that many numbers from the fibonacci sequence

function fibs(num) {
  if (num === 0) {
    return [];
  }
  if (num === 1) {
    return [0];
  }
  if (num === 2) {
    return [0, 1];
  }
  let arr = [0, 1];
  for (let i = 3; i <= num; i++) {
    arr.push(arr[i - 2] + arr[i - 3]);
  }
  return arr;
}

function fibsRec(num) {
  if (num === 0) {
    return [];
  }
  if (num === 1) {
    return [0];
  }
  if (num === 2) {
    return [0, 1];
  }

  let arr = fibs(num - 1);
  let nextFib = arr[num - 2] + arr[num - 3];
  arr.push(nextFib);
  return arr;
}

function merge(left, right) {
  let arr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return [...arr, ...left, ...right];
}

function mergeSort(arr) {
  const half = arr.length / 2;
  if (arr.length < 2) {
    return arr;
  }
  const left = arr.splice(0, half);
  return merge(mergeSort(left), mergeSort(arr));
}

console.log(fibs(7));
let arr = [5, 39, 23, 1, 33, 12, 11, 11];

console.log(mergeSort(arr));
