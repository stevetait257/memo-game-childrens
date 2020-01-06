// array that stores the cards to be remembered
const cards = document.querySelectorAll('.card');

// loop through cards and add click event
//listener with the handleUserInput callback
cards.forEach((card) => {
	card.addEventListener('click', handleUserInput);
});

// spread nodelist to cardsArr
const cardsArr = Array.prototype.slice.call([...cards]);


// set variable 
let firstCard;

// shuffle deck

(function shuffle() {
	cards.forEach(card => {
		let position = Math.floor(Math.random() * 12)
		card.style.order = position;
	});
})();
// the game

function isEqual(cardA, cardB) {
	isTheSameCard = cardA.dataset.beer === cardB.dataset.beer;
	return isTheSameCard;
}

function lockCards(cardsToLock) {
	cardsToLock.forEach((card) => {
		card.removeEventListener('click', handleUserInput);
	});
	firstCard = null;
	console.log('someone called lockCards,Cards match');
};

function handleUserInput() {
	this.classList.add('turned'); // you always want to do this.
	if (!firstCard) {
		firstCard = this; //if the firstCard didn't exist, set the first card
	} else {
		currentCard = this; //now it's time to compare both cards!
		isEqual(firstCard, currentCard);
		isTheSameCard ? lockCards([firstCard, currentCard]) : resetCards([firstCard, currentCard]);
	}
}

function resetCards(cardsToReset) {
	cardsToReset.forEach((card) => {
		setTimeout(() => {
			card.classList.remove('turned')
		}, 1000);
	});
	firstCard = null;
	console.log('someone called resetCards, Cards do not match');
}
