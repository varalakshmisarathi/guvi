//if the give number is even 
function myeven(num,even)
{
    if(num%2==0)
    {
        even()
     }
}
function myeven1()
{
    console.log("even");
}
myfun(10,myeven);
