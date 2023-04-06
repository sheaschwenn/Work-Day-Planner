// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
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


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  console.log(hour)
  console.log(timeBlock.attr("id"))
  saveButton.on("click",function (event) {
    var text = $(this).siblings(".description").val()
    var timeId = $(this).parent().attr("id")
    // console.log(button.prev().val())
  //  console.log(unique)
  //  console.log(button)
    // need to point to the text area 
    // how can use this to point to the unique id for each time block
    // need this to be the key so that when i getitem i can get item for that same timeblock
      //  localStorage.setItem("toDo", $(this).attr("id").text())
      // create an object that creates a new key for each id and then the associated string get paired with it 
      localStorage.setItem(timeId,text )
      // localStorage.setItem(timeId,JSON.stringify(text) )
  })



  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  function hourClass() {
    console.log("is this function running ")

    timeBlock.each(function () {
      // need to compare number to number not to string 
      // substring cuts the string at index 5 and leaves us with just the number of the hour
      var timeHour = parseInt($(this).attr("id").substring(5))
      console.log(timeHour , hour)
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




  hourClass()


  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  // timeBlock.each(function(){
  //   localStorage.setItem($(this.attr("id").text))

  // })
  // $("#hour-9 .description").val(JSON.parse(localStorage.getItem("hour-9")))
  $("#hour-9 .description").val(localStorage.getItem("hour-9"))
//  .text($(this))


  // TODO: Add code to display the current date in the header of the page.
  $("#currentDay").text(today)
});
