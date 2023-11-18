let btn = document.querySelector("#add");
function addItem() {
    let newItem = document.querySelector("#new-item");
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
list.addEventListener("mouseover", function(event){
    if(event.target.className == "item"){
        event.target.children[0].style.display = "inline";
    }
    else if(event.target.className == "del"){
        event.target.style.display = "inline";
    }
    else if(event.target.tagName == "BUTTON"){
        event.target.parentElement.style.display = "inline";
    }
});
list.addEventListener("mouseout", function(event){
    if(event.target.className == "item"){
        event.target.children[0].style.display = "none";
    }
    else if(event.target.className == "del" && event.toElement.id == "items"){
        event.target.style.display = "none";
    }
    else if(event.target.className == "del"){
        event.target.style.display = "inline";
    }
    else if(event.target.tagName == "BUTTON"){
        event.target.parentElement.style.display = "inline";
    }
});

// Delete button functionality
list.addEventListener("click", function(e) {
    if(e.target.tagName == "BUTTON"){
        e.target.parentElement.parentElement.remove();
    }
});