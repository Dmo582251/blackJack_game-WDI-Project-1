console.log("hand.js has loaded");

/* Hand Constructor:
-----------------------------------------*/
var Hand = function() {
  this.hand = [];
  this.value = 0;
  this.blackjack = false;

  //gets the value of player & dealers hand
  this.getValue = function() {
    this.value = 0;
    for (var i = 0; i < this.hand.length; i++) {
    	//looks for the value of face cards and gives them the value of ten
      if(this.hand[i].value === 'K' || this.hand[i].value === 'Q' || this.hand[i].value === 'J'){
        this.value += 10;
        //finds all the normal cards and gives them the same value
      } else if (this.hand[i].value === 'A') {
        if (this.value > 10) {
          this.value += 1;
        }
        //for ace being 11 or 1
        this.value += 11;
      } else if (this.hand[i].value) {
        this.value += this.hand[i].value;
      } 
    }
  };
  //when player chooses to hit
  this.hit = function(card) {
    this.hand.push(card);
    console.log("a card has been pushed");
    this.findHitValue();
    console.log("got the value");


  };

  //MIGHT NOT NEED THIS
  this.findHitValue = function(){
    console.log("find hit value");
    if(this.hand.value === 'K' || this.hand.value === 'Q' || this.hand.value === 'J'){
        this.value += 10;
        //finds all the normal cards and gives them the same value
      } else if (this.hand.value === 'A') {
        if (this.value > 10) {
          this.value += 1;
        }
        this.value += 11;
        //for ace being 11 or 1    
      } else if (this.hand.value) {
        this.value += this.hand.value;
      };
  };    

  //rules for when dealer hits
  this.dealerHit = function(card) {
    if (this.value <= 16) {
      this.hit(card);
    };
    //searches for blackjack
    this.blackJackSearch = function() {
      if (this.value === 21) {
        this.blackJack = true;
      } else {
        this.blackJack = false;
      };
    };
  };
};

/* Players Constructor:
----------------------------------------*/
var Player = function() {
  this.hand = new Hand();
  this.moneyBank = 500;
  this.betBank = 0;
  this.stay = false;
  

  //Amount is what user puts in
  this.bet = function(amount) {
    console.log("player.bet is running");
    
    this.betBank += amount
    console.log(this.betBank);
    this.moneyBank -= amount
    console.log("Players bet = " + this.betBank + " and players money Bank = " + this.moneyBank)
  };
};


/* Dealers Constructor:
----------------------------------------*/
var Dealer = function() {
  this.deck = new Deck();
  this.hand = new Hand();
  this.handValue = 0;
  this.stay = true;

  this.deal = function(randomCard){

    //pushing cards into dealer hand
    this.hand.hand.push(randomCard);
    this.hand.getValue();
    //pushes cards into players hand
    player.hand.hand.push(randomCard);
    player.hand.getValue();
    console.log("cards have been added to dealer and players hands");
    //console.log(this.hand[0].value);
    //console.log(this.hand[1].value);
    
  };

};