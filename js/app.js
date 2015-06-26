console.log("app.js has loaded");

$(function(){
	
	//////////CHIPS/////////////////
	/*5 CHIP:
	------------------------------*/
	var bet5 = $('#chip5')
		bet5.text("5");
		bet5.click(function(){
		game.player.bet(5);

			//scoreboard	
			var moneyBank = $('#money')
			moneyBank.text('Money Bank: ' + game.player.moneyBank);
			
			var bet = $('#bet')
			bet.text('Bet: ' + game.player.betBank);
		});


	/*10 CHIP:
	---------------------------------*/
	var bet10 = $('#chip10')
		bet10.text("10");
		bet10.click(function(){
			game.player.bet(10);
		
			//scoreboard	
			var moneyBank = $('#money')
			moneyBank.text('Money Bank: ' + game.player.moneyBank);
			
			var bet = $('#bet')
			bet.text('Bet: ' + game.player.betBank);
		});

	/*50 CHIP:
	---------------------------------*/
	var bet50 = $('#chip50')
		bet50.text("50");
		bet50.click(function(){
			game.player.bet(50);

		//scoreboard
		var moneyBank = $('#money')
			moneyBank.text('Moeny Bank: ' + game.player.moneyBank);
		var bet = $('#bet')
			bet.text('Bet: ' + game.player.betBank);
		});


	/*100 CHIP:
	---------------------------------*/
	var bet100 = $('#chip100')
		bet100.text("100");
		bet100.click(function(){
			game.player.bet(100);

	//scoreboard
	var moneyBank = $('#money')
		moneyBank.text('Money Bank: ' + game.player.moneyBank);
	var bet = $('#bet')
		bet.text('Bet: ' + game.player.betBank);
		});





	/*Deal button
	-------------------------------------*/
	var dealButton = $('#deal')
		dealButton.text("Deal");
		dealButton.click(function(){
			game.initDeal();
			render();
		});

		var render = function  () {
			//Showing player card values 
			for(var i = 0; i < game.player.hand.cards.length;i++){
				var currentPlayerCard = $("#playerCard" + (i + 1));
				currentPlayerCard.attr("src", game.player.hand.cards[i].image);
				var playerTotal = $('#playerTotal');
				playerTotal.text("this is players total:" + game.player.hand.value);
			};
			for(var j = 0; j < game.dealer.hand.cards.length;j++){
				var currentDealerCard = $("#dealerCard" + (j + 1));
				currentDealerCard.attr("src", game.dealer.hand.cards[j].image);
			}
		
		};


	/*Hit Button
	--------------------------------------*/
	var hitButton = $('#hit')
		hitButton.text("Hit")
		hitButton.click(function(){
			var card = game.dealer.deal();
			game.player.hand.hit(card);
			game.player.hand.getValue()
			var num = game.player.hand.cards.length;
			var newCardDiv = $('<img>');
			newCardDiv.attr("src", card.image);
			newCardDiv.attr('id', "playerCard" + num);
			$('.playerCards').append(newCardDiv)

			
			gameOver();
			render();
		});



	/*Stay Button
	---------------------------------------*/
	var stayButton = $('#stay')
		stayButton.text("Stay")
		stayButton.click(function(){
			var card = game.dealer.deal();
			game.dealer.hand.dealerHit(card);
			game.dealer.hand.getValue();

			var num = game.dealer.hand.cards.length;
			var newCardDiv = $('<img>');
			newCardDiv.attr('src', card.image);
			newCardDiv.attr('id', "dealerCard" + num);
			$('.dealerCards').append(newCardDiv)
			
			render();
			game.comparingHands();

		});

		/*Checking for Game over
	---------------------------------------*/
	var gameOver = function(){
		game.checkForBust();
		
	}


	/*Reset Button
	---------------------------------------*/
	var reset = $('#reset')
	reset.text("Resest");
		reset.click(function(){
			game.startGame();
		});


});

