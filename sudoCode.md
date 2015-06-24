What I'm going to need:
     - a Deck of 52 Cards (with their values)
        side note : Ace can we a 11 or 1
     - Chips 5, 10, 50, 100 (start with 500 in money bank)
     - Dealer and Player
     -  Scored board (Play Money and How much they bet that hand)

object:
	- attributes 
	- and what behavior

Cards:
	attributes: 
		Suit: Diamonds, hearts, spade, clubs
		Values: 1 or 11,2,3,4,5,6,7,8,9,10,10,10,

Deck Object: 
	attributes: 
		card(s): 52
	behaviours: 
		random shuffle function()
			- The deck will randomly shuffle the array of cards
		remove cards function() 
			- When deal is clicked, the deck will remove 4 cards at random
			- it will push the dealer two cards (one face up one face down)
			- it will push the player two cards (two face up)

Player Object: 
	attributes: 
		Hand: 0 
		Money: Starts at 500
		Bet: starts at 0
		Stay: false
		Black Jack: 
			- If the users cards are valued 11 and 10 black jack = true
			else false
	behaviours:
		Bet function
			- when the player clicks on chips : their value will be added to bet and subtracted from their money
			- !QUESTION! (Where would i put like it depends on this game if they bet all their money?) the players money can not go negative
		Deal function
			- when the player clicks deal they can no longer add money to their bet
			- when the player clicks deal 2 cards are added to their hand 2(+) and those cards are removed from the deck
			- Hand = value of card 1 + value of card 2
		Hit function
			- If the player clicks on "hit" a card is removed from the deck and added to players hand
			- hand now = vc1 + vc2 +vc3
				if players hand value is > 21 player busts and loses the game
				if players hand value is <= 21 player gets the choice to hit or stay
				if the player chooses hit, this function is rerun
		Stay Function
			- if the player clicks on stay the game is moved to the dealers turn
		(IDK ABOUT THESE: result win or lose)

Dealer Object:
	attributes:
		Hand: 0
		Stay: true
		black jack: 
			- If the dealers cards are valued 11 and 10 black jack = true
			else false
	behaviors:
		Deal function
			- when the player clicks deal 2 cards are added to the dealers hand 2(+) and those cards are removed from the deck
			- Dealer Hand = value of card 1 + value of card 2
		Hit function 
			- if the dealers hand value is <= 16 
				a card is removed from the deck and added to the Dealers hand value
				- if the dealers hand value if > 21 the dealer busts and loses and player wins
				else if dealers hand value is <= 21 the dealer moves to stay function (call?)
		Stay function 
			- if the dealers hand value is === to players value : its a tie
			- if the dealers hand value is > players and =<21 then dealer wins
			- if the dealers hand value is < players and players =< 21 player wins
			or you can do else loses

Chips:
	Attributes: 
		Value










Game 
- the game will start when the player clicks on how much they want to bet on that hand
	- the player must click on how much they would like to bet -- their cash starts at 500
	- the amount the user chooses: 5, 10, 50, 100 should be added to bet and subtracted from their money bank
	- if user money back has no money left: if they win this game the game will cont. if they lose they are out of money and they are done
       - When they click on 5, 10, 50, 100: that amount will be taken out of their amount of cash
        - if they click on multiple chips example) 10+50 = 60 should should up as their bet and that amount should be - from their money bank

 - After the player chooses their bet money their will be a button on click that will deal the cards

Game Starts --Player
	- the player gets two cards face up when they press deal at random and the dealer gets two cards one face up and one face down (probably just two faced up)
	- the player can choose if they would like to "hit" or "stay"
    - if they click / choose to "stay" the game is moved over to the dealers turn
          -if their card value is higher then the dealers and under 21, they win and their bet money is doubled
          -if  their card value is lower then the dealers and the dealers value is under 21 player loses
              - and they don't get their cash back
              - comes back to the whole if they are out of money stuffs
   
- if the player chooses to "hit" they are dealt another card
          - if the players card values higher then 21, they bust and lose to the dealer 
                   - that means they don't get their cash back
                   - unless they have an ace, they that ace is 11 until the user goes over 21 then it turns to one
                   - after player goes over 21 round is over and player has lost
          - else if their card values are >= 21 are safe to stay and the game moves to the dealers turn
                  -if their card value is higher then the dealers and under 21, they win and their bet money is doubled
                   -if  their card value is lower then the dealers and the dealers value is under 21 player loses
                    - and they don't get their cash back

- There should be something that comes up where is says something if the player has won that round or if they bust 

Dealer Randomization 
	- Now it is the dealers turn
		-if the dealers card value is under 16 they have to hit.
		- else they can stay
			if dealer has to hit and goes over 21 the dealer has lost and the player has won
			if the dealers card value is >= 21 and higher then the players, the dealer has won

