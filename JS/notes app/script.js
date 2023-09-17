const displayNote = () => {
  console.log("Clicked");
  let note = document.querySelector(".note-add input").value;

  if (note.trim() !== "") {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(note);

    let noteContainer = document.querySelector(".notes");
    noteContainer.innerHTML = "";

    notes.forEach((e, i) => {
      let noteDiv = document.createElement("div");

      let para = document.createElement("p");
      para.innerText = e;

      let sNo = document.createElement("p");
      sNo.innerText = `${i + 1}.`;

      let deleteBtn = document.createElement("img");
      deleteBtn.src = "images/delete.png";
      deleteBtn.classList.add("delete");
      deleteBtn.addEventListener("click", () => {
        deleteNote(i);
      });

      noteDiv.append(sNo, para, deleteBtn);
      noteContainer.append(noteDiv);
    });

    localStorage.setItem("notes", JSON.stringify(notes));
    document.querySelector(".note-add input").value = "";
  }
};

const deleteNote = (i) => {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    
    if (i >= 0 && i < notes.length) {
      const noteDivToDelete = document.querySelector(`.notes div:nth-child(${i + 1})`);
      noteDivToDelete.remove();
    
      notes.splice(i, 1);
      localStorage.setItem("notes", JSON.stringify(notes));
      displayNote(); // Update the displayed notes after deletion
    } else {
      alert("Invalid index. Note not deleted.");
    }
  };
  

document.querySelector(".save").addEventListener("click", displayNote);
displayNote()
