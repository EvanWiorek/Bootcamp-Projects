var displayDiv = document.querySelector("#display");
var num1 = "";
var num2 = "";

function press(num) {
    var numString = num1.toString()
    if (numString.length < 9) {
        num1 += num;
        var numString = Array.from(String(num1));
        if (numString.includes(".")) {
            display.innerHTML = num1;
        }
        else display.innerHTML = num1 + ".";
    }
}

function operatorSelect(key) {
    operatorKey = key;
    num2 = num1;
    num1 = "";
}

function clr() {
    num1 = "";
    num2 = "";
    operatorKey = "";
    display.innerHTML = "0.";
}


//original way
// function calculate() {
//     var a = num2;
//     var b = num1;
//     var res = 0;
//     switch (op) {
//         case "+":
//             res = a + b;
//             break;
//         case "-":
//             res = a - b;
//             break;
//         case "*":
//             res = a * b;
//             break;
//         case "/":
//             res = a / b;
//             break;
//     }
//     num1 = res;
//     op = "";
//     display.innerHTML = res + ".";
// }


function calculate() {
    var a = parseFloat(num2); //parseInt turns strings of just numbers into whole numbers; parseFloat turns them into numbers with decimals!
    var b = parseFloat(num1);
    var res = 0;
    if (operatorKey == "+") {
        res = a + b;
    }
    else if (operatorKey == "-") {
        res = a - b;
    }
    else if (operatorKey == "*") {
        res = a * b;
    }
    else if (operatorKey == "/") {
        res = a / b;
    }
    num1 = res;
    operatorKey = "";
    var resString = Array.from(String(res));
    var numLeftDecimal = Math.trunc(res);
    var spaceLeft = Array.from(String(numLeftDecimal)).length;
    if (resString.includes(".")==false) {
        if (spaceLeft > 9)  {
            display.innerHTML = "Too long!"
        }
        else display.innerHTML = res + ".";
    }
    var truncNum = Number(res.toFixed((9-spaceLeft)));
    console.log(resString);
    console.log(spaceLeft);
    if (resString.includes(".")) {
        if (resString.length > 9) {
            display.innerHTML = truncNum;
        }
        else if(resString.length > 9 && spaceLeft > 9)  {
            display.innerHTML = "Too long!"
        }
        else display.innerHTML = res;
    }
}