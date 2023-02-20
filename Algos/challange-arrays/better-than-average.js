//Given an array of numbers return a count of how many of the numbers are larger than the average.

function betterThanAverageWrong(arr) {
    var sum = 0;
    var count = 0
    var avg = sum/arr.length // currently equals 0/7=0
    for(var i=0; i<arr.length; i++) {
        sum+=arr[i];
    }
    for(var i=0; i<arr.length; i++) {
        if (arr[i]>avg) {               //if arr[i]>0
            count++;
        }
    } 
    return count
}



//fixed with official solution
function betterThanAverage(arr) {
    var sum = 0;
    var count = 0
        for(var i=0; i<arr.length; i++) {
        sum+=arr[i];
    }
    var avg = sum/arr.length
    for(var i=0; i<arr.length; i++) {
        if (arr[i]>avg) {               //if arr[i]>39/7=5.57
            count++;
        }
    } 
    return count
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);    
console.log(result);