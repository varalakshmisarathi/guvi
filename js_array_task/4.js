//4 - drop
//Creates a slice of array with n elements dropped from the beginning.
function droparray(array,n)
{
    var result=array.slice(n);
    console.log(result);
}
droparray([1,2,3],2);
