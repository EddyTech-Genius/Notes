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

addButton.addEventListener("click", () => {
  let newTask = {
    id: crypto.randomUUID(),
    title: input.value,
    text: textArea.value,
  };

  notesArr.push(newTask);

  // Create elements for the new note
  let list = document.createElement("li");
  list.classList.add("list-item");

  let title = document.createElement("h3");
  title.classList.add("note-title");
  title.textContent = newTask.title;

  let para = document.createElement("p");
  para.classList.add("note-text");
  para.textContent = newTask.text;

  // Append elements to the list item
  list.append(title, para);

  // Append the list item to the notes container
  notes.appendChild(list);

  // Clear input fields after adding the note
  input.value = "";
  textArea.value = "";

  console.log(notesArr);
});

