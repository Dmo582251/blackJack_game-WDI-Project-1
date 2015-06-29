console.log("game objects has loaded.");




/*Game function 
---------------------------------------*/
var selectedOption;

var game = {
		player: new Player(),
		dealer: new Dealer(),
		deck: new Deck(),
	  initDeal: function(){
			for(var i = 0; i < 2; i++){
				this.player.hand.hit(this.dealer.deal());
				this.dealer.hand.hit(this.dealer.deal());
			}
			this.player.hand.getValue();
			console.log("Players total: " + this.player.hand.value);
		},
	 startGame: function(){
		console.log("Game has started");
		var keepPlaying = function(){
				if(this.player.moneyBank != 0){
					initGame();
				};
			};
	},
	comparingHands: function(){
		if(this.player.hand.value === this.dealer.hand.value){
			alert("It's a tie");
		}else if(this.player.hand.value > this.dealer.hand.value){
			alert("this.player wins!");
		}else if((this.player.hand.value < this.dealer.hand.value) && (this.dealer.hand.value <= 21)){
				alert("dealer wins!");
		}else if((this.player.hand.value < this.dealer.hand.value) && (this.dealer.hand.value > 21)){
			alert("player wins!")
		}
	},
	checkForBust: function(){
		var checkForBust = false;
		console.log("Has entered check for bust");
		if(this.player.hand.value > 21){
			checkForBust === true;

			//CHANGE THIS WITH SOMETHING ELSE
			alert("You lost!!");
		}	
	}
}
	








// Game will have a dealer which can deal, a player that play, should be an object literal with some behaviors like start game maybe some more, your DOM stuff will live in app.js, which you will add click events and things to the pretty stuff on the page. 

	//dealer.deal(deal.deck.getRandomCard());
	//dealer.hand.dealerHit(dealer.deck.getRandomCard());



