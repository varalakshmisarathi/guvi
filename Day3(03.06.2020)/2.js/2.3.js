//Sum of all numbers in an array
var array=[1,2,3,4,5,6,7];
var sumarr=function(s)
{
var sum=0;
for(i=0;i<array.length;i++)
{
sum=sum+array[i];
}
console.log(sum);
}
//function call
sumarr(array);
