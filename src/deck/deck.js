export class Deck{
	heading = "Here is your deck.";
	unshuffled = [];	
	beanList = [
	{name: 'Garden', id: 23, count: 6},
	{name: 'Cocoa', id: 234, count: 4},
	{name: 'Red', id: 2345, count: 8},
	{name: 'Black-Eyed', id: 2456, count: 10},
	{name: 'Soy', id: 2467, count: 12},
	{name: 'Green', id: 3567, count: 14},
	{name: 'Stink', id: 3578, count: 16},
	{name: 'Chili', id: 3689, count: 18},
	{name: 'Blue', id: 46810, count: 20},
	{name: 'Wax', id: 47911, count: 22},
	{name: 'Coffee', id: 471012, count: 24}];
	cardDeck = [];
	playerList = [];
	playerName = 'Jim';	

	getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

	GetUnshuffled(){		
		for (var o = 0; o < this.beanList.length; o++)
		{
			for (var i = 0; i < this.beanList[o].count; i++ )
				{
					var card = {name: this.beanList[o].name, id: this.beanList[o].id, count: this.beanList[o].count};					
					this.unshuffled.push(card);
				}				
		}
	}
	BuildDeck() {
		console.log("Building deck.")
		this.GetUnshuffled();		
		var tempstack = this.unshuffled;
		for (var p = 0; p < this.unshuffled.length; p++)
		{
			var index = this.getRandomInt(0, tempstack.length);
			this.cardDeck.push(tempstack[index]);
			tempstack = tempstack.filter(function(n) { return n != undefined });
		}
		this.unshuffled = [];
	}

	DealStartingHand() {
		if (this.cardDeck.length == 0)
		{
			this.BuildDeck();			
		}
		for (var i = 0; i < 5; i++)
		{
			//each person draw card in order 5 times
			for (var o = 0; o < this.playerList.length; o++)
			{
				var card = this.DrawCard();				
				this.playerList[o].hand.push(card);
			}
			debugger;

		}
	}

	DrawCard() {
		return this.cardDeck.pop();
	}

	StartGame()  {
		//deal cards to each player		
		this.DealStartingHand();
	}

	CreatePlayer() {		
		var player = {
			name: this.playerName,
			hand: [],
			fieldcount: 2,
			field: {},
			score: 0
		}		
		this.playerList.push(player);
	}


}

