const inputBtn = document.getElementsByClassName('addBtn')[0];

const inputText = document.getElementById('addTaskInput');

const taskList = document.getElementById('listContainer');

inputBtn.addEventListener("click", function(){
    const taskValue = inputText.value.trim();
    if(taskValue !==""){
        const listItem = document.createElement("li");
        listItem.textContent= taskValue;
        taskList.appendChild(listItem);     //new task is added in li tag
        
        let spanCross = document.createElement("span");
        spanCross.innerHTML= "\u00d7";      //creating cross symbol in span
        listItem.appendChild(spanCross)

        inputText.value="";         //input feild is cleared
        saveData();
    }
    else{
        alert("please enter a task");
    }
})

taskList.addEventListener('click',function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}
function showData(){
    taskList.innerHTML = localStorage.getItem("data");
}
showData();