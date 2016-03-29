'use strict';

function rand(m, n) {
	return m + Math.floor((n -m + 1) * Math.random());
}

function randFace() {
	return ['crown', 'anchor', 'heart', 'spade', 'diamond', 'club'][rand(0,5)];
}

var fund = 50;

let round =0;
while (fund > 0 && fund < 100) {
	round++;
	let bets = {crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0};
	let totalBet = rand(1, fund);
	fund -= totalBet;
	if (totalBet == 7) {
		totalBet = fund;
		bets.heart = totalBet;
	} else {  //distribute the totalBet
		let remain = totalBet;
		do {
			let tmpBet = rand(1, remain);
			let tmpFace = randFace();
			bets[tmpFace] = tmpBet;
			remain -= tmpBet;
		} while(remain > 0);
	}
	console.log("round: " + round);
	console.log("\ttotalBet: " + totalBet);
	for (let p in bets) {
		if (bets.hasOwnProperty(p)) {
			console.log('\t bets.' + p + " : " + bets[p]);
		}
	}

	let prize = 0;
	for (let i=0; i < 7; i++) {
		let dieFace = randFace();
		prize += bets[dieFace];
		console.log( i + ": dieface: " + dieFace + " the prize:" + bets[dieFace] + " the round prize: " + prize );
	}

	fund += prize;
	console.log("after round: " + round + ", fund: " + fund);
	//iterator 3
}

console.log("*********over**********");
console.log("fund: " + fund);
