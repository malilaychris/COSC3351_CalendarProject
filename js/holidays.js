let holidaysListDay = [];
let holidaysListMonth = [];
let holidaysListEvent = [];

let addHoliday = (month, day, event) => {
  holidaysListDay.push(day);
  holidaysListMonth.push(month);
  holidaysListEvent.push(event);
}

addHoliday(1, 1, "New Year's Day");
addHoliday(2, 2, "Groundhog Day");
addHoliday(2, 14, "Valentine's Day");
addHoliday(2, 20, "President's Day");
addHoliday(3, 17, "St. Patrick's Day");
addHoliday(4, 1, "April Fool's Day")
addHoliday(4, 22, "Earth Day");
addHoliday(5, 5, "Cinco de Mayo");
addHoliday(5, 14, "Mother's Day");
addHoliday(6, 18, "Father's Day");
addHoliday(7, 4, "Independence Day");
addHoliday(9, 22, "Native American Day");
addHoliday(10, 31, "Halloween");
addHoliday(11, 11, "Veteran's Day");
addHoliday(12, 25, "Christmas Day");
addHoliday(12, 31, "New Year's Eve");

addHoliday(1, 16, "Martin Luther King Jr. Day");
addHoliday(2, 21, "Mardi Gras");
addHoliday(3, 12, "Daylight Saving's Start");
addHoliday(4, 7, "Good Friday");
addHoliday(4, 9, "Easter");
addHoliday(5, 29, "Memorial Day");
addHoliday(9, 4, "Labor Day");
addHoliday(11, 5, "Daylight Saving's End");
addHoliday(11, 23, "Thanksgiving");
addHoliday(11, 24, "Black Friday");
addHoliday(11, 27, "Cyber Monday");

let updateHolidays = (month) => {
  for(let i = 0; i < holidaysListEvent.length; i++) {
    if(holidaysListMonth[i] == (month + 1)) {
      addHolidayNote(holidaysListDay[i], holidaysListEvent[i]);
    }
  }
}

let addHolidayNote = (day, message) => {
  if(darkStatus) {
    document.querySelector("#dayNotes" + (parseInt(day) + firstDayVal)).innerHTML += `<div class="note-default note-holiday note-holiday-dark">${message}</div>`;
  } else {
    document.querySelector("#dayNotes" + (parseInt(day) + firstDayVal)).innerHTML += `<div class="note-default note-holiday">${message}</div>`;
  }
}