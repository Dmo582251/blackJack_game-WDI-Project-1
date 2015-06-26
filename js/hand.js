console.log("hand.js has loaded");

/* Hand Constructor:
-----------------------------------------*/
var Hand = function() {
  this.cards = [];
  this.value = 0;
  this.blackjack = false;

  //gets the value of player & dealers hand
  this.getValue = function() {
    this.value = 0;
    for (var i = 0; i < this.cards.length; i++) {
    	//looks for the value of face cards and gives them the value of ten
      if(this.cards[i].value === 'K' || this.cards[i].value === 'Q' || this.cards[i].value === 'J'){
        this.value += 10;
        //finds all the normal cards and gives them the same value
      } else if (this.cards[i].value === 'A') {
        if (this.value > 10) {
          this.value += 1;
        }
        //for ace being 11 or 1
        this.value += 11;
      } else if (this.cards[i].value) {
        this.value += this.cards[i].value;
      } 
    }
  };
  //when player chooses to hit
  this.hit = function(card) {
    this.cards.push(card);
    console.log("a card has been pushed");
    this.findHitValue();
    console.log("got the value");


  };

  //MIGHT NOT NEED THIS
  this.findHitValue = function(card){
    console.log("find hit value");

    if(this.cards.value === 'K' || this.cards.value === 'Q' || this.cards.value === 'J'){
        this.value += 10;
        //finds all the normal cards and gives them the same value
      } else if (this.cards.value === 'A') {
        if (this.value > 10) {
          this.value += 1;
        }
        this.value += 11;
        //for ace being 11 or 1    
      } else if (this.cards.value) {
        this.value += this.cards.value;
      };
  };   

   this.deal = function(){
    
    console.log("cards have been added to dealer hands");
    //THIS IS WHERE THE ISSUE IS
    // return this.deck.getRandomCard();
    game.dealer.hand.hit(game.deck.getRandomCard());
  }; 

  //rules for when dealer hits
  this.dealerHit = function(card) {
    if (this.value <= 16) {
      
      this.deal();
      console.log("dealer has to hit");
    }else{
      console.log("dealer can stay");
    }
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
  this.deck = new Deck();
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

  this.playerDeal = function(randomCard){

    //pushes cards into players hand
    player.hand.hand.push(randomCard);
    player.hand.getValue();

    console.log("cards have been added to players hands");
  };

};


/* Dealers Constructor:
----------------------------------------*/
var Dealer = function() {
  this.deck = new Deck();
  this.hand = new Hand();
  this.handValue = 0;
  this.stay = true;

  this.deal = function(){
    
    console.log("cards have been added to dealer hands");
    return this.deck.getRandomCard();

  };

};
