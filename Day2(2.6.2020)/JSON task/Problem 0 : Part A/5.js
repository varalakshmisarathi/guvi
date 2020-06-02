//Print the total weight of catFriends
function weight(){
var cat = {
 name: "Fluffy",
 activities: ["play", "eat cat food"],
 catFriends: [
 {
 name: "bar",
 activities: ["be grumpy", "eat bread omblet"],
 weight: 8,
 furcolor: "white"
 }, 
 {
 name: "foo",
 activities: ["sleep", "pre-sleep naps"],
 weight: 3
 }
 ]
}
//assign weight of catfriends weight
var c=cat.catFriends[0].weight;
var b=cat.catFriends[1].weight;
//adding weight of catfriends
console.log(c+b);
}
weight();