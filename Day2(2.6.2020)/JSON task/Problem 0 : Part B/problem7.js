
//problem 7
var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6};
function assertObjectsEqual(actual, expected, testName){
//check 2 objects are equal or not
  if(JSON.stringify(actual)==JSON.stringify(expected)){
  	console.log("Passed");
  }
  else{
  	console.log("FAILED [myTest] Expected "+ JSON.stringify(actual) +" but got "+JSON.stringify(expected));
  }
}
assertObjectsEqual(actual, expected, 'detects that two objects are equal');
