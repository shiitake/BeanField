export class Cards{
	heading = 'Cards';
	deckCount = 52;
	handCount = 0;
	discardCount = 0;

	drawCard(){
		if (this.deckCount <= 0)
		{
			shuffleDeck();
		}
		this.deckCount--;
		this.handCount++;		
	}

	discardCard(){
		this.handCount--;
		this.discardCount++;
	}

	shuffleDeck(){
		this.deckCount += this.discardCount;
		this.discardCount = 0;
	}
}