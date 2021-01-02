const fs = require('fs');
const chalk = require('chalk');

const getNotes = function () {
  return 'Your notess...';
}

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);

  if (!duplicateNote) {
    notes.push({ title, body });

    saveNotes(notes);
    console.log(chalk.green.inverse('New Note added!'));

  } else {
    console.log('Note title taken!');
  }
  
}

const removeNote = (title) => {
  // load existing notes
  const notes = loadNotes();
  const filterNote = notes.filter( (note) => {
    return note.title !== title;
  })

  saveNotes(filterNote);
    console.log(chalk.red('Note removed!'));
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
}

const listNotes = () => {
  console.log(chalk.green.inverse('Your notes'));
  const notes = loadNotes();

  notes.filter(element => {
    console.log(element.title);
  });
}

const readNote = (title) => {
  const notes = loadNotes();
  const findNote = notes.find(note => note.title === title);

  console.log(findNote.title);
  console.log(findNote.body);
}

module.exports = { getNotes, addNote, loadNotes, removeNote, listNotes, readNote };