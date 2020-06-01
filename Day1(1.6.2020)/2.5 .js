//Find the datatype of author age in Nodejs Object.
function datatype(){
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
     //assign age 
      var age=library[1].authordetails.age;
      console.log(typeof(age)); 
    //it returns the datatype of age as an number
    
}
datatype();
    