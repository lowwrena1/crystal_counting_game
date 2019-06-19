

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

//-----------------------------------------------
//functions

//-----------------------

//main process
//----click events----
$("#c1").click(function(){
    alert("test");
});
