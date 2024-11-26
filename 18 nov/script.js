// object literal
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
    };
    console.log(typeof person); 
    console.log(person.name);
    console.log(person.city);
    console.log(person.age);

//Array
const numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[3]);

// function
// function is a way to group code together, you can reuse it anytime anywhere.
function sayhello(name) {
    console.log("Hello everyone!");
    alert("Hello");
    document.write("Hello")
    }
    sayhello();
// parameters when you are declaring a function, you can pass values to it.
function addition(num1 , num2) {
    return num1 + num2;
    }
// arguments when you are calling a function, you can pass values to it.
    console.log(addition(20, 30));
    console.log(addition(100, 500));
    document.getElementById("demo").innerHTML = addition(100, 700);

let number = 345;
function cube(){
    return number * number * number;
}

console.log(cube());

const multiply = function(x,y) {
    return x * y;
    }
    console.log(multiply(5, 6));
 
// arrow function
const divide = (a,b) => {
    return a / b;
    }
    console.log(divide(10, 2));
