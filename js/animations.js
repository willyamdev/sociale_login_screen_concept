let register = true;

let gettingsContainer = document.querySelector(".gettings");
let gettingsSignUp = document.querySelector(".gettings-signup");
let gettingsSignIn = document.querySelector(".gettings-signin");
let gettingsButton = document.querySelector("#gettings-button");

let formContainer = document.querySelector(".form");
let formInputRegistrationContainer = document.querySelector(".hide");
let formForgitPass = document.querySelector(".forgot");
let formTitle = document.querySelector("#form-title");
let formButton = document.querySelector("#form-button");

gettingsButton.addEventListener("click", (e)=>{
    if(gettingsContainer.style.webkitAnimationPlayState == "running") return;
    
    if(register){
        let newWidthGetting = document.body.offsetWidth - gettingsContainer.offsetWidth;
        gettingsContainer.style.transform = `translateX(-${newWidthGetting}px)`;
        
        let newWidthForm = document.body.offsetWidth - formContainer.offsetWidth;
        formContainer.style.transform = `translateX(${newWidthForm}px)`;
        playHideSignUpAnimation();
    }else{
        gettingsContainer.style.transform = `translateX(0px)`;
        formContainer.style.transform = `translateX(0px)`;
        playHideSignInAnimation();
    }
    playAnimation();
    register = !register;
});

function playAnimation(){
    gettingsContainer.style.webkitAnimationPlayState = "running";

    setTimeout(function() {
        gettingsContainer.style.webkitAnimationPlayState = "paused";
    }, 1000);
}

function playHideSignUpAnimation(){
    gettingsSignUp.classList.add("hideSignUp");
    gettingsSignUp.style.webkitAnimationPlayState = "running";

    setTimeout(function() {
        formTitle.innerHTML = "Create Account";
        formInputRegistrationContainer.classList.remove("hide");
        formForgitPass.classList.add("hide");
        formButton.innerHTML = "SIGN UP";

        gettingsSignUp.style.webkitAnimationPlayState = "paused";
        gettingsSignUp.classList.add("gettings-desactived");
        gettingsSignUp.classList.remove("hideSignUp");

        gettingsSignIn.classList.add("showSignIn");
        gettingsSignIn.classList.remove("gettings-desactived");
        gettingsSignIn.style.webkitAnimationPlayState = "running";
        
        setTimeout(function() {
            gettingsSignIn.style.webkitAnimationPlayState = "paused";
            gettingsSignIn.classList.remove("showSignIn");
            gettingsButton.innerHTML = "SIGN IN";
        }, 500);

    }, 500);
}

function playHideSignInAnimation(){
    gettingsSignIn.classList.add("hideSignIn");
    gettingsSignIn.style.webkitAnimationPlayState = "running";

    setTimeout(function() {
        formTitle.innerHTML = "Sign in to Sociale";
        formInputRegistrationContainer.classList.add("hide");
        formForgitPass.classList.remove("hide");
        formButton.innerHTML = "SIGN IN";

        gettingsSignIn.style.webkitAnimationPlayState = "paused";
        gettingsSignIn.classList.add("gettings-desactived");
        gettingsSignIn.classList.remove("hideSignIn");

        gettingsSignUp.classList.add("showSignUp");
        gettingsSignUp.classList.remove("gettings-desactived");
        gettingsSignUp.style.webkitAnimationPlayState = "running";
        
        setTimeout(function() {
            gettingsSignUp.style.webkitAnimationPlayState = "paused";
            gettingsSignUp.classList.remove("showSignUp");
            gettingsButton.innerHTML = "SIGN UP";
        }, 500);

    }, 500);
}
