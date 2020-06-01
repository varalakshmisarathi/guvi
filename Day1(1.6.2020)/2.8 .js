//Print how many readers for javascript in console.
function readers(){
var library=[
    {
        title:"javascript",
        price:500,
        readers:[
            {
                name:"person 1",
                count:300
            },
            {
                name:"person 2",
                count:400
            }
            ],
            authordetails:{
                name:"raj",
                age:40
            },
    },
    {
        title:"node js",
        price:600,
        readers:[],
         authordetails:{
                name:"raj",
                age:40
            }
    }
    
    ]
     //assign count for counting the reader in javascript
      var count = 0;
 
      for (var i=0;i<library[0].readers.length;i++) 
     {
   
      count = count + 1;
  
     } 
     
console.log(count);
    //it print the count of reader in javascript
    
}
readers();
    