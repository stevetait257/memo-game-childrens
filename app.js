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
let hasTurnedCard = false;
let firstCard;
let secondCard;

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
	if (firstCard) {
		hasTurnedCard = false;
		firstCard = this;
	}
	if (!firstCard) {
		hasTurnedCard = true;
		secondCard = this;
		this.classList.add('turned');
	}
}
