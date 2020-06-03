// Write a function “fromListToObject” which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.
var arr = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
function fromListToObject(arr) {
 var empty = {};
 for(var i=0; i<arr.length;i++){
 	var value=arr[i];
    empty[value[0]]=value[1];
 }
 
 return empty;
}
//call the function
fromListToObject(arr);
