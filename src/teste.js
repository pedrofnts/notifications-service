function longestIncreasingSequence(arr) {
  let n = arr.length;
  let longestSequence = 1;

  for (let i = 0; i < n; i++) {
    let currentLength = 1;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] > arr[j - 1]) {
        currentLength++;
      } else {
        break;
      }
    }
    longestSequence = Math.max(longestSequence, currentLength);
  }
  return longestSequence;
}

let arr = [4, 3, 5, 1, 6];
console.log(longestIncreasingSequence(arr));
