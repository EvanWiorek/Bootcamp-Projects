function cookieRemove(div)  {
    div.remove();
    requests.innerText--;
}

function c2f(temp) {
    return Math.round(9 / 5 * temp + 32);
}

function f2c(temp) {
    return Math.round(5 / 9 * (temp - 32));
}



//Iterate through "#high" + i and "#low" + i
function chooseTempLoop(element) {
    alert("Now displaying temperatures in " + element.value);
    for(var i=1; i<5; i++) {
        var highSpan = document.querySelector("#high" + i);
        var lowSpan = document.querySelector("#low" + i);
        var highVal = parseInt(highSpan.innerText);
        var lowVal = parseInt(lowSpan.innerText);
        if(element.value == "°C") {
            highSpan.innerText = f2c(highVal);
            lowSpan.innerText = f2c(lowVal);
        } else {
            highSpan.innerText = c2f(highVal);
            lowSpan.innerText = c2f(lowVal);
        }
    }
}


//queryselectall
var highs = document.querySelectorAll(".high");
var lows = document.querySelectorAll(".low");

function chooseTempAll(element) {
    alert("Now displaying temperatures in " + element.value);
    if(element.value == "°F")   {
        for(var i=0; i<highs.length; i++)   {
            highs[i].innerText = c2f(highs[i].innerText);
        }
        for(var i=0; i<lows.length; i++)   {
            lows[i].innerText = c2f(lows[i].innerText);
        }
    }
    if(element.value == "°C")   {
        for(var i=0; i<highs.length; i++)   {
            highs[i].innerText = f2c(highs[i].innerText);
        }
        for(var i=0; i<lows.length; i++)   {
            lows[i].innerText = f2c(lows[i].innerText);
        }
    }
}



//long winded function
var highTemp1 = document.querySelector("#high1")
var highTemp2 = document.querySelector("#high2")
var highTemp3 = document.querySelector("#high3")
var highTemp4 = document.querySelector("#high4")
var lowTemp1 = document.querySelector("#low1")
var lowTemp2 = document.querySelector("#low2")
var lowTemp3 = document.querySelector("#low3")
var lowTemp4 = document.querySelector("#low4")

function chooseTemp(element)    {
    alert("Now displaying temperatures in " + element.value);
    if(element.value == "°F")   {//convert to °F
        highTemp1.innerText = Math.round(highTemp1.innerText * 9 / 5 + 32);
        highTemp2.innerText = Math.round(highTemp2.innerText * 9 / 5 + 32);
        highTemp3.innerText = Math.round(highTemp3.innerText * 9 / 5 + 32);
        highTemp4.innerText = Math.round(highTemp4.innerText * 9 / 5 + 32);
        lowTemp1.innerText = Math.round(lowTemp1.innerText * 9 / 5 + 32);
        lowTemp2.innerText = Math.round(lowTemp2.innerText * 9 / 5 + 32);
        lowTemp3.innerText = Math.round(lowTemp3.innerText * 9 / 5 + 32);
        lowTemp4.innerText = Math.round(lowTemp4.innerText * 9 / 5 + 32);
    }
    else if(element.value == "°C")  {//convert to °C
    highTemp1.innerText = Math.round((highTemp1.innerText - 32) * 5 / 9);   
    highTemp2.innerText = Math.round((highTemp2.innerText - 32) * 5 / 9);
    highTemp3.innerText = Math.round((highTemp3.innerText - 32) * 5 / 9);
    highTemp4.innerText = Math.round((highTemp4.innerText - 32) * 5 / 9);
    lowTemp1.innerText = Math.round((lowTemp1.innerText - 32) * 5 / 9);
    lowTemp2.innerText = Math.round((lowTemp2.innerText - 32) * 5 / 9);
    lowTemp3.innerText = Math.round((lowTemp3.innerText - 32) * 5 / 9);
    lowTemp4.innerText = Math.round((lowTemp4.innerText - 32) * 5 / 9);
    }
}