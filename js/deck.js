console.log("Deck has loaded");


Deck = function(){
  var suit = ["diamonds", "spades", "clubs", "hearts"];
  var value = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];

  this.cards = [];

  this.createDeck = function() {
    for (var i = 0; i < suit.length; i++) {
      for (var v = 0; v < value.length; v++) {
        var card = new Card(suit[i], value[v]);
        this.cards.push(card);

      };
    };
  };
  this.createDeck();
};