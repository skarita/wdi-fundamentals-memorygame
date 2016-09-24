// var cardOne = 'king';
// var cardTwo = 'queen';
// var cardThree = 'king';
//var cardFour = 'queen';

/*
if (cardOne === cardTwo) {
	alert("You found a match!");
	} else {
		alert("Sorry, try again.");
}

if (cardOne === cardThree) {
	alert("You found a match!");
	} else {
		alert("Sorry, try again.");
}

if (cardOne === cardFour) {
	alert("You found a match!");
	} else {
		alert("Sorry, try again.");
}

if (cardTwo === cardThree) {
	alert("You found a match!");
	} else {
		alert("Sorry, try again.");
}

if (cardTwo === cardFour) {
	alert("You found a match!");
	} else {
		alert("Sorry, try again.");
}

if (cardThree === cardFour) {
	alert("you found a match!");
	} else {
		alert("Sorry, try again.")
}
*/
// Find and set board to a variable
var board = document.getElementById('game-board');

// function that creates board
function createBoard() {
	// loop through and create card elements on board
	for (var i = 0; i < cards.length; i += 1) {
		// Create div element to be used as cards
		var cardElement = document.createElement('div');
		// class of card to cardElement
		cardElement.className = 'card';
		// Set 'cardInfo' to card element in array
		cardElement.setAttribute('cardInfo', cards[i])
		// cardInfo can be King, Queen etc
		// Append card to the board
		board.appendChild(cardElement);
	}
}

createBoard();
