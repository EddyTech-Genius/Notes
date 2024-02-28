let showButton = document.getElementById("show");
let hideButton = document.getElementById("hide");
let dialog = document.getElementById("dialog");
let addButton = document.getElementById("add");

let input = document.getElementById("title");
let textArea = document.getElementById("textarea");
let notesArr = [];

let notes = document.querySelector(".container");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

hideButton.addEventListener("click", () => {
  dialog.close();
});

// input.addEventListener("change", () => {
//   console.log("car");
// });

addButton.addEventListener("click", () => {
  let newTask = {
    id: crypto.randomUUID(),
    title: input.value,
    text: textArea.value,
  };

  notesArr.push(newTask);

notesArr.map(element => {
  let list = document.createElement("p")
  list.textContent = element.title
  notes.append(list)
})
  console.log(notesArr);

});

