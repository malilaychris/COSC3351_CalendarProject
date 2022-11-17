let daySelectList = document.querySelector("#daySelectList");
let dayNotes = document.querySelector("#dayNotes");
let addNotesButton = document.querySelector("#addNotesButton");

let daySelectListContent;

let updateDaySelectList = () => {
  daySelectListContent = "";

  for(let i = 1; i <= getDaysInMonth(currentYear, currentMonth); i++) {
    daySelectListContent += `<option value="${i}">${i}</option>`
  }
  daySelectList.innerHTML = daySelectListContent;
}

updateDaySelectList();

let submitDayNotes = () => {
  console.log();
  
  document.querySelector("#dayNotes" + (parseInt(daySelectList.value) + firstDayVal)).innerHTML = dayNotes.value;
}

addNotesButton.addEventListener("click", submitDayNotes);

let clearNotes = () => {
  for(let i = 1; i < 42; i++) {
    document.querySelector("#dayNotes" + i).innerHTML = "";
  }
}