import inquirer from "inquirer"
import chalk from "chalk"

let condition= true;
while(condition){
    const number= Math.floor (Math.random()*10 +1)
    let answer= await inquirer.prompt(
    {message: "Guess the number between 1-10", 
    type: "number", 
    name: "guessnumber"
}
)

console.log("The generated number is: "+number);

if(answer.guessnumber === number){
console.log(chalk.bold.green("Congratulations! your guess number is right! "));
}
else if( number-answer.guessnumber==1 || answer.guessnumber-number==1){
console.log(chalk.bold.blue("Nice try, you were too close."));

}
else{
    console.log(chalk.bold.red("wrong guess, try again!"))
}
if(answer.guessnumber===number){
condition=false
}
}