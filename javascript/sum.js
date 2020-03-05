#sum of 2 number
const readline = require('readline');
const inp = readline.createInterface({
input: process.stdin
});
const a = [];
inp.on("line",(data) => {
a.push(data);
});
inp.on("close",() => {
  m=a[0];
  n=a[1];
  s=parseInt(m)+parseInt(n)
  console.log(parseInt(s));
});
