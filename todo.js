const input = document.querySelector("#input_box");         
const list = document.querySelector("#list");
    const completed = document.querySelector("#completed");
   const uncompleted = document.querySelector("#uncompleted");

   // special message for user
const message = document.createElement("p");
message.textContent = "🎉 Wow! You have completed all tasks!";
message.style.color = "#BCD979";
message.style.fontWeight = "bold";
message.style.display = "none";
document.querySelector("#todo").appendChild(message);
  //update task counters
   function updateCounter () {
       const completedTask = document.querySelectorAll(".completed").length;
       const uncompletedTask = document.querySelectorAll("li:not(.completed)").length;
       completed.textContent = completedTask;
       uncompleted.textContent = uncompletedTask;

       if (document.querySelectorAll("li").length > 0 &&
    document.querySelectorAll(".completed").length === document.querySelectorAll("li").length) {
    message.style.display = "block";
} else {
    message.style.display = "none";
}
}
      updateCounter();
function addtask () {
    const task = input.value.trim();
    if (!task){
        alert ("please write your task");
        return;
    }
        const li = document.createElement("li");    
        li.innerHTML = `
        <label>
        <input type="checkbox">
        <span>${task}</span>
        </label>
        <span id="edit_btn">Edit</span>
        <span id="del_btn">Delete</span>`;
        list.appendChild(li);
        input.value="";

        const checkBox = li.querySelector("input");
        const editBtn = li.querySelector("#edit_btn");
        const taskSpan = li.querySelector("span");
        const delBtn = li.querySelector("#del_btn");

        //check box
checkBox.addEventListener("click", function () {
    li.classList.toggle("completed",checkBox.checked)
updateCounter();
});

    //edit btn
    editBtn.addEventListener("click",function () {
        const update = prompt ("Edit task:" ,  taskSpan.textContent);
        if(update!==null){
            taskSpan.textContent=update;
            li.classList.remove("completed");
            checkBox.check = false;
            updateCounter();
        }
    });
 

    // delete btn
    delBtn.addEventListener("click",function  () {
        if(confirm("are you sure you want to delete this task?")){
        li.remove();
        updateCounter();}
    })
    }

   