var randomnumber = Math.floor (Math.random()*100); 
var winnumber = 0;
var losenumber = 0;
var userscore = 0;
// Add to HTML
$(document).ready(function(){
    $(".tarNum").text(randomnumber);
    $(".playNum").text(userscore);
    $(".winNum").text(winnumber);
    $(".lossNum").text(losenumber);


    $('#CA').attr("value", getRandomValue());

    console.log($('#CA').attr("value"))

    // $( ".CrystalA" ).each(function( index ) {
    //    $(this).attr(("rocksval", getRandomValue()) 
    //   });
    // })

});

function getRandomValue () {
    return Math.floor((Math.random() * 12) + 1);
}

// New Variable for each nmber for our crystal
//Put that number into our image tag
// Litsen for a user click, if that user clicks on the crystal we're gonna add that crystal number to the score
//Evaluate or check or if else wether the user score is equal to or grater than the random number if grater they lose, if its exactly they win
function winner() {
    alert("You Won!!");
    wins++;
    $("#numberWins").text(wins);
    reset();
}

function loser() {
    alert("You Lose!!");
    losses++;
    $("#numberLosses").text(losses);
    reset();
}