//Fluffy name is spelled wrongly. Update it to Fluffyy
function update(){
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
//update cat name to Fluffy
cat.name="Fluffy";
//prints the cat name
console.log(cat.name);
}
update();