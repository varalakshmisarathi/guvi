//Create a New Object in the library for a new Book called SQL.
function library2(){
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
     //library[2] object creation
      library[2]={title:"sql"}
    //console.log(library[2]);
    
}
library2();
    