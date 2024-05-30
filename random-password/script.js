const passwordBox = document.getElementById("randomPasswordInput");
const searchBtn = document.querySelector(".searchBtn");
const length = 8;

const upperCase = 'QWERTYUIOPASDFGHJKLZXCVBNM';
const lowerCase = 'qwertyuiopasdfghjklzxcvbnm';
const number = '0123456789';
const symbol = '!@#$%^&*()_+-:<>,./\|'
const allChar = upperCase + lowerCase + number + symbol;

searchBtn.addEventListener("click", function(){
    console.log(allChar)
    let password = "";
    password += upperCase[Math.floor(Math.random()* upperCase.length)];

    password += lowerCase[Math.floor(Math.random()* lowerCase.length)];

    password += number[Math.floor(Math.random()* number.length)];

    password += symbol[Math.floor(Math.random()* symbol.length)];

    while(length > password.length){
        password += allChar[Math.floor(Math.random()* allChar.length)];
    }
    passwordBox.value =password;

})
const copyPassword=()=>{
    passwordBox.select();
    document.execCommand("copy");
}