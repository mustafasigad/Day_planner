# Day_planner
This code is responsible for displaying the current date in the header of a webpage and creating time blocks from 9 to 17:00.  Each time block has an hour label, a text area for entering notes, and a save button.

## Displaying the Current Date

The code begins by setting up a variable `timeDisplayEl` to store a reference to the element that will display the current date. It also sets up a variable `container` to store a reference to the element that will contain the time blocks.

The `displayTime()` function is then defined. This function uses the `moment` library to get the current date and time in the format "dddd, MMMM Do YYYY, h:mm:ss a". It then sets the text of `timeDisplayEl` to the current date and time and changes the text color to red.

Finally, the `displayTime()` function is called to display the current date in the header.

## Time Blocks generation

The code uses the `$(document).ready()` function to ensure that the code runs only after the entire page has finished loading.

Inside the `$(document).ready()` function, variables `past`, `present`, and `future` are defined with CSS class names for different time block

The user can start typing on the text aera and result saved in localstorage, unfortunetly i could not manage to get the datastored and make it available when the page is load again.  