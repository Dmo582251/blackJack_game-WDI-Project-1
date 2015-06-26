console.log("card has loaded");

var Card = function(suit, value, image){
	this.suit = suit;
	this.value = value;
	this.image = "cards/" + image;
};