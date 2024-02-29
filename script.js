let showButton = document.getElementById("show");
let hideButton = document.getElementById("hide");
let dialog = document.getElementById("dialog");
let addButton = document.getElementById("add");

let input = document.getElementById("title");
let textArea = document.getElementById("textarea");
let colorField = document.getElementById("colorField");
let notesArr = [];

let notes = document.querySelector(".container");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

hideButton.addEventListener("click", () => {
  dialog.close();
});

addButton.addEventListener("click", () => {
  dialog.close();

  let newTask = {
    id: crypto.randomUUID(),
    title: input.value,
    text: textArea.value,
    color: colorField.value,
  };

  notesArr.push(newTask);

  // Create elements for the new note
  let list = document.createElement("li");
  list.classList.add("list-item");

  let title = document.createElement("h2");
  title.classList.add("note-title");
  title.textContent = newTask.title;

  let para = document.createElement("p");
  para.classList.add("note-text");
  para.textContent = newTask.text;

  let colorPlace = document.createElement("input");
  colorPlace.setAttribute("type", "color");
  colorPlace.classList.add("initial-palette");

  let changeColor = document.createElement("button");
  changeColor.classList.add("ChangeC");
  changeColor.textContent = "change color";

  changeColor.addEventListener("click", () => {
    let colors = colorPlace.value;

    // let randomInput = Math.floor(Math.random() * colors.length);

    list.style.backgroundColor = colors;
  });

  list.style.backgroundColor = newTask.color;

  // Append elements to the list item
  list.append(title, para, changeColor, colorPlace);

  // Append the list item to the notes container
  notes.appendChild(list);

  // Clear input fields after adding the note
  input.value = "";
  textArea.value = "";
  colorField.value = "white";

  console.log(notesArr);
});
