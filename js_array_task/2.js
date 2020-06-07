//2 - compact(array)
//Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
var array = [ 1, 2, 3, undefined, 0, null ];
array.forEach( function(val, i, arr){
    if(val===undefined || val===null || val===0)
    {
        count=count+1;    
    }
    else
    {
        result.push(val);
    }
});
undefined
console.log(result);
