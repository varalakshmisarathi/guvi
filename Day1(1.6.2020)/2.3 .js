//Insert a new reader in the readers array for Nodejs.
function reader(){
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
     //inserting a reader in node js
     library[1].readers=[{name:"lakshmi"},{age:22}]
    //console.log(library[1].readers);
    
}
reader();
    