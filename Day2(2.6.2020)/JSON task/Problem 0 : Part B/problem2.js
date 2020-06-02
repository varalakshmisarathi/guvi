//Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.
var object = {name: "RajiniKanth", age: 33, hasPets : false};
//creating an empty arr
var arr=[];
function printAllValues()
{
//iterating key in object
for(var i in object)
{
var key=i;
//push key in empty arr
arr.push(key);
}
//print key in object
console.log(arr);
}
printAllValues();