function Signup(){
    // event.preventDefault();
    // Javascript Object Notation
    let users= JSON.parse(localStorage.getItem("users")) || [];
    

let uemail= document.getElementById("email").value;
let uname= document.getElementById("name").value;
let upassword= document.getElementById("password").value;

// console.log(email,name, password);
// console.log("hi");
let user ={
    name:uname,
    email:uemail,
    password:upassword,
}
users.push(user);
let jsonUser= JSON.stringify(users);
// console.log(users[0]);
localStorage.setItem("users",jsonUser);
alert("Registeration Success");


}