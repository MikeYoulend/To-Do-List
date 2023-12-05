const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
	if (inputBox.value === "") {
		alert("You must write something!");
	} else {
		let li = document.createElement("li"); //creo un elemento Html
		li.innerHTML = inputBox.value; //qualsiasi cosa inserita nell'input diventerà un li
		listContainer.appendChild(li); //mostriamolo a schermo in ListContainer
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		li.appendChild(span);
	}
	inputBox.value = "";
	saveData();
}

listContainer.addEventListener(
	"click",
	function (e) {
		if (e.target.tagName === "LI") {
			//se LI è cliccato
			e.target.classList.toggle("checked");
			saveData();
		} else if (e.target.tagName === "SPAN") {
			e.target.parentElement.remove();
			saveData();
		}
	},
	false
);

function saveData() {
	localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
	listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
