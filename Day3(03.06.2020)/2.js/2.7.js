//Remove duplicates from an array

var number=[1,2,2,5,7]
var duplicate=function(number){
    var result=[...new Set(number)];
    console.log(result);}
duplicate(number);
