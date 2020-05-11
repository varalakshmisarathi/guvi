const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
var user=[];
inp.on("line",(data)=>{
  user.push(data)
});
inp.on("close",()=>{
    var res=[];
  var b=parseInt(user[0]);
  var arr=user[1].split(" ");
 var c=arr.sort(function(a,b){
     return a-b;
 });
 var d=[]
  for(var j=c.length-1;j>=0;j--)
  {
      d.push(c[j]);
  }
  var h=parseInt(b/2);
  if(b%2!=0)
 {
     h=h+1;
 } 
 for(var i=0;i<h;i++)
 {
     res.push(parseInt(d[i]),parseInt(c[i]));
   
 }
 var u= [...new Set(res)];
 console.log(u.join(" "));
});
