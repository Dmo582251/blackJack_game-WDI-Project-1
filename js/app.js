console.log("app.js has loaded");

$(function(){
	
	//////////CHIPS/////////////////
	/*5 CHIP:
	------------------------------*/
	var bet5 = $('#chip5')
		bet5.text("5");
		bet5.click(function(){
		player.bet(5);

			//scoreboard	
			var moneyBank = $('#money')
			moneyBank.text('' + player.moneyBank);
			
			var bet = $('#bet')
			bet.text(player.betBank);
		});


	/*10 CHIP:
	---------------------------------*/
	var bet10 = $('#chip10')
		bet10.text("10");
		bet10.click(function(){
			player.bet(10);
		
			//scoreboard	
			var moneyBank = $('#money')
			moneyBank.text('' + player.moneyBank);
			
			var bet = $('#bet')
			bet.text(player.betBank);
		});

	/*50 CHIP:
	---------------------------------*/
	var bet50 = $('#chip50')
		bet50.text("50");
		bet50.click(function(){
			player.bet(50);

		//scoreboard
		var moneyBank = $('#money')
			moneyBank.text('' + player.moneyBank);
		var bet = $('#bet')
			bet.text(player.betBank);
		});


	/*100 CHIP:
	---------------------------------*/
	var bet100 = $('#chip100')
		bet100.text("100");
		bet100.click(function(){
			player.bet(100);

	//scoreboard
	var moneyBank = $('#money')
		moneyBank.text('' + player.moneyBank);
	var bet = $('#bet')
		bet.text(player.betBank);
		});





	/*Deal button
	-------------------------------------*/
	var dealButton = $('#deal')
		dealButton.text("Deal");
		dealButton.click(function(){
			dealer.deal(deck.getRandomCard());
			dealer.deal(deck.getRandomCard());
		
		//Showing player card values
		var playerCard1 = $("#playerCard1");
			console.log(player.hand.hand[0].value);
		var playerCard2 = $("#playerCard2");
			playerCard2.text(player.hand.hand[1].value);
		

		//Showing dealer card values
		var dealerCard1 = $("#dealerCard1");
			dealerCard1.text(dealer.hand.hand[0].value);
		var dealerCard2 = $("#dealerCard2")
			dealerCard2.text(dealer.hand.hand[1].value);
		});




	/*Hit Button
	--------------------------------------*/
	var hitButton = $('#hit')
		hitButton.text("Hit")
		hitButton.click(function(){
			//only hits once..
			player.hand.hit(deck.getRandomCard());
		
		//Showing player card values
		var playerCard1 = $("#playerCard1");
			console.log(player.hand.hand[0].value);
		var playerCard2 = $("#playerCard2");
			playerCard2.text(player.hand.hand[1].value);
		

		//Showing dealer card values
		var dealerCard1 = $("#dealerCard1");
			dealerCard1.text(dealer.hand.hand[0].value);
		var dealerCard2 = $("#dealerCard2")
			dealerCard2.text(dealer.hand.hand[1].value);
		});



	/*Stay Button
	---------------------------------------*/
	var stayButton = $('#stay')
		stayButton.text("Stay")
		stayButton.click(function(){
			dealer.hand.dealerHit();
		
		//Showing player card values
		var playerCard1 = $("#playerCard1");
			console.log(player.hand.hand[0].value);
		var playerCard2 = $("#playerCard2");
			playerCard2.text(player.hand.hand[1].value);
		

		//Showing dealer card values
		var dealerCard1 = $("#dealerCard1");
			dealerCard1.text(dealer.hand.hand[0].value);
		var dealerCard2 = $("#dealerCard2")
			dealerCard2.text(dealer.hand.hand[1].value);	
		});

});

