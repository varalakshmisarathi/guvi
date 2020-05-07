//check if any one elemnt in array is give 1,when its divided by 3
const fun1 = (array, callback) => {
  for(var i=0;i<array.length;i++){
    if(callback(array[i]))
      {
        return true
      }
  }
  return false
}
const somefun =(value)=>value%3==1
fun1([2,3,5,8,12], somefun) 

//output
//true
