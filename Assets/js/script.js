
$(document).ready(function () {

  var timeDisplayEl = $('#currentDay');
  var container = $('.container-lg.px-5');
  var past = 'row time-block past';
  var present = 'row time-block present';
  var future = 'row time-block future';
  var arraytime = moment().toArray();

  //--------------------------------------------------------------------------------------
  function displayTime() {
    var rightNow = dayjs().format("dddd, MMMM  YYYY, h:mm:ss a");

    timeDisplayEl.text(rightNow)

  }
  displayTime()
  //---------------------------------------------------------------------------------------

  for (var i = 9; i < 18; i++) {

    // creating the div to contain the text and save button
    var hourLabel = $("<div>").addClass("col-2 col-md-1 hour text-center py-3").text(i);
    var textArea = $("<textarea>").addClass("col-8 col-md-10 description");
    textArea.val(localStorage.getItem(`${i}`));
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


  $('.saveBtn').on("click", function (event) {
    var textValue = $(this).siblings('textarea').val();
    var IdValue = $(this).siblings('div').text();
    localStorage.setItem(IdValue, textValue);

  });
});





