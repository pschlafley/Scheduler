var tasks = $(".selected-hour");
var saveBtn = $(".saveBtn");
var currentDay = $("#currentDay");
var currentTimer = $("#timer");

var hourArr = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]

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

hourColor();



// function that gets the <p>'s id and puts the date as the content
  var updateTime = function() {
  // set time = the current time
  var timeNow = moment();
  // format the time to show the month, day year
  var displayTime = timeNow.format("LL");
  // set text content of the <p> equal to the time
  currentDay.text(displayTime);
};
updateTime();



// function that shows a running clock of the current time of day on a new line
var clock = function() {
  var timeNow = moment();

  var clockDisplay = timeNow.format("LTS");

  currentTimer.text(clockDisplay);
};

setInterval(clock, 1000);
clock();



$(".saveBtn").click(function(event) {
  var target = event.currentTarget.previousElementSibling.id;
  var userInput = $("#" + target).val().trim();
  localStorage.setItem(target, JSON.stringify(userInput));
  console.log(localStorage);
});

function onLoad() {
  for (var i = 0; i < hourArr.length; i++) {
    var hour = hourArr[i];
    var value = JSON.parse(localStorage.getItem("text-area-" + hour));
    $("#text-area-" + hour).val(value);
  }
};

onLoad();



