function display(){
    console.log("Hello world");
}
var name = "zaki"
var age = 19 
var gender = "male";
function show(){
    document.getElementById("demo").innerHTML = "My name is " + name + " I am " + age + " years old and I am " + gender + " gender";
}
// when you click on cube button a prompt will ask for a number and diplay cube of that number in h1 innerhtml.
function cube(){
    var num = prompt("Enter a number")
    var head = document.getElementById("demo");
    head.innerHTML = num * num * num; 
    };

function change(){
    document.getElementById("demo").style.color = "red";
    document.getElementById("demo").style.fontSize = "100px";
    document.getElementById("demo").style.fontFamily = "Arial";
}