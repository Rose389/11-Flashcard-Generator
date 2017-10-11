//* Create a new file named `BasicCard.js`:

  //*This file should define a Node module that exports a constructor for creating basic flashcards, e.g.:
    //`module.exports = BasicCard;`

  //* The constructor should accept two arguments: `front` and `back`.
function  basicCard(front, back){
  //* The constructed object should have a `front` property that contains the text on the front of the card.
  	this.front = front,
  //* The constructed object should have a `back` property that contains the text on the back of the card.
  	this.back = back,
  	this.printFront = function(){
  		console.log(this.front);
  	},
  	this.printBack = function(){
  		console.log(this.back);
  	}
}
  module.exports = BasicCard;