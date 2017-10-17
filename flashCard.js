// Flashcard Generator

// npm requirements
var inquirer = require("inquirer");
var basicCard = require("./basicCard");


// User chooses to create flashcards or test themselves on the available topics

	// if create flashcards
		
	    // choose type of card basic(front/back) or cloze(fill in the blank)

	    // if basic 


      	// if cloze


	// if test themselves
		// show list of topics for user to choose from


		// once user chooses, display random question



  		console.log(basicCard.front);
  	
			// user inputs answer


		// check answer 


			// if correct inform user 

				// and display another question


			// if wrong inform user


				// ask if try again or different question


					//  if try again, request user input


					// if different question, 

						// give user previous answer
  						console.log("The answer was: " + basicCard.back);

						// and repeat function to dispaly a random question


/// When no more questions on topic, 

	// ask user for another topic 


	// or end application.

