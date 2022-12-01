let notes = [
  /*{
    "year": "2022",
    "month": "12",
    "day": "1",
    "color": "blue",
    "note": "Presentation Day"
  }*/
];

if(localStorage.getItem("notes") !== null) {
  notes = JSON.parse(localStorage.getItem("notes"));
}

let updateLocalStorage = () => {
  localStorage.setItem("notes", JSON.stringify(notes));
}

let addNote = (year, month, day, color, note) => {
  let noteObj = {year: year, month: month, day: day, color: color, note: note};
  notes.push(noteObj);
  updateLocalStorage();
}

let printNote = (year, month, day, color, note) => {
  if(currentYear == year && currentMonth == month - 1) {
    if(darkStatus) {
      document.querySelector("#dayNotes" + (parseInt(day) + firstDayVal)).innerHTML += `<div class="note-default note-${color} note-${color}-dark">${note}</div>`;
    } else {
      document.querySelector("#dayNotes" + (parseInt(day) + firstDayVal)).innerHTML += `<div class="note-default note-${color}">${note}</div>`;
    }
  }
}

let setOverviewNotes = () => {
  informationBody.innerHTML = '';
  for(let i = 0; i < notes.length; i++) {
    informationBody.innerHTML += `<p class="overview-item" id="dayNoteItem${parseInt(notes[i].day) + firstDayVal}">${notes[i].month}/${notes[i].day}/${notes[i].year} - ${notes[i].note}</p>`;
  }
}

let printSavedNotes = () => {
  for(let i = 0; i < notes.length; i++) {
    printNote(notes[i].year, notes[i].month, notes[i].day, notes[i].color, notes[i].note);
  }
}

printSavedNotes();
setOverviewNotes();