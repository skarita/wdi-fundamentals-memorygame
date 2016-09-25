// set variable cards as array
var cards = ['queen', 'queen', 'king', 'king'];
// set variable cards in play
var cardsInPlay = [];
// find and set board to a variable
var board = document.getElementById('game-board');

// function that creates board
var createBoard = function() {
	for (var i = 0; i < cards.length; i += 1) {
		// Create div element to be used as cards
		var cardElement = document.createElement('div');
		// class of card to cardElement to use link for styling
		cardElement.className = 'card';
		// Set 'card-data' to card element in array
		// data attributes stores data about element, like king, queen
		cardElement.setAttribute('data-card', cards[i]);
		// when card is clicked, function isTwoCards will be executed
		cardElement.addEventListener('click', isTwoCards);

		// Append card to the board
		board.appendChild(cardElement);
		board.appendChild(cardElement);
	}
}

// Checks to see if there are cards in play
var isTwoCards = function() {
	// add card to array of cards in play
	cardsInPlay.push(this.getAttribute('data-card'));
	// show card's image
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='img/king.png'>"; // king
	} else {
		this.innerHTML = "<img src='img/queen.png'>"; // queen
	}
	// Check to see if 2 cards in play match
	if (cardsInPlay.length === 2) {
		// pass the cardsInPlay as an argument to IsMatch function
		isMatch(cardsInPlay);
		// clear cards in play array for next try
		cardsInPlay = [];
	}
}

// function to find if 2 cards match or not
var isMatch = function(cards) {
	// alert winning message
	if (cards[0] === cards[1]) {
		alert("You found a match!");
	} else {
		// No match message
		alert("Sorry, try again.");
	}
}

createBoard();
