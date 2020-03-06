#Print odd numbers in an array
var a=[1,2,3,5,7,79,7,2,6,9,4];
(function()
{
  for(var i=0;i<a.length;i++)
  {
    if(a[i]%2!=0){
      console.log(a[i]);
  }
 }
 }}();
 var anon=function(b)
 {
  for(var i=0;i<b.length;i++)
  {
    if(a[i]%2!=0)
    {
      console.log(b[i]);
    }
  }
  }
      anon(a);
