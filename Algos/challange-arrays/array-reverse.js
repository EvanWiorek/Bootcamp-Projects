// Write a function that will reverse the values an array and return them.

function reverse(arr) {
    var x = arr.length-1;
    var i = 0;
    while (i<arr.length/2)  {
        var temp = arr[i];
        arr[i] = arr[x];
        arr[x] = temp;
        i++;
        x--;
    }
    return arr
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]
