// function d6() {
//     var roll = Math.ceil(Math.random()*10);
//     if(roll <= 6) {
//     return roll;
//     }
//     if(roll >6) {
//         return "greater than 6";
//     }
// }

function d6() {
    var roll = Math.ceil(Math.random()*6);
    if(roll <= 6) {
    return roll;
    }
}

var playerRoll = d6();
// console.log("The player rolled: " + playerRoll);


var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

var answer = document.querySelector(".answer")

function consultTheOracle() {
    var arr = lifesAnswers
    var oracleAnswer = arr[Math.ceil(Math.random()*arr.length-1)];
    answer.innerText = oracleAnswer;
    console.log(oracleAnswer)
}
