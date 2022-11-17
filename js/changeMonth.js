let monthButtonPrev = document.querySelector("#monthButtonPrev");
let monthButtonNext = document.querySelector("#monthButtonNext");

let changeNextMonth = () => {
  if(currentMonth == 11) {
    currentYear++;
    currentMonth = 0;
  } else {
    currentMonth++;
  }
  setCalendar();
  updateDaySelectList();
  clearNotes();
}

let changePrevMonth = () => {
  if(currentMonth == 0) {
    currentYear--;
    currentMonth = 11;
  } else {
    currentMonth--;
  }
  setCalendar();
  updateDaySelectList();
  clearNotes();
}

monthButtonNext.addEventListener("click", changeNextMonth);
monthButtonPrev.addEventListener("click", changePrevMonth);