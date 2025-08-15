//array to store list items
let tasklist = [];

function additem(task) {
    tasklist.push(task);
    console.log(`${task} added to the to-do list.`);
}
function removeitem(index) {
    if (index >= 0 && index < task.length) { //check for valid index
        console.log(`${task[index]} removed from to-do list.`);
    }
    else {
        alert("Invalid index.PLease enter valid index.");
    }
}
function display() {
    if (tasklist.length === 0){
        console.log("List is empty.");
    }else{
        for (let i = 0; i < tasklist.length; i++) {
            console.log(`${i} : ${tasklist[i]}`);
        }
    }        
}

while (true) {
    let action = prompt("Enter action to be performed : (add,remove,display,quit)").toLowerCase();

    if (action === "add") {
        let task = prompt("Enter task to add: ");
        additem(task);
    }
    else if (action === "remove") {
        let index = prompt("Enter index of task to remove: ");
        removeitem(index);
    }
    else if (action === "display") {
        display();
    }
    else if (action === "quit") {
        console.log("Byieee , See you again ♥");
    }
    else {
        alert("Invalid action.Enter valid action.");
    }

}
