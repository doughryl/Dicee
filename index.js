// Player 1
var randomNum1 = Math.floor(Math.random() * 6) + 1;
console.log('Player 1: ' + randomNum1);
var randomImg1 = "images/dice" + randomNum1 + ".png";
$("img").eq(0).attr("src", randomImg1);


/* 
1. Math.random(): function returns a float random number in the range 0 (inclusive) to 1 (exclusive).
2. Math.random() * 6: multiplies the random number by 6, which makes the range from 0 to 6 (exclusive).
3. Math.floor(Math.random() * 6): Math.floor() function rounds down the result to the nearest integer, range 0 to 5 (inclusive).
4. Math.floor(Math.random() * 6) + 1: Adding 1 to the result shifts the range to be between 1 and 6 (inclusive).
*/



// Player 2
var randomNum2 = Math.floor(Math.random() * 6) + 1;
console.log('Player 2: ' + randomNum2);
var randomImg2 = "images/dice" + randomNum2 + ".png";
$("img").eq(1).attr("src", randomImg2);

/*
1. Manipulates the HTML (DOM) by selecting the first <img> (image) element in the document.
2. Sets the src attribute of that selected image element to the value of randomImg1. 
  This changes the source (URL) of the image to the value stored in the variable randomImg1.
*/



// Winner
if (randomNum1 > randomNum2) {
    $("h1").html("🚩Player 1 Wins");
    console.log('🚩Player 1 Wins');
} else if (randomNum2 > randomNum1) {
    $("h1").html("Player 2 Wins🚩");
    console.log('🚩Player 2 Wins');
} else {
    $("h1").html("Draw!");
    console.log('Draw!');
}
