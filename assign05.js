"use strict";
//Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
var gradesList = [6, 67, 23, 45, 9, 90, 98];
for (let value = gradesList.length; value >= 0; value--) {
    var totalGrades = 200;
    var failingPercentage = (50 / 100) * totalGrades;
    var passStudents = gradesList[value];
    if (passStudents > failingPercentage) {
        gradesList.splice(value, 1);
    }
}
console.log("attempt 1", gradesList); // neither succeed nor FAILED
// ATTEMPT # 2
function grades(array, totalnumber) {
    for (let e = grades.length; e > 0; e--) {
        var below = array[e];
        var failed = 50 / 100 * totalnumber;
        var arrayPercentage = below / 100 * totalnumber;
        if (array[e] < failed) {
            array.splice(e, 1);
            console.log("attempt 2", array);
        }
    }
}
grades([2, 4, 67, 56, 78, 34], 200);
//ATTEMPT NO3;
var array1 = [23, 45, 54, 43, 67, 90, 80];
for (let x = array1.length; x >= 0; x--) {
    if (array1[x] < 50) {
        array1.splice(x, 1);
    }
}
console.log("attempt 3", array1); //SUCCEED but not in the function tool
//Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
function list(arr) {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] < 50) {
            arr.splice(index, 1);
            console.log("attempt # 4", arr[index]);
        }
    }
}
list([23, 45, 67, 89, 76, 43]); //FAILED
//Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
var marks = [20, 30, 40, 50, 60, 70, 80];
for (let h = marks.length; h >= 0; h--) { // for(let h=0;h<marks.length;h++)
    if (marks[h] < 50) {
        marks.splice(h, 1);
    }
}
console.log("attempt # 5:", marks);
