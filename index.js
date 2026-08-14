const h1 = document.createElement("h1");
h1.innerHTML = "My Todo List";
document.body.appendChild(h1);

const input = document.createElement("input");
input.type = "text";
input.placeholder = "put your text";
document.body.appendChild(input);
input.style.marginLeft = "10px";
input.style.padding = "5px 10px";
input.style.border = "5px solid #719627";
input.style.borderRadius = "8px";
 

const button = document.createElement("button");
button.innerHTML = "Add";
document.body.appendChild(button);
 button.style.marginLeft = "10px";
 button.style.padding = "5px 10px";
 button.style.backgroundColor = "#4CAF50";
 button.style.border = "5px solid #45a049";
button.style.borderRadius = "8px";
 
const taskList = document.createElement("ul");
document.body.appendChild(taskList);

button.addEventListener("click", function () {

    let task = input.value;

    if (task) {
    const li = document.createElement("li");

    li.textContent = task + " ";
    const deleteButton = document.createElement("button");
 li.style.marginTop = "10px";
 li.style.padding = "5px 10px";
 li.style.backgroundColor = "#74a3a9";
 li.style.border = "5px solid #1b1515";
 li.style.borderRadius = "8px";
 li.style.color = "white";
 li.style.fontSize = "26px";
 li.style.listStyleType = "none";
li.style.width = "250px";



    deleteButton.textContent = "Delete";
    li.appendChild(deleteButton);
    deleteButton.style.marginLeft = "70px";
deleteButton.style.padding = "5px 10px";
deleteButton.style.backgroundColor = "#f44336";
deleteButton.style.border = "5px solid #da190b";
deleteButton.style.borderRadius = "8px";
deleteButton.style.color = "white";
deleteButton.style.fontSize = "26px";
    taskList.appendChild(li); 
    deleteButton.addEventListener("click", function () {
        li.remove();
    }); 
    input.value = "";
}
});
