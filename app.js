let btn = document.querySelector("#add");
function addItem() {
    let newItem = document.querySelector("#new-item");
    if (newItem.value != 0) {
        let div = document.createElement("div");
        div.classList.add("item");
        let li = document.createElement("li");
        li.innerText = newItem.value;
        div.append(li);

        let span = document.createElement("span");
        span.classList.add("del");
        let btn = document.createElement("button");
        btn.innerText = "delete";
        span.append(btn);
        div.append(span);

        document.querySelector("#items ul").append(div);
        newItem.value = "";
        console.log(div, "added");
    }
}
btn.addEventListener("click", addItem);
document.addEventListener("keypress", function (eve) {
    if (eve.code === "Enter") {
        addItem();
    }
});