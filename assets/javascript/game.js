// alert("JS is linked!");

/* Psuedo Code
------------------
Game Starts on load/refresh
PC chooses random number to guess
PC chooses random values for crystals
    assigns those values
User clicks crystals to play
    every click adds to total score
        if total score === pcguess
            user wins++
                reset to line 6
        else
            user losses++
                reset to line 6

*/

// global variables
// ------------------

var pcguess;
var crystalarr = [];
var count = 0;
var wins = 0;
var losses = 0;

// functions to call
// ------------------



// clickable functions
// ------------------
$("#crystal_1").click(function() {
    alert("Clickable")
});

$("#crystal_2").click(function() {
    alert("Clickable")
});

$("#crystal_3").click(function() {
    alert("Clickable")
});

$("#crystal_4").click(function() {
    alert("Clickable")
});

// game process
// ------------------