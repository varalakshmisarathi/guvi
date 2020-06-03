//Parsing a list and transform the first and last elements of it:
var arr = ["GUVI", "I", "am", "a geek"];
function transformFirstAndLast(arr) {
    var newObject={};
    //get key as GUVI
    var key=arr[0];
    //get value as "a geek"
    var value=arr[arr.length-1];
    newObject[key]=value;
    return newObject;
  
}
//print the arr
console.log(transformFirstAndLast(arr))