function click(){
    alert("Hello, World!");
}
document.getElementById("myfrom").addEventListener("submit",validate);
function validate(e){
// prevent  default behavior  of from submitting
    e.preventDefault(); 
    //fetch input fields
    let myname = document.getElementById ("name").value;
    let myemail = document.getElementById ("email").value;
    let mypassword = document.getElementById ("password").value;
    let myconfirmPassword = document.getElementById ("confirmPassword").value;
    console.log (myname, myemail, mypassword, myconfirmPassword );
}
if (myname == "" ||
    myemail == "" || 
    mypassword == "" || 
    myconfirmPassword === "" )
   {
    alert("Please fill all the fields!");
     return false;
}
{
    alert("all fields are required!");
    return false;
}
if (password !== confirmPassword ) {
    alert("Passwords do not match!");
    return false;
}   

alert("form submitted successfully");