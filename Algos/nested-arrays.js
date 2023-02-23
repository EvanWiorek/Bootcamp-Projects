var arr2d = [[2, 5, 8],
[3, 6, 1],
[5, 7, 7]];

// We can console.log the `8` in this array if we
// console.log(arr2d[0][2]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array

//Could we determine if a certain value was present? 
//Write a function called isPresent2d(arr2d, value) that returns true if the value is present and false otherwise

//need a for loop within a for loop

function isPresent2d(arr2d, value) {
    var found = false;
    for (var i = 0; i < arr2d.length; i++) {
        for (var x = 0; x < arr2d[i].length; x++) {
            if (arr2d[i][x] == value) {
                console.log("Eat ice cream: " + "arr2d[" + i + "][" + x + "]");
                found = true;
            }
        }
    }
    if (found == false) {
        console.log("Gorgeous")
    }
}

// isPresent2d(arr2d, 20200230303);





// with two for(loops) for new array
// function flatten(arr2d) {
//     var flat = [];
//     for(var i=0; i<arr2d.length; i++)   {
//         for(var x=0; x<arr2d[i].length; x++)    {
//             flat.push(arr2d[i][x]);
//         }
//     }
//     return flat;
// }

// var result = flatten( [ [2, 5, 8], [3, 6, 6, 1], [5, 7, 7] ] );
// console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]


// 2 loops, no new array
function flatten(arr2d) {
    var totalLength = arr2d.length;
    for (var i = 0; i < arr2d.length; i++) {
        for (var x = 0; x < arr2d[i].length; x++) {
            arr2d.push(arr2d[i][x]);
        }
    }
    for (var i = 0; i < arr2d.length; i++) {
        arr2d[i] = arr2d[i + totalLength];
    }
    var y = 1;
    while (y <= totalLength) {
        y++;
        arr2d.pop();
    }
    return arr2d;
}

// var result = flatten([[2, 5, 8], [3, 6, 1], [5, 7, 7]]);
// console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]







//given a nested array, remove the inner arrays and rewrite to displa
function flatten(arr2d) {
    for (var i = 0; i < arr2d.length; i++) {
        for (var x = 0; x < arr2d[i].length; x++) {
            arr2d.push(arr2d[i][x]);
        }
    }
    return arr2d;
}




console.log(flatten([[2, 5, 8], [3, 6, 1], [5, 7, 7]]));