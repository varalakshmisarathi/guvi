//insert a new key called email and assign a value email1@gmail.com and email2@gmail.com respectively in both authorDetails object;
function insert(){
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
     //assigning value
     var library[0]= library[0].authordetails={email:"email1@gmail.com"}
     var library[1]= library[1].authordetails={email:"email2@gmail.com"}
    //console.log(library[0]);
    //console.log(library[1]);
    
}
insert();
    