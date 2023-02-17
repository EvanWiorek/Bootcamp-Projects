// simplified function
function counter(span)  {
    span.innerText++
}


//storing in array function
function array(idx)  {
    var count1 = document.querySelector("#count1")
    var count2 = document.querySelector("#count2")
    var count3 = document.querySelector("#count3")
    var arr = [count1,count2,count3];
    arr[idx].innerText++;
}