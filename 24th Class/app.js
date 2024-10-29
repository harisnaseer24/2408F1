// loops
//for //when 
// for(let i= 10; i >=1; i--){
// console.log(i);
// // document.write("<h1>"+i+"</h1>");
// document.write(`<h1>${i}</h1>`);//back ticks | string interpolation
// }

// table program:
let number= +prompt("Enter a number for printing its table:");


if (isNaN(number) ==true) {
    alert("invalid number")
} else {
    
    document.write(`<h1>Table of '${number}'</h1>`);
let i;
    for ( i = 1; i <=10; i++) {
        document.write(`<h1>${number} X ${i} = ${number * i}</h1>`);// 5 X 2 = 10
        
    }

}

//while when end is known but steps or iterations are unknown

let j=60;
while(j <= 33){
    document.write("hi");
console.log("hi");
j--;

}


//do-while


let k=5;
do{
    document.write("hi");
console.log("hi");
k--;

}while(k < 1);


//


//arrays 
//foreach