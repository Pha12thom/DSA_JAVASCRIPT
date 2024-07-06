//DAY 0 create and manipulate arrays methods
let myArray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("first array:", myArray);
let myArray1 = [myArray];
console.log("new array elements", myArray1);
myArray.push(10);
console.log("add element at end of array", myArray);
myArray.pop();
console.log("remove last element", myArray);
var myArray2 = ["geofrey", "joan", "milugo", "peter"];
myArray.splice(2, 1, myArray2[0], myArray[1]);
console.log("replace 3 with geofrey", myArray);
var myArray3 = [10, 20, 30, 40, 50];
myArray3.shift();
console.log("removed first element", myArray3);
myArray3.unshift(20);
console.log(myArray3);