#smallest number
const readline = require('readline');
const inp = readline.createInterface({input: process.stdin});
inp.on("line", (data) => {
 var a=[];
  a=data.split(" ");
  var m=a[0];
  var n=a[1];
  if(parseInt(m)<parseInt(n)){
    console.log(parseInt(m));}
  else{
    console.log(parseInt(n));}
});
  
  
  
  
  
