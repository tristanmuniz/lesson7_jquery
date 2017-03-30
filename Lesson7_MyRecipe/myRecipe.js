/*global $*/
/*global "slow"*/
/*
Program Name: Recipe Display Application
Author: TristanMuniz
Date: March 28, 2017
Filename: script.js
*/

//displays the next element after the current target
function display(event) {
    $(event.currentTarget).next().fadeIn("fast");
}//end of display

//attach event listener to h3 elements to invoke display function when clicked
$("h3").click(display);

//change the background color when mouse hovers over h3 
$("h3").hover(function(){
    $(this).css("background-color", "blue"); 
    }, function(){
    $(this).css("background-color", "blue");
});