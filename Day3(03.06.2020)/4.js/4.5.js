//Return all the palindromes in an array
var array=["mam","madam"];
var palindrome=array.filter(n=> { var s="";
	for( var i=n.length-1;i>=0;i--){
		s+=n[i];
	}
	if(s==n){
		return n
	}
}})
console.log(palindrome);
