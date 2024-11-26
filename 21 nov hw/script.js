// Write a function to display your name in console ,alert and innerhtml of any element.


var myName = "Zaki Akdas Choudhary";

function displayMyName() {
    console.log(myName); 
    alert(myName); 
    document.getElementById("demo").innerHTML = "Name: " + myName;
}
displayMyName();

// Write a function to get the value of an input tag and display it in alert , console and innerhtml.

function display(){
    let abc = document.getElementById("input").value;
    alert(abc);
    console.log(abc);
    document.getElementById("demo").innerHTML = abc;
}

// Write a function to get the values from 3 input tags and display it in innerhtml in string form (concatinate).

function display03(){
    let concatinate1 = document.getElementById("input01").value;
    let concatinate2 = document.getElementById("input02").value;
    let concatinate3 = document.getElementById("input03").value;

    let  result = concatinate1+" "+concatinate2+" "+concatinate3;

    document.getElementById("demo1").innerHTML = result;
}

display03();