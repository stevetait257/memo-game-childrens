// array that stores the cards to be remembered
const cards = document.querySelectorAll('.card');

const cardsArr = Array.prototype.slice.call(cards);
// [ ...cards ].forEach((card) => {
// 	console.dir(card);
// });
//Loop through cards array and add event listener to each with the callback
//addEventListener to each card

cards.forEach((card) => {
	card.addEventListener('click', turnCard);
});

// set variables for algo
// let hasTurnedCard = false;
let firstCard;
let secondCard;
let gameOver = false;

// shuffle deck

function shuffleCards() {
	cardsArr.forEach(function(card) {
		let j = Math.floor(Math.random() * (i + 1));
		let temp = cardsArr[i];
		cardsArr[i] = cardsArr[j];
		cardsArr[j] = temp;
		console.log(cardsArr[j]);
	});
}
// the game

function turnCard() {
	this.classList.add('turned'); // you always want to do this.
	if (!firstCard) {
		firstCard = this; //if the firstCard didn't exist, set the first card
	} else {
		secondCard = this; //now it's time to compare both cards!!
	}
}

isEqual();

function isEqual() {
	let isTheSameCard = firstCard.dataset.card === secondCard.dataset.card;
	isTheSameCard ? lockCards() : resetCards();
}

function lockCards() {
	console.log('someone called lockCards,Cards match');
}

function resetCards() {
	firstCard.classList.remove('turned');
	secondCard.classList.remove('turned');

	console.log('someone called resetCards, Cards do not match');
}
