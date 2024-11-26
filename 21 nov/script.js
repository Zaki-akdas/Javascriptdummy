let myPara = document.getElementById("demo");
console.log(myPara);

function display() {
  myPara.innerHTML = "This is coming from JavaScript";
}

function styling() {
  const styles = {
    color: "red",
    fontSize: "20px",
    textTransform: "uppercase",
    border: "2px solid black"
  };
  Object.assign(myPara.style, styles);
}

const input1 = document.querySelector("input");
console.log(input1);
function change() {
  input1.value = "Indore";
}
// }let mypara = document.getElementById("demo");
// console.log(mypara);

// function display(){
//  mypara.innerHTML = "this is coming from javascript";
// }

// function styling() {
//     document.getElementById("demo").style.color = "red";
//     document.getElementById("demo").style.fontSize = "20px";
//     document.getElementById("demo").style.textTransform = "uppercase";
//     document.getElementById("demo").style.border = "2px solid black";
// }

// var input1 = document.getElementsByTagName("myinput").value;
// console.log(input1);
// function change() {
//     input1.value = "indore";
// }
