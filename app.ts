const buttonEl = document.querySelector(".random") as HTMLButtonElement;
const inputEl = document.querySelector(".text") as HTMLInputElement;
const imgEl = document.querySelector(".coin") as HTMLImageElement;

buttonEl.addEventListener("click", handleLogic);

function handleLogic() {
  const result = Math.random() < 0.5 ? "Head" : "Tail";

  if (result === "Tail") {
    imgEl.setAttribute("src", "./resources/tails.svg");
  } else {
    imgEl.setAttribute("src", "./resources/heads.svg");
  }

  inputEl.textContent = result;
}
