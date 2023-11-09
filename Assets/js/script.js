
// TODO: Add code to display the current date in the header of the page.
$(document).ready(function () {

  var timeDisplayEl = $('#currentDay');
  var container = $('.container-lg.px-5');
  var past = 'row time-block past';
  var present = 'row time-block present';
  var future = 'row time-block future';
  var arraytime = moment().toArray();
  //--------------------------------------------------------------------------------------
  function displayTime() {
    var rightNow = dayjs().format("dddd, MMMM Do YYYY, h:mm:ss a");
    timeDisplayEl.text(rightNow)
  }
  displayTime()
  //---------------------------------------------------------------------------------------



  var saveText = JSON.parse(localStorage.getItem('hoursBlock'));

  if (saveText !== null) {
    console.log(saveText.IdValue)
    console.log(saveText.textValue)
    //document.getElementById('textarea').textContent = saveText.textValue;
  }

  for (var i = 9; i < 25; i++) {

    // creating the div to contain the text and save button
    var hourLabel = $("<div>").addClass("col-2 col-md-1 hour text-center py-3").text(i);
    var textArea = $("<textarea>").addClass("col-8 col-md-10 description");
    var saveButton = $("<button>").addClass("btn saveBtn col-2 col-md-1").attr("aria-label", "save").append("<i class='fas fa-save' aria-hidden='true'></i>");


    // adding class to the container 
    if (arraytime[3] == i) {
      var hourBlock = $("<div>").attr("id", "hour-" + i).addClass(present);;
    } else if (arraytime[3] < i) {
      var hourBlock = $("<div>").attr("id", "hour-" + i).addClass(past);;
    }
    else if (arraytime[3] > i) {
      var hourBlock = $("<div>").attr("id", "hour-" + i).addClass(future);;
    }
    // append elements to DOM 
    hourBlock.append(hourLabel, textArea, saveButton);
    container.append(hourBlock)

  }

  //console.log($('.saveBtn'))
  // event listener      
  $('.saveBtn').on("click", function (event) {

    //console.log(event.target.previousSibling.previousSibling)
    // console.log($(this).siblings('textarea').val())
    // console.log($(this).siblings())
    // console.log($(this).siblings('div').text())
    const hoursBlock = {
      textValue: event.target.previousSibling.value,
      IdValue: $(this).siblings('div').text()
    };

    localStorage.setItem('hoursBlock', JSON.stringify(hoursBlock))

  });
});



