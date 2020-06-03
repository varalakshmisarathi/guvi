//Problem3

/* Write a function called “convertObjectToList” which converts an object literal into an array of arrays.
Input (Object):
var object = {name: “ISRO”, age: 35, role: “Scientist”};
Output:
[[“name”, “ISRO”], [“age”, 35], [“role”, “Scientist”]] */

var obj = {name: 'ISRO', age: 35, role: 'Scientist'};
var arr=[];
var newArr=[];
function convertListToObject(obj) {
 //for loop to iterate object
	for(var i in obj){
  //push iterating key and value
		arr.push(i,obj[i]);
		newArr.push(arr);
		arr=[];
	}
	console.log(newArr);
}
convertListToObject(obj);