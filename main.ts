import inquirer from "inquirer"

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
console.log("Congratulations! your guess number is right! ");
}
else if( number-answer.guessnumber==1 || answer.guessnumber-number==1){
console.log("Nice try, you were too close.");

}
else{
    console.log("wrong guess, try again!")
}
if(answer.guessnumber===number){
condition=false
}
}