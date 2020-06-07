//6 - dropWhile
//Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).
function dropRightWhile(newarray){
	var array=newarray.filter(function(value,index,array){
		return value%2!==0;
	});
	return array
}
console.log(dropRightWhile([1,2,3,5]));
