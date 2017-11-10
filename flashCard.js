// Flashcard Generator

// ------- I think a lot of this code needs to be contained within seperate functions that get called. ------
	// ------ I am just not sure how, what, when, yadda yadda.  This assignment has been very difficult for me.
	// I realize that it probably isn't anywhere near as complicated as I am making it, but this is how my brain works,
	// and I am not sure how to simplify my thought processes.

// npm requirements
var inquirer = require("inquirer");
var basicCard = require("./basicCard");


// User chooses to create flashcards or test themselves on the available topics
inquirer
	.prompt ([
		{
		name: "Action",
		message: "What would you like to do?",
		choices ["Create a new card.", "Test myself."]
		},
	])
	.then(function(ansA){
		if (ans.action === "Create a new card." ) {
			createCard();
		} else {
			testMyself();
		}
	});

	// if create flashcards
	function createCard() {
	    // choose type of card basic(front/back) or cloze(fill in the blank)
		inquirer
			.prompt ([
				{
				name: "create",
				message: "Pick a card style.",
				choices: ["Vocabulary.", "Fill in the blank.", "Question and answer."],
				},
			])
	    // if cloze 
			.then(function(ansC){
				if (ans.create === "Fill in the blank." ) {
					clozeCard();
				}

      	// if basic
				else {
					basicCard();
				}
			});
     }

	// if test themselves
	function testMyself() {
		// show list of topics for user to choose from
		inquirer
			.prompt ([
				{
				name: "topic",
				message: "Pick a topic.",
				choices ["Create a new card.", "Test myself."]
				},
			])
			.then(function(ansT){	 
				if (ans.action === "Create a new card." ) {
					createCard();
				} else {
					testMyself();
				}
			});

		// once user chooses, display random question

			// retrieve topic array


			// generate random number within array.length


			// print correct question
			if (randomNumber === array[position]) {
				console.log(basicCard.front);
  			}
			// user inputs answer


		// check answer 
		if (answer) {

			// if correct inform user 
			console.log("You were correct.");

				// and display another question

		}
			// if wrong inform user
			if (!answer) {

				// ask if try again or different question


					//  if try again, request user input


					// if different question, 

						// give user previous answer
  						console.log("The answer was: " + basicCard.back);

						// and repeat function to dispaly a random question
			}


/// When no more questions on topic, 

	// ask user for another topic 


	// or end application.

