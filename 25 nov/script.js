function multiplyNumbers() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var result = num1 * num2;
    document.getElementById('result').innerHTML = "The result is: " + result;
}
function divideNumbers() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var result = num1 / num2;
    document.getElementById('result').innerHTML = "The result is: " + result;
}
function styling() {
        document.getElementById("demo").style.color = "red";
        document.getElementById("demo").style.fontSize = "50px";
        document.getElementById("demo").style.textTransform = "uppercase";
        document.getElementById("demo").style.backgroundColor = "lightblue";
    }
   