// let useITDiv= document.querySelector(".use-it");
// let clickButton = document.querySelector("button");
//arrow function
// ()=>{
//     useITDiv.classList.add("add")
//  }
// _=>useITDiv.classList.add("add");


// clickButton.addEventListener("click" , function(){
//    useITDiv.classList.add("add")
// });

/**
 * default function 
 * function  namefunction(){
 *  operation
 * }
 */

//  function sayHello(){
//     console.log("hello ")
// }
// sayHello = function(){
//     console.log("say hello")
// }

// clickButton.addEventListener("click" , sayHello)
// console.log("hello AMIT form outside ")
let inputs = document.querySelectorAll(".inputs");
let emailCheck = document.querySelector(".email");
let emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
let eyeIcon = document.querySelector(".icon");
let passwordCheck = document.querySelector(".password");
for (let index = 0; index < inputs.length; index++) {
    // console.log(inputs[index])
    inputs[index].addEventListener("blur", () => {
        // console.log(inputs[index].value.trim())
        if (inputs[index].value.trim() == "") {
            inputs[index].classList.add("border", "border-danger")

        }
    })

}
// emailCheck.addEventListener("blur", () => {
//     if (emailRegex.test(emailCheck.value)) {
//         console.log("done")
//     } else {
//         console.log("error")

//     }
// })

emailCheck.addEventListener("blur", () => {
    // console.log(emailCheck.value);
    if (emailCheck.value.match(emailRegex)) {
        console.log("done")
    } else {
        console.log("error")

    }
})
eyeIcon.addEventListener("click" , ()=>{
    // console.log(passwordCheck.getAttribute("type"))
    
    if(passwordCheck.getAttribute("type") === "text"){
        passwordCheck.setAttribute("type" , "password");
        eyeIcon.classList.replace("fa-eye-slash" , "fa-eye")

    }else{
        passwordCheck.setAttribute("type" , "text")
        eyeIcon.classList.replace("fa-eye" , "fa-eye-slash")

    }
})

