/*function starFib(n) {
    if (n <= 1) {
        return n;
    } else {
        return starFib(n - 1) + starFib(n - 2);
    }

}

console.log(starFib(9));

function getNthFibo(n) {
    if (n <= 1) {
        return n;
    } else {
        return getNthFibo(n - 1) + getNthFibo(n - 2);
    }
}
console.log(getNthFibo(3));


function isSubset(setA, subset) {
    for (let elem of subset) {
        if (!setA.has(elem)) {
            return false
            console.log("setB is not Subset of A")
        } else {
            return true
            console.log("setB is subset of A")
        }

    }
}


var setA = new Set([1, 2, 3, 4]);
var subset = new Set([1, 2, 3]);
var setB = new Set([1, 6, 7, 8, 9])

console.log(isSubset(setA, subset));


function isUnion(setA, setB) {
    var union = new Set();
    for (let elem of setB) {
        if (!setA.has(elem)) {
            union.add(elem);
            return union

        }


    }
}

console.log(isUnion(setA, setB));


function binarySearch(array, n) {
    var highIndex = 0;
    var lowIndex = array.length - 1;
    while (lowIndex < highIndex) {

        var midIndex = Math.floor(highIndex + lowIndex) / 2;
        return midIndex;
        if (n > array[midIndex]) {
            lowIndex = array[midIndex];
        } else {
            highIndex = array[midIndex];

        }

    }
    return n - 1
}
console.log(binarySearch([1, 2, 3, 4], 4));
*/


function swap(array, index1, index2) {
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}




function bubbleSort(array) {
    for (var i = 0, arrayLength = array.length; i < arrayLength; i++) {
        console.log(i);

        for (var j = 0; j <= i; j++) {

            if (array[i] < array[j]) {
                swap(array, i, j);
            }
        }
    }

    return array;
}
bubbleSort([6, 1, 2, 3, 4, 5]); // [1,2,3,4,5,6]

var letters = "abbcdghiijjklmnb"

var n = letters.slice(1, 6)



console.log(n)

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

function combination(n, r) {
    if (r > n) {
        return 0;
    }
    return factorial(n) / (factorial(r) * factorial(n - r))
}


console.log(combination(10, 4))

/* def factorial(n):
    if n ==0 or n == 1:
        return 1
    else:
        return n*factorial(n-1)
    
    def combination(r,q):
        if(q>r):
            return 0
        else:
            return factorial(r)/factorial(q)*factorial(r-q)

            */