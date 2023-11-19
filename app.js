let btn = document.querySelector("#add");
let newItem = document.querySelector("#new-item");
function addItem() {
    if (newItem.value != 0) {
        let li = document.createElement("li");
        li.classList.add("item");
        li.innerHTML = `${newItem.value}<span class="del"><button>delete</button></span>`

        document.querySelector("#items ul").append(li);
        newItem.value = "";
        console.log(li, "added");
    }
}
btn.addEventListener("click", addItem);
document.addEventListener("keypress", function (eve) {
    if (eve.code === "Enter") {
        addItem();
    }
});

// mouseover and mouseout on delete button's common ancestor
let list = document.querySelector("#items ul");
let listOfComp = document.querySelector("#items-deleted ul");
function mouseoverFn(event){
    if(event.target.className == "item"){
        event.target.children[0].style.display = "inline";
    }
    else if(event.target.className == "del" || event.target.className == "res"){
        event.target.style.display = "inline";
    }
    else if(event.target.tagName == "BUTTON"){
        event.target.parentElement.style.display = "inline";
    }
}
function mouseoutFn(event){
    console.dir(event);
    if(event.target.className == "item"){
        event.target.children[0].style.display = "none";
    }
    else if((event.target.className == "del" && (event.toElement.id == "items" || (event.relatedTarget.nodeName != "SPAN" && event.relatedTarget != "LI"))) || (event.target.className == "res" && event.toElement.id == "items-deleted")) {
        event.target.style.display = "none";
    }
    else if(event.target.className == "del" || event.target.className == "res"){
        event.target.style.display = "inline";
    }
    else if(event.target.tagName == "BUTTON" && event.toElement.tagName == "H3"){
        event.target.parentElement.style.display = "none";
    }
    else if(event.target.tagName == "BUTTON"){
        event.target.parentElement.style.display = "inline";
    }
}
list.addEventListener("mouseover", mouseoverFn);
listOfComp.addEventListener("mouseover", mouseoverFn);
list.addEventListener("mouseout", mouseoutFn);
listOfComp.addEventListener("mouseout", mouseoutFn);

// Delete button functionality
function addItemInCompleted(task) {
    let li = document.createElement("li");
    li.classList.add("item");
    li.innerHTML = `${task}<span class="res"><button>restore</button></span>`

    document.querySelector("#items-deleted ul").append(li);
    newItem.value = "";
    console.log(li, "completed");
}
list.addEventListener("click", function(e) {
    if(e.target.tagName == "BUTTON"){
        let txt = e.target.parentElement.parentElement.innerText;
        txt = txt.replaceAll(/\ndelete/g, "");
        addItemInCompleted(txt);
        e.target.parentElement.parentElement.remove();
    }
});

// Switch functionality
let items = document.querySelector("div#items");
let itemsDel = document.querySelector("div#items-deleted");
let theSwitch = document.querySelector("#switch");

theSwitch.addEventListener("click", function(event) {
    if(itemsDel.style.display == "none"){
        items.style.display = "none";
        itemsDel.style.display = "block";
        theSwitch.innerText = "Tasks";
        newItem.disabled = true;
        console.log("Disabled");
    }
    else {
        items.style.display = "block";
        itemsDel.style.display = "none";
        theSwitch.innerText = "Completed tasks";
        newItem.disabled = false;
    }
});

// Restore button functionality
function restore(task) {
    let li = document.createElement("li");
    li.classList.add("item");
    li.innerHTML = `${task}<span class="del"><button>delete</button></span>`

    document.querySelector("#items ul").append(li);
    newItem.value = "";
    console.log(li, "restored");
}
listOfComp.addEventListener("click", function(e) {
    if(e.target.tagName == "BUTTON"){
        let txt = e.target.parentElement.parentElement.innerText;
        txt = txt.replaceAll(/\nrestore/g, "");
        restore(txt);
        e.target.parentElement.parentElement.remove();
    }
});