//Convert all the strings to title caps in a string array 
var animal=["cat","rat","dog"];
var arr=function(s)
{
var empty=[]
for(i=0;i<animal.length;i++)
{
var c=animal[i];
//converting into title caps
var d=(c[0].toUpperCase()+c.slice(1));
empty.push(d);
}
console.log(empty);

}
arr(animal);
