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

var pcguess ;
var crystalarr = [];
var count = 0;
var wins = 0;
var losses = 0;

// functions to call
// ------------------

function gamestart () {
    pcguess = Math.floor(Math.random() * 80 + 20);
    $("#randomnum").html("Get to this number: " + pcguess);
    count = 0;
    $("#totalscore").html(count);
    crystalarr.length = 0;
    for (i = 0; i < 4; i++) {
        crystalarr.push(Math.floor(Math.random() * 15 + 1));
        console.log(crystalarr);
    }
}

// clickable functions
// ------------------
$("#crystal_1").click(function() {    
    count += crystalarr[0];
    $("#totalscore").html(count);
    
});

$("#crystal_2").click(function() {
    count += crystalarr[1];
    $("#totalscore").html(count);
    
});

$("#crystal_3").click(function() {
    count += crystalarr[2];
    $("#totalscore").html(count);
    
});

$("#crystal_4").click(function() {
    count += crystalarr[3];
    $("#totalscore").html(count);
    
});

$(".crystal").click(function(){
    if (count === pcguess){
        wins++;
        $("#winscounter").html(wins);
        alert("You guessed correctly!!");
        gamestart();
    }
    
    else if (count > pcguess){
        losses++;
        $("#lossescounter").html(losses);
        alert("You went over!!");
        gamestart();
    }
})

// game process
// ------------------

gamestart();