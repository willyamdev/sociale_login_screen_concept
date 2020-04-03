let formInfoPanel = document.querySelector("#formInfoPanel");

let nameInput = document.querySelector("#name-input");
let emailInput = document.querySelector("#email-input");
let passwordInput = document.querySelector("#password-input");

let inputsContainer = document.querySelectorAll(".input-container");
let inputsInfo = [], inputPanelInfo = [];

let correct = "fas fa-check correct";
let error = "fas fa-times error";

for(let i = 0; i < inputsContainer.length; i++){
    inputPanelInfo.push(inputsContainer[i].children[3].children[0]);
}

for(let i = 0; i < inputsContainer.length; i++){
    inputsInfo.push(inputsContainer[i].querySelectorAll("i")[1]);

    inputsInfo[i].addEventListener("mouseover", (e)=>{
        inputsContainer[i].children[3].classList.remove("hide");
    });

    inputsInfo[i].addEventListener("mouseleave", (e)=>{
        inputsContainer[i].children[3].classList.add("hide");
    });
}

nameInput.addEventListener("input", (e)=>{
    let name = e.target.value;

    if(name.length > 5){
        inputsInfo[0].className = correct;
        inputPanelInfo[0].innerHTML = "Great name!";
    }else{

        if(name.length == 0){
            inputsInfo[0].classList.add("hide");
            return;
        }

        inputsInfo[0].className = error;
        inputPanelInfo[0].innerHTML = "This name is very short, please try to write more!";
    }
});

emailInput.addEventListener("input", (e)=>{
    let email = e.target.value;

    if(email.length > 10){
        
        if(email.includes("@hotmail") || email.includes("@gmail")){
            inputsInfo[1].className = correct;
            inputPanelInfo[1].innerHTML = "All right!";
        }else{
            inputsInfo[1].className = error;
            inputPanelInfo[1].innerHTML = "Please check if this email is valid!";
        }

    }else{
        
        if(email.length == 0){
            inputsInfo[1].classList.add("hide");
            return;
        }

        inputsInfo[1].className = error;
        inputPanelInfo[1].innerHTML = "This email is very short, please check if this email is valid!";
    }
});

passwordInput.addEventListener("input", (e)=>{
    let password = e.target.value;

    if(password.length > 5){
        inputsInfo[2].className = correct;
        inputPanelInfo[2].innerHTML = "Strong password!";
    }else{

        if(password.length == 0){
            inputsInfo[2].classList.add("hide");
            return;
        }

        inputsInfo[2].className = error;
        inputPanelInfo[2].innerHTML = "This password is very short, please try to write more!";
    }
});