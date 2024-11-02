// loops
//for //when 
// for(let i= 10; i >=1; i--){
// console.log(i);
// // document.write("<h1>"+i+"</h1>");
// document.write(`<h1>${i}</h1>`);//back ticks | string interpolation
// }

// table program:
// let number= +prompt("Enter a number for printing its table:");


// if (isNaN(number) ==true) {
//     alert("invalid number")
// } else {
    
//     document.write(`<h1>Table of '${number}'</h1>`);
// let i;
//     for ( i = 1; i <=10; i++) {
//         document.write(`<h1>${number} X ${i} = ${number * i}</h1>`);// 5 X 2 = 10
        
//     }

// }

//while when end is known but steps or iterations are unknown

// let j=60;
// while(j <= 33){
//     document.write("hi");
// console.log("hi");
// j--;

// }


//do-while


// let k=5;
// do{
//     document.write("hi");
// console.log("hi");
// k--;

// }while(k < 1);


//
// let number= +prompt("Enter a number for printing its table:");
// let limit= +prompt("Enter a limit for table:");


// if (isNaN(number) ==true && isNaN(limit)) {
//     alert("invalid number")
// } else {
    
//     document.write(`<h1>Table of '${number}'</h1>`);
// let i=1;
//     while (  i <=limit) {
//         document.write(`<h1>${number} X ${i} = ${number * i}</h1>`);// 5 X 2 = 10
//         i++;
//     }

// }

//arrays
// let student1 ="Hiba"; 
// let student2 ="Sanam"; 
// let student3 ="Mahnoor"; 
// let student4 ="Fariya"; 

// let students=["Ali Ahmed","Farhan","Musab","Hassan","Kabeer"];

// // console.log(students)
// console.log(students[0])//index

// // length : no of elements in an array
// console.log(students.length)

// let result =[100,24,50,false,"F"];
// console.log(result[4]+" grade")

// //foreach
// students.forEach((a)=>{
// document.write(`<h2>${a}</h2>`)
// });

// array methods

let name;//declaration
name="haris";//initialization

let fname ="haris";//declaration & initialization

let numbers= [34,577,4322,65,0];

// let evenNumbers= new Array(5);
// evenNumbers[0]=45;
// evenNumbers[1]=4522;
// evenNumbers[2]=455;
// evenNumbers[3]=6;
// evenNumbers[4]=5645;

// console.log(evenNumbers[4]);

// let abCd="abf";
// console.log(abCd)

// let x;
// console.log(X)

// push insert an element at last index of an array and returns the new length of an array
// numbers.push(77)
// numbers.push(77)
// numbers.push(77)
// numbers.push(77)
// console.log(numbers.push(77))
// console.log(numbers)

//pop removes an element from last index of an array and returns the removed element.

// console.log(numbers.pop());//0
// console.log(numbers.pop());//65
// console.log(numbers)



//unshift add at start
// console.log(numbers.unshift("haris")) 
// console.log(numbers)

//shift removes from start
// console.log(numbers.shift())
// console.log(numbers)

//splice
//              start index, no of elements to be removed, elements to be inserted
// numbers.splice(2               ,1                               );
// numbers.splice(4               ,0                      , 2,3,4,5        );
// console.log(numbers)

//functions
//pre defined : pehle se banay huay

//user defined: khud se banane prhte hain
function Greet(){
alert("hi Haris!");

}

Greet();
Greet();
