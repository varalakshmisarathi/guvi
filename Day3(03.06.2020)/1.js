//Write a function called “addFive”.
//Given a number, “addFive” returns 5 added to that number.
Input:
     addFive(5);
     addFive(0);
     addFive(-5);
var num = 10;
function addFive(num) { 
num=num+5;
   return num;
}
var result = addFive(num);
console.log(result);



//Write a function called “getOpposite”.
//Given a number, return its opposite
Input:
     getOpposite(5);
     getOpposite(0);
     getOpposite(-5);
     getOpposite(“5a”);
     getOpposite(5.5);
Output:
     -5
      0
      5
      -1
     -1
var num = 5;
function getOpposite(num) {
 if(typeof(num)=="number"){
 return 5 * -1;
}
else{
return -1;
}}
var result = getOpposite(num)
console.log(result);



//Fill in your code that takes an number minutes and converts it to seconds.
//Examples
    toSeconds(5) ➞ 300
    toSeconds(3) ➞ 180
    toSeconds(2) ➞ 120
var min = 5;
function toSeconds(min) {
return min*60
}
var secs = toSeconds(min)
console.log(secs);




//Create a function that takes a string and returns it as an integer.
//Examples
     toInteger(“6”) ➞ 6
     toInteger(“1000”) ➞ 1000
     toInteger(“12”) ➞ 12
var mystr = "5";
function toInteger(mystr) {
return parseInt(mystr)
}
var myint = toInteger(mystr)
console.log(mystr);



//Create a function that takes a number as an argument, increments the number by +1 and returns the result.
//Examples
    nextNumber(0) ➞ 1
    nextNumber(9) ➞ 10
    nextNumber(-3) ➞ -2
var myint = 0;
function nextNumber(myint) {
return myint++;
}
var myNextint = nextNumber(myint)
console.log(myNextint);




//Create a function that takes an array and returns the first element.
//Examples
   getFirstElement([1, 2, 3]) ➞ 1
   getFirstElement([80, 5, 100]) ➞ 80
   getFirstElement([-500, 0, 50]) ➞ -500
var arr = [1, 2, 3];
function getFirstElement(arr) {
return arr[0]
}
