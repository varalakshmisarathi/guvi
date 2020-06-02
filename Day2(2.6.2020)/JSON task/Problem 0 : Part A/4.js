//Print the catFriends names.
function name(){
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
//print the name of catFriends
console.log(cat.catFriends[0].name,cat.catFriends[1].name);
}
name();