//f the given number is prime
function prime(a,check)
{
    return check(a)
}
function checkCondition(a)
{
    var temp=0
    if(a>1)
     {
     for(var i=2;i<=a;i++)
    {
    if(a%i==0   &&    a!=i)
    { 
     temp=1 
     }
     }
 if(temp==0)
 { 
 return "prime";       
 }
 else{
     return "not prime"
 }}}
var res=prime(3,checkCondition)
console.log(res);
