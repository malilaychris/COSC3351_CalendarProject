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

let setCalendar = () => {
  document.querySelector("#currentMonth").innerHTML = monthNames[currentMonth] + " " + currentYear;
  let firstDayVal;
  switch(getFirstDayOfMonth(currentYear, currentMonth).getDay()) {
    case 0:
      firstDayVal = 0;
      break;
    case 1:
      firstDayVal = 1;
      break;
    case 2:
      firstDayVal = 2;
      break;
    case 3:
      firstDayVal = 3;
      break;
    case 4:
      firstDayVal = 4;
      break;
    case 5:
      firstDayVal = 5;
      break;
    case 6:
      firstDayVal = 6;
      break;
  }
  
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