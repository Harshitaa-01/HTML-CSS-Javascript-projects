const writeTodo = document.getElementsByClassName('writeTodo')[0];
const addBtn = document.getElementsByClassName('addBtn')[0];
const tasksUl = document.getElementsByClassName('tasksUl')[0];

addBtn.addEventListener("click",function(){
    const todoValue = writeTodo.value.trim();
    if (todoValue !== ""){
        const listItem = document.createElement("li");
        listItem.textContent = todoValue;
        tasksUl.appendChild(listItem);
        writeTodo.value =""
        // saveData()

        const crossSign = document.createElement("span");
        crossSign.innerHTML = "\u00d7";
        listItem.appendChild(crossSign);
        saveData()
    }
    else{
        alert("enter task");
    }
})

tasksUl.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false);

function saveData(){
    localStorage.setItem("data", tasksUl.innerHTML);
}
function showData(){
    tasksUl.innerHTML = localStorage.getItem("data");
}
showData();