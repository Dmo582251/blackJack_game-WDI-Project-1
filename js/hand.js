console.log("hand.js has loaded");

/* Hand Object:
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
      if (this.hand[i].value === 'K' || this.hand[i].value === 'Q' || this.hand[i].value === 'J') {
        this.value += 10;
        //finds all the normal cards and gives them the same value
      } else if (this.hand[i].value) {
        this.value += this.hand[i].value;
        //for ace being 11 or 1
      } else if (this.hand[i].value === 'A') {
        if (this.value > 10) {
          this.value += 1;
        }
        this.value += 11;
      }
    }
  };
  //when player chooses to hit
  this.hit = function(card) {
    this.cards.push(card)
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

/* Players Objects:
----------------------------------------*/
var Player = function() {
  this.hand = new Hand();
  this.moneyBank = 500;
  this.betBank = 0;
  this.stay = false;
  
  //Amount is what user puts in
  this.bet = function(amount) {
    this.betBank += amount
    this.moneyBank -= amount
  };
};


/* Dealers Objects:
----------------------------------------*/
var Dealer = function() {
  this.deck = new Deck();
  this.hand = new Hand();
  this.handValue = 0;
  this.stay = true;

  this.deal = function() {
    //will use the deck to give random cards to itself and to any players playing using the getrandom card function
    // and the getcard function of a hand, will deal the approprate amount of cards when doing an inital deal, 



  };
}