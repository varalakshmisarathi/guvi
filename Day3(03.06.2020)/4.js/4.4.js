//Return all the prime numbers in an array
const Array = [1,2,3,4,5];
const myPrimeArray = Array.filter(num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
});
console.log(myPrimeArray);
