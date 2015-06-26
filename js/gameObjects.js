console.log("game objects has loaded.");




/*creates Player & Dealer 
---------------------------------------*/
var initGame = function(){
	player = new Player();
	dealer = new Dealer();
	deck = new Deck();

};


/*Where the magic happens
---------------------------------------*/
var startGame = function(){
	initGame();
	console.log("Game has started");
	var keepPlaying = function(){
			if(player.moneyBank != 0){
				initGame();
			}
		};
};



comparingHands = function(){
	if(player.handValue === dealer.handValue){
		console.log("It's a tie");
	}else if(player.handValue > dealer.handValue){
		console.log("player wins!");
	}else if(player.handValue < dealer.handValue){
			console.log("dealer wins!");
	}
}




// Game will have a dealer which can deal, a player that play, should be an object literal with some behaviors like start game maybe some more, your DOM stuff will live in app.js, which you will add click events and things to the pretty stuff on the page. 

	//dealer.deal(deal.deck.getRandomCard());
	//dealer.hand.dealerHit(dealer.deck.getRandomCard());



