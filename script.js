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

  notesArr.map((element) => {
    let wrapper = document.createElement("div");
    wrapper.classList.add("container");
    // notes.append(list, para);

    let list = document.createElement("li");
    list.classList.add("list-item");

    let title = document.createElement("h3");
    title.classList.add("note-title");
    title.textContent = element.title;

    let para = document.createElement("p");
    para.classList.add("note-text");
    para.textContent = element.text;
    list.append(title, para);
    notes.appendChild(list);
  });

  // let input,
  //   textArea = 0;

  console.log(notesArr);
});
