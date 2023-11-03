
 // TODO: Add code to display the current date in the header of the page.

var timeDisplayEl = $('#currentDay');
var container = $('.container-lg.px-5');
function displayTime() {
var rightNow = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
timeDisplayEl.text(rightNow).css('color','red');
}
displayTime()




$(document).ready(function(){
  var past='row time-block past';
  var present='row time-block present';
  var future='row time-block future';
  var arraytime= moment().toArray(); 
  var hourBlock=[]
  
     
     for(var i = 9; i < 18; i++) {
          
      // creating the div to contain the text and save button
    hourLabel = $("<div>").addClass("col-2 col-md-1 hour text-center py-3").text(i);
    console.log(typeof hourLabel)
    textArea = $("<textarea>").addClass("col-8 col-md-10 description");
    saveButton = $("<button>").addClass("btn saveBtn col-2 col-md-1").attr("aria-label", "save").html("<i class='fas fa-save' aria-hidden='true'></i>");
      
  
     // adding class to the container to reflect the date and changes
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


     saveButton.on( "click", function(event) {

      var textValue=event.target.previousElementSibling.value;
      var idValue=event.target.parentElement.id
      localStorage.setItem(idValue,textValue)
           } );
            }
          

});
