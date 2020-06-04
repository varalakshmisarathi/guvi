//Return median of two sorted arrays of same size
  var arr1=[1,2,4,87,66];
  var arr2=[7,98,34,8,9];
   var median=function(arr1,arr2){
     if(arr1.length==arr2.length)
     {
      var res=arr1.concat(arr2)
      var first=res[res.length/2];
       var second=res[res.length/2-1];
       var median=(first+second)/2
       console.log(parseInt(median));
      }
}
median(arr1,arr2)
