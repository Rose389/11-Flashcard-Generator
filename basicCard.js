//* Create a new file named `BasicCard.js`:

  //*This file should define a Node module that exports a constructor for creating basic flashcards, e.g.:
    //`module.exports = BasicCard;`

var inquirer = require("inquirer");

var front = "";
var back = "";
var topic = "";

var createCard = function (){
  inquirer
    .prompt ([
      // get topic
      {
        name: "topic",
        message: "Choose a topic.",
        choices: ["Baking", "States", "Anatomy"], 
      },
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
      topic = cardText.topic;

      console.log("The front is: " + front);
      console.log("The back is: " + back);
    });
  };

  //* The constructor should accept two arguments: `front` and `back`.
var basicCard = function(){

    createCard();
  //* The constructed object should have a `front` property 
    // that contains the text on the front of the card.
  	this.front = front;

  //* The constructed object should have a `back` property 
    // that contains the text on the back of the card.
  	this.back = back;


};

var basicDeck = function(){
    this.topic = topic;
    this.cards = [];

        // enter front question or definition
        // enter back answer

        // create new card
        this.addBasic = function(front, back) {
          this.cards.push(new basicCard(front, back));
        };

    };

basicDeck();
console.log(cards.length);

module.exports = basicCard;