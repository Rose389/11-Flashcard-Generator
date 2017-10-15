var inquirer = require("inquirer");

var front = "";
var back = "";

var createCard = function (){
	inquirer
		.prompt ([
			// get front of card
			{
			name: "question",
			message: "Enter text for front of card.  Either question or definition.",
			type: "input",
			},

			// get back of card
			{
			name: "answer",
			message: "Enter text for the back of the card.  Either answer or vocabulary word.",
			type: "input"
			}
		])
		.then(function(cardText){
			front = cardText.question;
			back = cardText.answer;

			console.log("The front is: " + front);
			console.log("The back is: " + back);
		});
	};

createCard();



module.exports = createCard;