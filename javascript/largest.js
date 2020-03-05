#largest number
const readline = require('readline');
const inp = readline.createInterface({
input: process.stdin
});
const a= [];
inp.on("line",(data) => {
a.push(data);
});
inp.on("close",() => {
  var m=a[0];
  var s=a[1];
  var t=a[2];
  if(parseInt(m)>parseInt(s) && parseInt(m)>parseInt(t))
    console.log(parseInt(m));
  if(parseInt(s)>parseInt(m) && parseInt(s)>parseInt(t))
    console.log(parseInt(s));
  else
    console.log(parseInt(t));
});
  


  
