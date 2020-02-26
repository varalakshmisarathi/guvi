#convert country name to capital letter using map function
const cname=a.map((item)=>{
  return(item.name).toUpperCase()})
console.log(cname)

#filter the datas of country with capital with 
s or less letters
const cplen=a.filter((item)=>{
   return(item.capital).length<=5})
console.log(cplen)

#find a data of a country by using find method
const finditem=dummy.find((item)=>{
   return item.name==='India'})
console.log(finditem)

#sum of all nos. in an array using reduce method 
var a=[1,2,3,4,5,6,7,8,9,10]
var sum=a.reduce(function(accumulator,currentvalue,index){
   return accumulator+currentvalue;
});
console.log(sum) 

#sum of odd nos. in qn array using reduce method
var a=[1,2,3,4,5,6,7,8,9,10]
var sum=a.reduce(function(accumulator,currentvalue,index){
if(currentvalue%2!=0){
 return accumulator+currentvalue;}
 return accumulator
 });
 console.log(sum)
