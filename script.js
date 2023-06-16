const titleBox = document.getElementById("title-box")
const descBox = document.getElementById("desc-box")
const listContainer = document.getElementById("list-container")

function addTask() {
    if (titleBox.value === "" || descBox.value === "") {
        alert("You must write something!")
    }

    else {
        let li = document.createElement("li");
        li.innerHTML = titleBox.value + descBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    titleBox.value = "";
    descBox.value = "";
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
    }
}, false);

