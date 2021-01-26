const inputtask=document.querySelector(".inputtask input");
const addbtn=document.querySelector(".inputtask button");
const todo=document.querySelector(".todo");
const clearAll=document.querySelector("footer button");

inputtask.onkeyup = ()=>{
    let userdata=inputtask.value;
    if(userdata.trim()!=0){
        addbtn.classList.add("active");
    }
    else{
        addbtn.classList.remove("active");
    } 
}
showTask();
addbtn.onclick=()=>{
    let usersTask=inputtask.value;
    let getLocalStorage= localStorage.getItem("todolist");
    if(getLocalStorage==null){
        tasks=[];
    }
    else{
      tasks=JSON.parse(getLocalStorage);
    }
    tasks.push(usersTask);
    localStorage.setItem("todolist",JSON.stringify(tasks))
    showTask();
}

function showTask(){
    let getLocalStorage= localStorage.getItem("todolist");
    if(getLocalStorage==null){
        tasks=[];
    }
    else{
      tasks=JSON.parse(getLocalStorage);
    }
    const pending=document.querySelector(".pending");
    pending.innerText=tasks.length;

    let newLi='';
    tasks.forEach((element,index) => {
        newLi+=`<li> ${element} <span onclick=" deleteTask(${index})"><i class="far fa-times-circle"></i></span></li>`
    });
    todo.innerHTML=newLi;
    inputtask.value="";
    addbtn.classList.remove("active");
}
function deleteTask(index){
    let getLocalStorage= localStorage.getItem("todolist");
    tasks=JSON.parse(getLocalStorage);
    tasks.splice(index,1);
    localStorage.setItem("todolist",JSON.stringify(tasks))
    showTask();
}
clearAll.onclick=()=>{
    // let getLocalStorage= localStorage.getItem("todolist");
    localStorage.clear();
    showTask();

}


