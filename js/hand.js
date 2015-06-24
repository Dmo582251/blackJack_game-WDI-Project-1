console.log("hand.js has loaded");

var myDeck = new Deck();

/* Players Objects:
----------------------------------------*/
var player = {
	 hand: [], 
	 handValue: 0,
	 moneyBank: 500,
	 betBank: 0,
	 stay: false,
	 blackJack: false,


	blackJackSearch : function(){
		if(handValue === 21){
			blackJack = true;
		}else{
			blackJack = false;
		};
	},

	//figuring out players hand value
	handValue : function(){
		for(var i = 0; i < (this.hand).length; i++){
			(handValue += (this.hand[i].value));
		};
		return;
	},

	//this should get cards to players hand
	deal : function(){
		//this will randomly chose two cards from myDeck
    var rand = myDeck[Math.floor(Math.random() * myDeck.length)];
		//put in randomm for pop once figure out shuffle
		(this.hand.push(myDeck.cards.pop()));

	},

	//COMEBACK to this for amount
	bet : function(amount){
		this.betBank += amount
		this.moneyBank -= amount
	},
	
	hit : function(){
		//takes a card from deck and gives it to player
		this.hand.push(myDeck.cards.pop());
	},

	stay : function(){

	}
};


/* Dealers Objects:
----------------------------------------*/
var dealer = {
	 hand: [],
   handValue: 0,
	 stay: true,
	 blackJack: false,

	blackJackSearch : function(){
		if(handValue === 21){
			blackJack = true;
		};
	},

	//finding dealer hand value
	handValue : function(){
		for(var i = 0; i < (this.hand).length; i++){
			(handValue += (this.hand[i].value));
		};
		return;
	},

	deal : function(){
		//this will randomly chose two cards from myDeck
    var rand = myDeck[Math.floor(Math.random() * myDeck.length)];

		//!! put random for pop once I randomize
		this.hand.push(myDeck.cards.pop());
	},

	hit : function(){
		if(this.handValue <= 16){
			this.hand.push(myDeck.pop());
		};
	},

}






