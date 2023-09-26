function sum(arr, n) {
  // Only change code below this line
  let sums = 0;
  if (n <= 0) {
    return 0;
  } else {
    sums = sum(arr, n - 1) + arr[n - 1];
    return sums;
  }

  // Only change code above this line
}