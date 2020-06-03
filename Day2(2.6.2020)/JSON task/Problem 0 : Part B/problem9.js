//Write a function to return the list of characters below 20 age in given json object

 //function to return the character below 20 age
function studentsage(arr)
{
  //craete empty list to store characters below 20 age
	var empty=[];
  //for loop for iterate 
	for(var i in arr){
		if(arr[i]["age"]<20){
			empty.push(arr[i]["name"]);
		}
	}
	return empty
}
console.log(studentage(students));
