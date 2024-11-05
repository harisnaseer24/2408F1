function ShowMsg() {
    alert("Welcome to Aptech..😊");
    console.log("hi");
    document.write("event fired..!");
    let heading=document.getElementById("myheading");
    heading.innerText += "Event fired..🔥";
    console.log(heading);


    let list=document.getElementById("myList");
    list.innerHTML+="<li> <h3>Event fired..🔥</h3></li>"

}

// let a = 9;
// a+=1;//a = a +1

// let heading1= "event fired..!"
// heading1 += "event fired..!"

// console.log(a)

function ToggleLight(){

    let img=document.getElementById("myImg");
    let currentImg=img.getAttribute('src');


    console.log(currentImg);

    if (currentImg =="./bulboff.jfif") {

            img.setAttribute("src","./bulbon.jpg");
    } else {
        
        img.setAttribute("src","./bulboff.jfif");
    }

}