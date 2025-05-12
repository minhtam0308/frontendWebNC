let usernameRef = document.getElementById("username");
let passwordRef = document.getElementById("password");
let eyeL = document.querySelector(".eyeball-l");
let eyeR = document.querySelector(".eyeball-r");
let handL = document.querySelector(".hand-l");
let handR = document.querySelector(".hand-r");
let eyeIcon = document.querySelector(".eyeIcon");
let containRegister = document.querySelector(".container_Reigister");
let containLogin = document.querySelector(".container_Login");
let MoverRegisteer = document.getElementById("btn_register");

let eye = false;


let changEyeIcon = () => {

  if (eye === false) {
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
    passwordRef.type = "password";
  } else {
    eyeIcon.classList.add("fa-eye-slash");
    eyeIcon.classList.remove("fa-eye");
    passwordRef.type = "text";
  }
}

let normalEyeStyle = () => {
  eyeL.style.cssText = `
    left:0.6em;
    top: 0.6em;
  `;
  eyeR.style.cssText = `
  right:0.6em;
  top:0.6em;
  `;
};

let normalHandStyle = () => {
  handL.style.cssText = `
        height: 2.81em;
        top:8.4em;
        left:7.5em;
        transform: rotate(0deg);
    `;
  handR.style.cssText = `
        height: 2.81em;
        top: 8.4em;
        right: 7.5em;
        transform: rotate(0deg)
    `;
};


let eyeMove = (usernameLength) => {
  if (usernameLength > 26) {
    usernameLength = 26;
  }
  let eyeIndex = parseInt(usernameLength / 9);
  eyeL.style.cssText = `
    left: ${0.4 + eyeIndex * 0.15}em;
    top: ${1.12 + eyeIndex * 0.13}em;  
  `;
  eyeR.style.cssText = `
    left: ${0.6 + eyeIndex * 0.15}em;
    top: 1.2em;
  `;
}

eyeIcon.addEventListener("click", () => {
  eye = !eye;
  changEyeIcon();
  if (eye === true) {
    handL.style.cssText = `
        height: 6.56em;
        top: 3.87em;
        left: 11.75em;
        transform: rotate(-155deg);    
    `;
    handR.style.cssText = `
    height: 6.56em;
    top: 3.87em;
    right: 11.75em;
    transform: rotate(155deg);
  `;
  }
});
//When clicked on username input
usernameRef.addEventListener("focus", () => {

  // eyeL.style.cssText = `
  //   left: 0.4em;
  //   top: 1.12em;  
  // `;
  // eyeR.style.cssText = `
  //   left: 0.6em;
  //   top: 1.2em;
  // `;
  eyeMove(usernameRef.value.length);
  if (eye === false) {
    normalHandStyle();

  }
});

usernameRef.addEventListener("keydown", (e) => eyeMove(e.target.value.length));
//When clicked on password input
passwordRef.addEventListener("keydown", (e) => {
  handL.style.cssText = `
        height: 6.56em;
        top: 3.87em;
        left: 11.75em;
        transform: rotate(-155deg);    
    `;
  handR.style.cssText = `
    height: 6.56em;
    top: 3.87em;
    right: 11.75em;
    transform: rotate(155deg);
  `;
});
//When clicked outside username and password input
document.addEventListener("click", (e) => {
  let clickedElem = e.target;
  if (clickedElem != usernameR && clickedElem != passwordR && eye === false && clickedElem != usernameRef && clickedElem != passwordRef) {

    normalEyeStyle();
    normalHandStyle();
    if (clickedElem != eyeIconR && clickedElem != eyeIcon) {
      eye = false;
      changeyeIconR();
    }
  }
});

MoverRegisteer.addEventListener("click", () => {
  containRegister.style.cssText = `
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 31.25em;
    transition: 1s all;
  `;

})
