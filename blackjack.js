var spades = "\u2660";
var clubs= "\u2663";
var hearts = "\u2665";
var diams = "\u2666";
var cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits = [spades, clubs, hearts, diams];
var deck = [];

for (i = 0; i < cards.length; i++) {
	for(n = 0; n < suits.length; n++) {
		var x = cards[i] + suits[n];
		var y = deck.length;
		deck.push(x);
		if(cards[i] === 2 || cards[i] === 3 || cards[i] === 4 || cards[i] === 5 || cards[i] === 6 || cards[i] === 7 || cards[i] === 8 || cards[i] === 9 || cards[i] === 10){
			deck[deck[y]] = cards[i];
		}
		else if (cards[i] === "A") {
			deck[deck[y]] = 1;
		}
		else {
			deck[deck[y]] = 10;
		}
	}
}

for (z = 0; z < 17; z++) {
	var dl = deck.length;

	do {
		var num1 = Math.floor(Math.random()*dl);
		var num2 = Math.floor(Math.random()*dl);
		var num3 = Math.floor(Math.random()*dl);
	} while (num1 === num2 && num2 === num3 && num3 === num1);

	var value = deck[deck[num1]] + deck[deck[num2]] + deck[deck[num3]];
	console.log(deck[num1], deck[num2], deck[num3]);

	if (value < 21) {
		console.log(value);
	}
	else if (value === 21) {
		console.log("Blackjack!");
	}
	else if (value > 21) {
		console.log("BUST");
	}
	deck.splice(deck.indexOf(deck[num1]), 1);
	deck.splice(deck.indexOf(deck[num2]), 1);
	deck.splice(deck.indexOf(deck[num3]), 1);
}
