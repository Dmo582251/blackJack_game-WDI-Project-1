console.log("Deck has loaded");


var Deck = function(){
  var suit = ["Diamonds", "Spades", "Clubs", "Hearts"];
  var value = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  this.cards = [];

  //creates deck
  this.createDeck = function() {
    for (var i = 0; i < suit.length; i++) {
      for (var v = 0; v < value.length; v++) {
        //var card = new Card(suit[i], value[v]);

      // for automatic link to image
      var image = value[v]+'_'+'of'+'_'+suit[i]+'.png';

     // push new card object into card array
      this.cards.push(new Card(suit[i], value[v], image));
        
      //this.cards.push(card);

      };
    };
  };

  //grabs random cards from the deck
  this.getRandomCard = function(){
    //this will randomly chose two cards from myDeck
    var randomNum = Math.floor(Math.random() * (this.cards.length));
    //takes random card and removes and returns it
    var randomCard = this.cards.splice(randomNum, 1);
    console.log(randomCard);
    return randomCard[0];
  },
  this.createDeck();
};