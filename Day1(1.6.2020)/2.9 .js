//Print the count value of Person 2 in console.
function person2(){
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
     //assign the count value of Person 2 
     var count=library[0].readers[1].count;
    console.log(count);
    //it print the count value as 400
    
}
person2();
    