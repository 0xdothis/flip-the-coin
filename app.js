var buttonEl = document.querySelector(".random");
var inputEl = document.querySelector(".text");
var imgEl = document.querySelector(".coin");
buttonEl.addEventListener("click", handleLogic);
function handleLogic() {
    var result = Math.random() < 0.5 ? "Head" : "Tail";
    if (result === "Tail") {
        imgEl.setAttribute("src", "./resources/tails.svg");
    }
    else {
        imgEl.setAttribute("src", "./resources/heads.svg");
    }
    inputEl.textContent = result;
}
