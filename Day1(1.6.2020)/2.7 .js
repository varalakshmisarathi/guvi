//Print the age of Nodejs Author in console.
function age(){
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
     //assign age of node js
      var age=library[1].authordetails.age;
      console.log(age); 
    //it print the age as 40
    
}
age();
    