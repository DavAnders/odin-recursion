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

console.log(fibs(7));
