//Return all the prime numbers in an array 
var number=10;
//anonymous function
var prime=function(number)
{
empty=[];
for(i=2;i<number;i++)
{
var count=0;
for(j=1;j<=i;j++)
{
if(i%j==0)
{
count=count+1;
}
}
if(count==2)
{
//push prime number into an arr
empty.push(i);
}
}
console.log(empty.join(" "));
}
prime(number);
