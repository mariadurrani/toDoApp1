const titleBox = document.getElementById("title-box")
const descBox = document.getElementById("desc-box")
const listContainer = document.getElementById("list-container")

function addTask() {
    if (titleBox.value === "" || descBox.value === "") {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");

        let taskSpan = document.createElement("span");
        li.innerHTML = titleBox.value + ": " + descBox.value;
        li.appendChild(taskSpan);

        let creationDateSpan = document.createElement("span");
        let creationDate = new Date().toLocaleDateString();
        creationDateSpan.classList.add("creation-date");
        creationDateSpan.innerHTML = "Created: " + creationDate;
        li.appendChild(creationDateSpan);

        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    titleBox.value = "";
    descBox.value = "";
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");

        const isChecked = e.target.classList.contains("checked");

        const creationDateSpan = e.target.querySelector(".creation-date");
        const completionDateSpan = e.target.querySelector(".completion-date");

        if (isChecked) {
            if (creationDateSpan) {
                creationDateSpan.remove();
            }

            if (!completionDateSpan) {
                const completionDate = new Date().toLocaleDateString();
                const newCompletionDateSpan = document.createElement("span");
                newCompletionDateSpan.classList.add("completion-date");
                newCompletionDateSpan.innerHTML = "Completed: " + completionDate;
                e.target.appendChild(newCompletionDateSpan);
            }
        } else {
            if (completionDateSpan) {
                completionDateSpan.remove();
            }

            if (!creationDateSpan) {
                const creationDate = new Date().toLocaleDateString();
                const newCreationDateSpan = document.createElement("span");
                newCreationDateSpan.classList.add("creation-date");
                newCreationDateSpan.innerHTML = "Created: " + creationDate;
                e.target.appendChild(newCreationDateSpan);
            }
        }
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
