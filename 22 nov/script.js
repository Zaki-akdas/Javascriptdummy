// Function to show output in the element with ID "demo"
function display() {
    document.getElementById("demo").innerHTML = "My name is Zaki. I am 19 years old and I am male.";
    console.log("Information displayed in the element with ID 'demo'");
}

// Function to show output in elements with class "head"
function display1() {
    let elements = document.getElementsByClassName("head");
    for (let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = "Updated content for element with class 'head'";
    }
    console.log("Information displayed in elements with class 'head'");
}

// Add event listener to the button with ID "btn"
document.getElementById("btn").addEventListener("click", function() {
    alert("Button with ID 'btn' was clicked!");
});
