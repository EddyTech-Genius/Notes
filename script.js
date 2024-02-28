let showButton = document.getElementById("show");
let hideButton = document.getElementById("hide");
let dialog = document.getElementById("dialog");
let addButton = document.getElementById("add");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

hideButton.addEventListener("click", () => {
  dialog.close();
});

addButton.addEventListener("click", () => {
  
});
