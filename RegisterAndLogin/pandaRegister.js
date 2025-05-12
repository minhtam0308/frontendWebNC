

let usernameR = document.getElementById("usernameR");
let passwordR = document.getElementById("passwordR");
let eyeLR = document.querySelector(".eyeball-l");
let eyeRR = document.querySelector(".eyeball-r");
let handLR = document.querySelector(".hand-l");
let handRR = document.querySelector(".hand-r");

let eyeIconR = document.querySelector(".eyeIconR");

let moveLogin = document.getElementById("btn_login");
eye = false;


changeyeIconR = () => {

    if (eye === false) {
        eyeIconR.classList.remove("fa-eye-slash");
        eyeIconR.classList.add("fa-eye");
        passwordR.type = "password";
    } else {
        eyeIconR.classList.add("fa-eye-slash");
        eyeIconR.classList.remove("fa-eye");
        passwordR.type = "text";
    }
}

normalEyeStyle = () => {
    eyeLR.style.cssText = `
    left:0.6em;
    top: 0.6em;
  `;
    eyeRR.style.cssText = `
  right:0.6em;
  top:0.6em;
  `;
};

normalHandStyle = () => {
    handLR.style.cssText = `
        height: 2.81em;
        top:8.4em;
        left:7.5em;
        transform: rotate(0deg);
    `;
    handRR.style.cssText = `
        height: 2.81em;
        top: 8.4em;
        right: 7.5em;
        transform: rotate(0deg)
    `;
};


eyeMove = (usernameLength) => {
    if (usernameLength > 26) {
        usernameLength = 26;
    }
    let eyeIndex = parseInt(usernameLength / 9);
    eyeLR.style.cssText = `
    left: ${0.4 + eyeIndex * 0.15}em;
    top: ${1.12 + eyeIndex * 0.13}em;  
  `;
    eyeRR.style.cssText = `
    left: ${0.6 + eyeIndex * 0.15}em;
    top: 1.2em;
  `;
}

eyeIconR.addEventListener("click", () => {
    eye = !eye;
    changeyeIconR();
    if (eye === true) {
        handLR.style.cssText = `
        height: 6.56em;
        top: 3.87em;
        left: 11.75em;
        transform: rotate(-155deg);    
    `;
        handRR.style.cssText = `
    height: 6.56em;
    top: 3.87em;
    right: 11.75em;
    transform: rotate(155deg);
  `;
    }
});
//When clicked on username input
usernameR.addEventListener("focus", () => {

    // eyeLR.style.cssText = `
    //   left: 0.4em;
    //   top: 1.12em;  
    // `;
    // eyeRR.style.cssText = `
    //   left: 0.6em;
    //   top: 1.2em;
    // `;
    eyeMove(usernameR.value.length);
    if (eye === false) {
        normalHandStyle();

    }
});

usernameR.addEventListener("keydown", (e) => eyeMove(e.target.value.length));
//When clicked on password input
passwordR.addEventListener("keydown", (e) => {
    handLR.style.cssText = `
        height: 6.56em;
        top: 3.87em;
        left: 11.75em;
        transform: rotate(-155deg);    
    `;
    handRR.style.cssText = `
    height: 6.56em;
    top: 3.87em;
    right: 11.75em;
    transform: rotate(155deg);
  `;
});
//When clicked outside username and password input


moveLogin.addEventListener("click", () => {
    containRegister.style.cssText = `
    transform: translate(-50%, -50%);
    top: 50%;
    left: calc(50% + 400px);
    width: 0;
    transition: 1s all;
  `;

})
