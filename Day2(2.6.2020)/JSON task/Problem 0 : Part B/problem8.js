// I have a mock data of security Questions and Answers. You function should take the object and a pair of strings and should return if the quest is present and if its valid answer
 
 var securityQuestions = [
 {
 question: "What was your first pet’s name?",
 expectedAnswer: "FlufferNutter"
 },
 {
 question: "What was the model year of your first car?",
 expectedAnswer: "1985"
 },
 {
 question: "What city were you born in?",
 expectedAnswer: "NYC"
 }
]
function chksecurityQuestions(securityQuestions,ques,ans) {
    for(var i=0;i<securityQuestions.length;i++){
//check whether question,answer equal to ques,ans
        if(securityQuestions[i].question==ques && securityQuestions[i].expectedAnswer==ans)
        return true;
        else 
        return false;
    }

}