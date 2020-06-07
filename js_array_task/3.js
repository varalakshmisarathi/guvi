//3 - flatconcat
//Creates a new array concatenating and flattens array a single level deep. with any additional arrays and/or values.
function flat(arr1) {
  return arr1.reduce((accumulator, item) => {
    return accumulator.concat(item);
  }, []);
}
let arr1 = [[1, 2], 3, [4, 5]];
console.log(flat(arr1));
