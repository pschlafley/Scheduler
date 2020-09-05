var tasks = $(".selected-hour")
var currentDay = $("#currentDay");
var currentTimer = $("#timer");

var hourColor = function() {
  var currentHour = (moment().hour());
  
  for (var i = 0; i < tasks.length; i++) {
    var task = $(tasks[i])
    var blockHour = task.data("hour");

    if (blockHour < currentHour) {
      task
      .addClass("past")
    } 
    else if (blockHour === currentHour) {
      task
      .addClass("present")
    }
    else {
      task
      .addClass("future")
    }
  }
};

// function that gets the <p>'s id and puts the date as the content
var updateTime = function() {
  // set time = the current time
  var timeNow = moment();
  // format the time to show the month, day year
  var displayTime = timeNow.format("LL");
  // set text content of the <p> equal to the time
  currentDay.text(displayTime);
};

// function that show a running clock of the current time of day on a new line
var clock = function() {
  var timeNow = moment();

  var clockDisplay = timeNow.format("LTS");

  currentTimer.text(clockDisplay);
};


setInterval(updateTime, 1000);
updateTime();

setInterval(clock, 1000);
clock();

hourColor();
