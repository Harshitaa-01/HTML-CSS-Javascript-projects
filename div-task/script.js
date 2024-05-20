const changeThisDiv= document.querySelector('.main');

const dropDownListSelect = document.getElementById('colorSelect');

const colors = [
    "Red", "Orange", "Yellow", "Green", "Blue", "Purple",
    "Pink", "Brown", "Black", "White", "Gray", "Cyan", "Magenta"
  ];

colors.forEach(color => {
    const option = document.createElement("option");
    option.value = color.toLowerCase();
    option.textContent= color;
    dropDownListSelect.appendChild(option)
});

const changeColor = document.querySelector(".changeColor");
changeColor.addEventListener("click", function(){
    const selectedValue = dropDownListSelect.value;
    changeThisDiv.style.backgroundColor = selectedValue;
})

const hideBtn = document.querySelector(".hideBtn");
hideBtn.addEventListener("click", function(){
    changeThisDiv.style.visibility = "hidden";
})

const returnBtn = document.querySelector(".returnBtn");
returnBtn.addEventListener("click", function(){
    changeThisDiv.style.visibility="visible";
})