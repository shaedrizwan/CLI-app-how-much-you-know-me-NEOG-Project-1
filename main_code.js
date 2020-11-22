var readLineSync = require("readline-sync");
var chalk = require("chalk");
function play(q) {
  var totalQuestions = q.length;
  var score = 0;
  for(i=0;i<totalQuestions;i++) {
    var ans = readLineSync.question(q[i].question);
  if(ans === q[i].answer) {
    console.log(chalk.green.bold("Right!"));
    score++;
  }
  else {
    console.log(chalk.red.bold("Wrong"));
    score--;
  }
  console.log("\n *********** \n\n\n")
  }
  console.log("Your final score is: "+score);
}

qst =[{
  question: "Where was Rizwan born? \n Kerala or Karnataka \n",
  answer: "Kerala"
}, {
  question: "What did he Study?\n Engineering or Medical \n ",
  answer: "Engineering"
}]

console.log("\n Welcome! Let's see how much you know about Rizwan \n")
play(qst);