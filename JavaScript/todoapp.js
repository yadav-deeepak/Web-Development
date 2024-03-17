let todo=[];
let req = prompt("Please enter your request"); 

console.log(req);
while(true){
    if(req=="quit"){
        console.log("Quitting app");
        break;
    }
    if(req == "list"){
        console.log("------------");
        for(let i=1; i<todo.length;i++){
            console.log(i, todo[i]);
        }
        console.log("------------");
    }else if(req == "add"){
        let task=prompt("Enter the task ");
        todo.push(task);
        console.log("task added");
    }else if(req == "delete"){
        let idx = prompt("Please enter the task index u want to delete");
        todo.splice(idx,1);
    }else {
        console.log("Wrong Request");
    }
    
    req = prompt("Please enter your request");
}
