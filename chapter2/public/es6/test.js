'use strict'

const sentence = [
	{subject: 'pub_javascript', verb: "is", object:'great'},
	{subject: 'pub_elephants', verb: 'are', object:'big'},
];

function say({subject, verb, object}) {
	console.log(`${subject} ${verb} ${object}`);
}

for(let s of sentence) {
	say(s);
}