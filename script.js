//Today's date
var todayDate = dayjs().format('dddd, MMM D YYYY');
$("#currentDay").html(todayDate);

//Save Button listener
$(".saveBtn").on("click", function () {
  // Get 'description' values using jQuery
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  //Save to local storage
  localStorage.setItem(time, text);
})

function timeblockColor() {
  //Track number of hours and loop over time blocks
  var timeNow = dayjs().hour();
  $(".time-block").each(function () {
    var currentHour = parseInt($(this).attr("id"));

    if (currentHour > timeNow) {
      $(this).addClass("future");
    }
    else if (currentHour === timeNow) {
      $(this).addClass("present");
    }
    else {
      $(this).addClass("past");
    }
  })
};

//Get item from local storage if any exists
$("#hour-8 .description").val(localStorage.getItem("hour-8"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

timeblockColor();
