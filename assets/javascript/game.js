

/* var randomNumber = Math.floor(Math.random() * (120 - 1)) + 1
console.log(randomNumber);
$("#number-to-guess").text(randomNumber);

var counter = 0;

var numberOptions = []; //the four crystals values

for (var i = 0; i < numberOptions.length; i++) {//number + numberOptions[i]
}
var imageCrystal = $("<img>"); //gives crystals class of img

imageCrystal.addClass("crystal-image"); */


//global variables

//crystal variables
$(document).ready(function() {

    var c1 = 0;
    var c2 = 0;
    var c3 = 0;
    var c4 = 0;
    //scores (current & target)
    var currentScore = 0;
    var targetScore = 0;
    //wins and losses
    var winsCount = 0;
    var lossCount = 0;

    var crystal = {};
    crystal.one = {};
    crystal.two = {};
    crystal.three = {};
    crystal.four = {};
    //-----------------------------------------------
    //functions
    var getRandom = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) +min;
    }
    var startGame = function() {
        //reset current
        currentScore = 0;
        //target score between 19-120 (showing options outside of 19-20 not sure why???)
        targetScore = getRandom(19, 120);
        //set different values for each crystal
        crystal.one.value = getRandom (1 , 12);
        crystal.two.value = getRandom (1 , 12);
        crystal.three.value = getRandom (1 , 12);
        crystal.four.value = getRandom (1 , 12);
        //change html to refleck the changes
    }
    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);
    //-----------------------
    console.log("Target Score: " + targetScore);
    //responding to clicks on the crystals
    var addValues = function(crystal) {
        currentScore = currentScore + crystal.value; 
        $("#currentScore").html(currentScore);
        checkWin();
        console.log("your score: " + currentScore);
    }
    //see if user won
    var checkWin = function() {
        if(currentScore > targetScore){ alert("Sorry You Lost...");
            console.log ("you lost");
            lossCount++;
            $("#lossNum").html(lossCount);
            startGame();
        }
        else if(currentScore === targetScore){
            alert("Congrats!! You've Won!!!");
            console.log("you won!");
            winCount++;
            $("#winNum").html(winCount);
            startGame();
        }
    }
    //main process
    //starts the game the first time.

    $("#c1").click(function(){
        addValues(crystal.one)
    });
    $("#c2").click(function(){
        addValues(crystal.two)
    });
    $("#c3").click(function(){
        addValues(crystal.three)
    });
    $("#c4").click(function(){
        addValues(crystal.four)
    });

    startGame();
});
