// write a function that takes 3 parameters and perform arithmetic operations on that.

function ArOperations(x, y, z) {
    return {
        addition: x + y + z,
        subtraction: x - y - z,
        multiplication: x * y * z,
        division: x / y / z
    };
}

var result = ArOperations(365, 10, 25);

console.log(result.addition);
console.log(result.subtraction);
console.log(result.multiplication);
console.log(result.division);

// take two variables of your name and age and display it using the function in innerHTML and console

var name = "zaki akdas choudhar", age = "19"; 

function displayInfo() {

    var info = " Name: " + name + "\n" + " Age: " + age;
    console.log(info);
    document.getElementById('info').innerHTML = info;
}

displayInfo();