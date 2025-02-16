// Lesson: Writing your first tests
export function max(a, b) {
  return (a > b) ? a : b;
}

export function calculateAverage(arr) {

  if (arr.length === 0) return NaN;
  if (arr.length === 1) return arr[0];
  if (arr.length === 2) return (arr[0] + arr[1]) / 2;
  let sum = 0;
  arr.forEach(element => {
    sum += element;
  });
  return sum / arr.length;
}

// Exercise
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return n.toString();
}


export function calculateFactorial(n) {

  if (isNaN(n)) return NaN;

  if (n < 0) return undefined;

  return (n === 0 || n === 1) ? 1 : (n * calculateFactorial(n - 1));
}