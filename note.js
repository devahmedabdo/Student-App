const fs = require("fs");

const addNotes = (title, body) => {
  const notes = loadNotes();
  const notesToKeep = notes.find((ele) => {
    return ele.title === title;
  });
  if (!notesToKeep) {
    notes.push({
      title,
      body,
    });

    saveNotes(notes);
    console.log("added scsessfully");
  } else {
    console.log("Title already exsist");
  }
};

const loadNotes = () => {
  try {
    const data = fs.readFileSync("notes.json").toString();
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
};
const saveNotes = (notes) => {
  const saveData = JSON.stringify(notes);

  fs.writeFileSync("notes.json", saveData);
};
// delete
const deleteNotes = (title) => {
  let notes = loadNotes();
  let notesToKeep = notes.filter((ele) => {
    return ele.title !== title;
  });
  if (notes.length !== notesToKeep.length) {
    saveNotes(notesToKeep);
    console.log("Deleted Scsessfully");
  } else {
    console.log("Title Not Found");
  }
};
// read
const readNotes = (title) => {
  let notes = loadNotes();
  let noteToShow = notes.find((ele) => {
    return ele.title === title;
  });
  if (noteToShow) {
    console.log(`The Title Is ${noteToShow.title} And The Body is ${noteToShow.body}`);
  } else {
    console.log("Note Not Found");
  }
};
// list
const listNotes = (title) => {
  let notes = loadNotes();
  notes.forEach((ele) => {
    
    if (notes!==0) {
      console.log(`The Title Is ${ele.title} And The Body is ${ele.body}`);
    } else {
      console.log("No Notes To Show");
    }
  });
};

module.exports = {
  addNotes,
  deleteNotes,
  readNotes,
  listNotes,
};
