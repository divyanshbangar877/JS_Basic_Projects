let todos = JSON.parse(localStorage.getItem("todos")) || [];
let inputValue=document.querySelector("#text");
let addBtn=document.querySelector(".addbtn");
let textContent=document.querySelector(".text-Content");







    function addTodo(value){
let textDiv=document.createElement("div");
textDiv.classList.add("text-div");

let inputCheck=document.createElement("input");
inputCheck.type="checkbox";
inputCheck.classList.add("my-checkbox");

let task=document.createElement("p");
task.innerText=value;

let Delbtn=document.createElement("button");
Delbtn.innerText="X";
Delbtn.classList.add("del");

textDiv.appendChild(inputCheck);
textDiv.appendChild(task);
textDiv.appendChild(Delbtn);

textContent.appendChild(textDiv);

Delbtn.addEventListener("click", ()=>{
   DeleteTodo(value);
    textContent.removeChild(textDiv);
})

}
function DeleteTodo(value){
let index = todos.indexOf(value);

    todos.splice(index, 1);

    localStorage.setItem("todos", JSON.stringify(todos));
}



    addBtn.addEventListener("click", ()=>{
     let value = inputValue.value.trim();

    if (value === "") return;

    todos.push(value);

    localStorage.setItem("todos", JSON.stringify(todos));

    addTodo(value);

    inputValue.value = "";   
    });



    
todos.forEach((todo) => {
    addTodo(todo);

});
