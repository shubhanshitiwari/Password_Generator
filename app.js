const lengthSlider = document.querySelector('.pass-length input');
const options = document.querySelectorAll(".options input");
const copyIcn = document.querySelector(".input-box span");
const passwordInput = document.querySelector(".input-box input");
const passIndicator = document.querySelector(".pass-indicator");
const generateBtn = document.querySelector(".generate-btn");

const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "!@~#$%^&*()_+}{:,./,"
};

const generatePassword = () => {
    let staticPassword = "";
    let randomPassword = "";
    let passLength = parseInt(lengthSlider.value);

    options.forEach(option => {
        if (option.checked)  {
                staticPassword += characters[option.id.toLowerCase()];
        }
    });

    for (let i = 0; i < passLength; i++) {
        let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)];
        randomPassword += randomChar;
    }

    passwordInput.value = randomPassword;
};

const updateSlider = () => {
    document.querySelector(".pass-length span").innerText = lengthSlider.value;
    generatePassword();
};

const copyPassword = () => {
    navigator.clipboard.writeText(passwordInput.value);
    copyIcn.innerText = "check";
    copyIcn.style.color = '#4285f4';
    setTimeout(() => {
        copyIcn.innerText = "copy_all";
        copyIcn.style.color = "#707070";
    }, 1500);
};

copyIcn.addEventListener("click", copyPassword);
lengthSlider.addEventListener("input", updateSlider);
generateBtn.addEventListener("click", generatePassword);

generatePassword();
updateSlider();
