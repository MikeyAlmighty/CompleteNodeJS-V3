const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "DeadPool is King!!!";
};

const addNote = (title, body) => {
  const notes = loadNotes();

  const dupeNote = notes.find(note => {
    return note.title === title;
  });

  if (!dupeNote) {
    notes.push({
      title: title,
      body: body
    });
    savedNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("Duplicate title detected!"));
  }
};

const removeNote = title => {
  const notes = loadNotes();

  const notesToKeep = notes.filter(note => {
    return note.title !== title;
  });

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note Removed!"));
    savedNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  notes.map(note => {
    console.log(chalk.blue(note.title), " - ", chalk.cyan(note.body));
  });
};

const readNote = title => {
  const notes = loadNotes();
  const note = notes.find(singleNote => {
    return singleNote.title === title;
  });
  if (note) {
    console.log(chalk.blue(note.title), " - ", chalk.cyan(note.body));
  } else {
    console.log(chalk.red.inverse("No Note found"));
  }
};

const savedNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
