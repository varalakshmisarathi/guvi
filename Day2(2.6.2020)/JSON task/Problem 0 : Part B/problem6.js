//Write a function called “transformGeekData” that transforms some set of data from one format to another.
var arr= [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];
function transformEmployeeData(arr) {
 var array = [];
 var empty={};
 //iterate values
 for(var i in arr){
 	var value=arr[i];
   for(var j in value){
   	empty[value[j][0]]=value[j][1];
   }
   List.push(empty);
   empty={};
 }
 
 return array;
}
transformEmployeeData(arr);
