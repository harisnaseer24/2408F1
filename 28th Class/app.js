// function welcome(name){

//     alert("hi"+name);

// }
// welcome("Haris Naseer");

// //parameters
// function add(num1 ,num2){
//     alert(num1 + num2)
// }

// //arguements
// add(50,45);

//Objects

//properties: details of an object

let student ={
    name:"Haris Naseer",
    rollNo:"19F-BSCS-19",
    faculty:"Sir. Fahad"
}

console.log(student)
console.log(student.name)

console.log(student.rollNo)

// document.write(student.name)
// document.write(student.rollNo)
// document.write(student.faculty)

// alert(student)

//for in (objects)
// for (const key in student) {
//    document.write(`<h3>${key} : ${student[key]}</h3>`)
// }

//for of (arrays)
// let num=[1,2,3]
// for (const a of num) {
//     document.write(`<h3>$: ${num[a]}</h3>`)
// }

// student.forEach(element => {
//     document.write(`<h3>$: ${element}</h3>`)
// });

// let product={
//     id:1,
//     name:"Coffe Cup",
//     price:500,
//     color:"black",
    
// }
// let product2={
//     id:2,
//     name:"Apples",
//     price:240,
//     color:"green",
    
// }
// let product3={
//     id:3,
//     name:"Duster",
//     price:80,
//     color:"black & purple",
    
// }

//array of objects

let products=[
    {
        id:1,
        name:"Coffe Cup",
        price:500,
        color:"black",
        
    },
    {
        id:2,
        name:"Apples",
        price:240,
        color:"green",
        
    },
    {
        id:3,
        name:"Duster",
        price:80,
        color:"black & purple",
        
    },
    {
        id:3,
        name:"Duster",
        price:80,
        color:"black & purple",
        
    }


];

let productContainer=document.getElementById("products");
products.forEach(prod => {
    productContainer.innerHTML += `
    <div class="card">
    <h1>${prod.name}</h1>
    <p>${prod.color}</p>
  
    <p>${prod.price}</p>

</div>`
;
});