//1 - Chunk
//Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
function chunk(array, length) {
  var result = []
  a = array.slice(0)
  while (input[0]) {
    result.push(input.splice(0, length))
  }
  return result
}
var input = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
console.log(chunk(input,2));
