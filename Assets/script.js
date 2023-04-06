// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements in the html.
$(function () {
  var past = $(".past");
  var present = $(".present");
  var future = $(".future");
  var saveButton = $(".saveBtn")
  var currentDay;
  var today = dayjs().format("M/D/YYYY");
  var timeBlock = $(".time-block")
  var hour = parseInt(dayjs().format("H"))
  var textEl = $(".description");



  console.log(hour)
  console.log(timeBlock.attr("id"))

  saveButton.on("click", function (event) {
    // pointing to the button that was clicked, and then points the value in it sibling with class descrition
    var text = $(this).siblings(".description").val()
    // the id of the timeblock that the button that was clicked
    var timeId = $(this).parent().attr("id")

    // don't have to stringify since not an object and input is a string 
    // setting the key to be the id of the textblock that the user typed in
    // setting the value to be the users input 
    localStorage.setItem(timeId, text)
    // this also works
    // localStorage.setItem(timeId,JSON.stringify(text) )
  })


  // function for setting the class of each hour 
  function hourClass() {
    console.log("is this function running ")
    // iterating through each element with class of time-block
    timeBlock.each(function () {
      // need to compare number to number not to string 
      // substring cuts the string at index 5 and leaves us with just the number of the hour
      var timeHour = parseInt($(this).attr("id").substring(5))
      // console.log(timeHour, hour) check if hour is the same as the parsed substring of the id

      // comparing the current hour to each timeblock id 
      if (timeHour === hour) {
        console.log(timeHour)
        $(this).addClass("present")
        console.log("present")

        console.log(timeHour === hour)

      }
      else if (hour > timeHour) {
        $(this).addClass("past")
      }
      else {
        $(this).addClass("future")
      }
    })

  }



  // calling the function
  hourClass()

  // dont need to parse since never stringifyed 
  // setting the value of each description to the users input
  // saved even through refresh 
  // $("#hour-9 .description").val(JSON.parse(localStorage.getItem("hour-9")))
  $("#hour-9 .description").val(localStorage.getItem("hour-9"))
  $("#hour-10 .description").val(localStorage.getItem("hour-10"))
  $("#hour-11 .description").val(localStorage.getItem("hour-11"))
  $("#hour-12 .description").val(localStorage.getItem("hour-12"))
  $("#hour-13 .description").val(localStorage.getItem("hour-13"))
  $("#hour-14 .description").val(localStorage.getItem("hour-14"))
  $("#hour-15 .description").val(localStorage.getItem("hour-15"))
  $("#hour-16 .description").val(localStorage.getItem("hour-16"))
  $("#hour-17 .description").val(localStorage.getItem("hour-17"))
  $("#hour-18 .description").val(localStorage.getItem("hour-18"))




  // setting the text of the id currentday as the current day 
  $("#currentDay").text(today)
});
