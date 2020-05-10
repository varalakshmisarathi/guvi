const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const a=[];
inp.on("line", (data) => {
  a.push(data);
});
inp.on("close",()=>{
    var c=a[0];
    var b=a[1].split(" ")
    console.log((b.reverse()).join(" "))
})
