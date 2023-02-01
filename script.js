// You need to write code that wraps all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.


var saveBtn = $(".saveBtn");
var timeBlock = $(".time-block");
var description = $(".description");
var currentDay = $("#currentDay");
var currentMoment = moment();
var currentHour = hour();

function updateTime() {
  for (var i = 0; i < timeBlock.length; i++) {
    var id = $(timeBlock[i]).attr("id");
    if (id < currentHour) {
      $(timeBlock[i]).addClass("past");
    } else if (id > currentHour) {
      $(timeBlock[i]).addClass("future");
    } else {
      $(timeBlock[i]).addClass("present");
    }
  }

  for (var i = 0; i < timeBlock.length; i++) {
    var id = $(timeBlock[i]).attr("id");
    var savedDescription = localStorage.getItem(id);
    $(timeBlock[i]).children(".description").val(savedDescription);
  }
}
console.log(updateTime);

function moment () {
    for (var i = 0; i < timeBlock.length; i++) {
        var id = $(timeBlock[i]).attr("id");
        if (id < currentHour) {
            $(timeBlock[i]).addClass("past");
        } else if (id > currentHour) {
            $(timeBlock[i]).addClass("future");
        } else {
            $(timeBlock[i]).addClass("present");
        }
    }
}
console.log(moment);

function hour () {
    for (var i = 0; i < timeBlock.length; i++) {
        var id = $(timeBlock[i]).attr("id");
        var savedDescription = localStorage.getItem(id);
        $(timeBlock[i]).children(".description").val(savedDescription);
    }
}
console.log(hour);

saveBtn.on("click", function() {
  var id = $(this).attr("id");
  var desc = $(this).siblings(".description").val();
  localStorage.setItem(id, desc);
});
console.log(saveBtn);

currentDay.text(currentMoment.format("dddd, MMMM Do"));
console.log(currentDay);

updateTime();






// TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  