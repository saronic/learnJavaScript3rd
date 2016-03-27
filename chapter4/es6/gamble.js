'use strict';

function rand(m, n) {
	return m + Math.floor((n -m + 1) * Math.random());
}

function randFace() {
	return ['crown', 'anchor', 'heart', 'spade', 'diamond', 'club'][rand(0,5)];
}

var fund = 50;

while (fund > 0 && fund < 100) {
	//bet
	let face = randFace();
	let bet = {face: face, price: rand(1, 5)};
	console.log("bet: " + bet.face + " : " + bet.price);
	//fund-
	fund -= bet.price;
	console.log("sub price: " + bet.price + ", left fund: " + fund);
	for (let i=0; i < 3; i++) {
		let tmpFace = randFace();

		if (tmpFace === bet.face) {
			fund += bet.price;
			console.log("bingo; add prize: " + bet.face + "; fund: " + fund );
		} else {
			console.log("sad; " + tmpFace + " fund: " + fund);
		}
	}

	//iterator 3
}

console.log("*******************");
console.log("fund: " + fund);
