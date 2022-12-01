let daySelectList = document.querySelector("#daySelectList");
let dayNotes = document.querySelector("#dayNotes");
let addNotesButton = document.querySelector("#addNotesButton");
let clearButton = document.querySelector("#clearButton");
let informationBody = document.querySelector("#informationBody");
let noteColor = document.querySelector("#colorList");

let daySelectListContent;

let updateDaySelectList = () => {
  daySelectListContent = "";

  for(let i = 1; i <= getDaysInMonth(currentYear, currentMonth); i++) {
    daySelectListContent += `<option value="${i}">${i}</option>`
  }
  daySelectList.innerHTML = daySelectListContent;
}

updateDaySelectList();

let submitDayNote = () => {
  if(darkStatus) {
    document.querySelector("#dayNotes" + (parseInt(daySelectList.value) + firstDayVal)).innerHTML += `<div class="note-default note-${colorList.value} note-${colorList.value}-dark">${dayNotes.value}</div>`;
  } else {
    document.querySelector("#dayNotes" + (parseInt(daySelectList.value) + firstDayVal)).innerHTML += `<div class="note-default note-${colorList.value}">${dayNotes.value}</div>`;
  }

  addNote(currentYear, currentMonth + 1, daySelectList.value, colorList.value, dayNotes.value);
  dayModified = new Date(currentYear, currentMonth, daySelectList.value);

  setOverviewNotes();

  //informationBody.innerHTML += `<p class="overview-item" id="dayNoteItem${parseInt(daySelectList.value) + firstDayVal}">${dayModified.toLocaleDateString("en-US")} - ${dayNotes.value}</p>`;
}

let clearDayNote = () => {
  for(let i = 0; i < notes.length; i++) {
    if(currentYear == notes[i].year && (currentMonth + 1) == notes[i].month && parseInt(daySelectList.value) == notes[i].day) {
      notes.splice(i, 1);
      i--;
    }
    updateLocalStorage();
  }

  setOverviewNotes();

  document.querySelector("#dayNotes" + (parseInt(daySelectList.value) + firstDayVal)).innerHTML = '';
  document.querySelector(`#dayNoteItem${parseInt(daySelectList.value) + firstDayVal}`).remove();
}

addNotesButton.addEventListener("click", submitDayNote);
clearButton.addEventListener("click", clearDayNote);

let clearNotes = () => {
  for(let i = 1; i <= 42; i++) {
    document.querySelector("#dayNotes" + i).innerHTML = "";
  }
}