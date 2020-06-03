//Print odd numbers in an array
//create empty array
var array=[];
var odd=function(odd)
{
//iteration
    for(var i=0;i<10;i++)
    {
        if(i%2!=0)
        {
        //push odd number in array
            array.push(i);
        }
    }
    //print the odd number contained in array
    console.log(array)
}
odd(9);
