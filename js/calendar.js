const date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();
//currentMonth = 9;

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

let getFirstDayOfMonth = (year, month) => {
  return new Date(year, month, 1);
}

let getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
}

let firstDayVal = getFirstDayOfMonth(currentYear, currentMonth).getDay();

let setCalendar = () => {
  firstDayVal = getFirstDayOfMonth(currentYear, currentMonth).getDay();
  
  document.querySelector("#currentMonth").innerHTML = monthNames[currentMonth] + " " + currentYear;
  
  for (let i = 1; i < firstDayVal + 1; i++) {
    document.querySelector("#day" + i).innerHTML = "";
  }
  
  for(let i = firstDayVal + 1; i <= getDaysInMonth(currentYear, currentMonth) + firstDayVal; i++) {
    document.querySelector("#day" + i).innerHTML = i - firstDayVal;
  }
  
  for(let i = getDaysInMonth(currentYear, currentMonth) + firstDayVal + 1; i <= 42; i++) {
    document.querySelector("#day" + i).innerHTML = "";
  }
}

setCalendar();