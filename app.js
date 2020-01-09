// array that stores the cards to be remembered
const cards = document.querySelectorAll('.card');

// loop through cards and add click event
//listener with the handleUserInput callback
(function setup() {
	cards.forEach((card) => {
		card.addEventListener('click', handleUserInput);
	});
})();

// spread nodelist to cardsArr
const cardsArr = Array.prototype.slice.call([...cards]);

let firstCard;
let pausePlay;

(function shuffle() {
	cards.forEach(card => {
		let position = Math.floor(Math.random() * 12)
		card.style.order = position;
	});
})();

function isEqual(cardA, cardB) {
	pausePlay = true;
	isTheSameCard = cardA.dataset.beer === cardB.dataset.beer;
	return isTheSameCard;
}

function lockCards(cardsToLock) {
	cardsToLock.forEach((card) => {
		card.removeEventListener('click', handleUserInput);
	});
	firstCard = null;
	pausePlay = false;


	console.log('someone called lockCards,Cards match');

};

function handleUserInput() {
	if (pausePlay) {
		return;
	}
	this.classList.add('turned');
	if (this === firstCard) return
	if (!firstCard) {
		firstCard = this;
	} else {
		const currentCard = this;

		isEqual(firstCard, currentCard);

		isTheSameCard ? lockCards([firstCard, currentCard]) : resetCards([firstCard, currentCard]);

	}
}

function resetCards(cardsToReset) {
	pause();
	cardsToReset.forEach((card) => {
		setTimeout(() => {
			resume();
			card.classList.remove('turned');

		}, 1000);
	});
	firstCard = null;
	console.log('someone called resetCards, Cards do not match');
}

// cards.forEach((card) => {
// 	card.addEventListener('click', handleUserInput);
// });

function pause() {
	pausePlay = true;
}

function resume() {
	pausePlay = false;
}