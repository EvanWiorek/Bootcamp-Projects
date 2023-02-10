/*
Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

For example, minToFront([5, 93, 22, 4]) should return [4, 5, 93, 22].
*/

function genArray(){
    var arr = []
    var arrLength = Math.random()*20;
    for (i=0; i<=arrLength-1; i++) {
        arr[i] = Math.ceil(Math.random()*100)
    }
    return arr;
}

function minToFront(arr) {
    var min = 100
    for(var i=0; i<arr.length; i++) {
        if(arr[i]<min)  {
            min=arr[i];
        }
    }
    var arr2 = [min]
    for(var x=0; x<arr.length; x++) {
        if(arr[x]>min)  {
            arr2.push(arr[x])
        }
    }
    return arr2
}
var z = genArray()
console.log(z)
console.log(minToFront(z))
