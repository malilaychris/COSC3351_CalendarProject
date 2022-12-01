const darkModeIcon = document.querySelector("#darkModeIcon");
let darkStatus = false;

/*if(localStorage.getItem("darkmode") !== null) {
  darkStatus = JSON.parse(localStorage.getItem("darkmode"));
}*/

let changeMode = () => {
  const calendarHeadings = document.querySelectorAll(".calendar-heading");
  const infoSections = document.querySelectorAll(".section-info");
  const monthButtons = document.querySelectorAll(".month-button");
  const calendarDays = document.querySelectorAll(".calendar-day");
  const formButtons = document.querySelectorAll(".form-button");
  const noteColorTeal = document.querySelectorAll(".note-teal");
  const noteColorBlue = document.querySelectorAll(".note-blue");
  const noteColorPeach = document.querySelectorAll(".note-peach");
  const noteColorPurple = document.querySelectorAll(".note-purple");
  const noteColorGreen = document.querySelectorAll(".note-green");
  const noteColorHoliday = document.querySelectorAll(".note-holiday");
  const noteColorNone = document.querySelectorAll(".note-none");

  if(!darkStatus) {
    darkStatus = true;
  } else {
    darkStatus = false;
  }

  /*localStorage.setItem("darkmode", JSON.stringify(darkStatus));*/

  if(darkStatus) {
    document.body.classList.add("dark-mode-body");
    darkModeIcon.style.filter = "invert(1)";
    calendarHeadings.forEach((item) => {
      item.classList.add("dark-mode-item1");
    });
    infoSections.forEach((item) => {
      item.classList.add("dark-mode-item1");
    });
    monthButtons.forEach((item) => {
      item.classList.add("dark-mode-item2");
    });
    calendarDays.forEach((item) => {
      item.classList.add("dark-mode-calendar-day");
    });
    formButtons.forEach((item) => {
      item.classList.add("dark-mode-form-button");
    });
  } else {
    document.body.classList.remove("dark-mode-body");
    darkModeIcon.style.filter = "invert(0)";
    calendarHeadings.forEach((item) => {
      item.classList.remove("dark-mode-item1");
    });
    infoSections.forEach((item) => {
      item.classList.remove("dark-mode-item1");
    });
    monthButtons.forEach((item) => {
      item.classList.remove("dark-mode-item2");
    });
    calendarDays.forEach((item) => {
      item.classList.remove("dark-mode-calendar-day");
    });
    formButtons.forEach((item) => {
      item.classList.remove("dark-mode-form-button");
    });
  }

  if(darkStatus) {
    noteColorHoliday.forEach((item) => {
      item.classList.add("note-holiday-dark");
    });
    noteColorTeal.forEach((item) => {
      item.classList.add("note-teal-dark");
    });
    noteColorBlue.forEach((item) => {
      item.classList.add("note-blue-dark");
    });
    noteColorPeach.forEach((item) => {
      item.classList.add("note-peach-dark");
    });
    noteColorPurple.forEach((item) => {
      item.classList.add("note-purple-dark");
    });
    noteColorGreen.forEach((item) => {
      item.classList.add("note-green-dark");
    });
    noteColorNone.forEach((item) => {
      item.classList.add("note-none-dark");
    });
  } else {
    noteColorHoliday.forEach((item) => {
      item.classList.remove("note-holiday-dark");
    });
    noteColorTeal.forEach((item) => {
      item.classList.remove("note-teal-dark");
    });
    noteColorBlue.forEach((item) => {
      item.classList.remove("note-blue-dark");
    });
    noteColorPeach.forEach((item) => {
      item.classList.remove("note-peach-dark");
    });
    noteColorPurple.forEach((item) => {
      item.classList.remove("note-purple-dark");
    });
    noteColorGreen.forEach((item) => {
      item.classList.remove("note-green-dark");
    });
    noteColorNone.forEach((item) => {
      item.classList.remove("note-none-dark");
    });
  }
}

darkModeIcon.addEventListener("click", changeMode);