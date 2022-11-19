

var currentDay = $('#currentDay');
var timeBlockEl = $('.time-block');

$(function () {
  
  //Display of current date
  var presentDate = dayjs().format('dddd, MMMM D, YYYY');
  console.log(presentDate);
  currentDay.append(presentDate);
  console.log(currentDay);


//Function to change color based on past present future
  function colorChange() {

  var currentTime = dayjs().hour();
  console.log("It is " + currentTime + " Hour");

  $(".time-block").each(function () {
    var plannerTime = $(this).attr("id").split("hour");
    
    
    console.log("currently: " + currentTime + "compared to: " + plannerTime);
    
    if (currentTime > plannerTime) {
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("past");
    } else if (currentTime == plannerTime) {
    $(this).removeClass("past");
    $(this).removeClass("future");
    $(this).addClass("present");
  } else if (currentTime < plannerTime) {
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
  }
})
  

}

colorChange();

//Setting to local storage 
$(".saveBtn").on("click", function (){

  var text = $(this).siblings(".description").val();
  var hour = $(this).parent().attr("id");

  localStorage.setItem(hour, text);

})

//retrieving text from local storage
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

  

});
