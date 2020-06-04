//Rotate an array by k times and return the rotated array
var number=[1,2,3,4,5,6,7,8,9],
var m=2;
var rotatedArray=function(number,k){
    for(var i=0;i<m;i++)
    {var temp=num.shift();
        number.push(temp)}
    console.log(number);
}
rotatedArray(number,m);
