//Write a function called “printAllValues” which returns an newArray of all the input object’s values.
var object = {name: "RajiniKanth", age: 33, hasPets : false};
//create empty arr
var arr=[];
function printAllValues()
{
//iterating key,value in object
for(var i in object)
{
var key=i;
var value=obj[i];
//push value into an empty arr 
arr.push(value);
}
//it print the value in object
console.log(arr);
}
printAllValues();