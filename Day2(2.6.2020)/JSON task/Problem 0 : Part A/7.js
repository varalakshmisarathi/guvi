//Add 2 more activities to bar & foo cats
function activities(){
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
//adding activities to catfriends
cat.catFriends[0].activities[2]="sleep";
cat.catFriends[0].activities[3]="dance";
cat.catFriends[1].activities[2]="sound";
cat.catFriends[1].activities[3]="play";
//printing catdetails
console.log(cat);
}
activities();