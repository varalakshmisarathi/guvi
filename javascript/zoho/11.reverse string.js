const readline=require("readline");
const inp=readline.createInterface({input:process.stdin});
const n=[]
inp.on("line",(data)=>{
    var m=data.split(" ");
    var d=m.reverse()
    console.log(d.join(" "));
});
