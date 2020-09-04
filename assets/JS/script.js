// when browser is open current day is displayed at the top of the calendar
// console.log(m.format("dddd MMMM, Do h:mm:ss a"));

// console.log(now.format("dddd MMMM, Mo h:mm:ss a"));

// var currentDay = $("#currentDay");

// function updateTime () {
//       var now = moment();

//       var display = now.format("h:mm:ss a");

//       currentDay.textContent = display;
// };

// setInterval(updateTime, 1000);

// updateTime();

var currentDay = $("#currentDay");


var updateTime = function() {
  var now = moment();

  var display = now.format("dddd, MMMM, Mo h:mm:ss a");
  
  currentDay.text(display);
};

setInterval(updateTime, 1000)
updateTime();

console.log(updateTime)

