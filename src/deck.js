import Card from './card';

export default class Deck {
    constructor(){
        this.cards = []
    }
    createDeck(){
        let suites = ['clubs', 'spades', 'hearts', 'diamonds']
        let names = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

        for(var i=0; i < suites.length; i++){
            for(var j=0; j < names.length; j++){
                this.cards.push(new Card(suites[i], names[j], values[j]));
            }
        }
    }
    shuffleDeck(){
        let location1, location2, tmp;
        for (let i = 0; i < 1000; i++) {

            location1 = Math.floor((Math.random() * this.cards.length));
            location2 = Math.floor((Math.random() * this.cards.length));

            tmp = this.cards[location1];
            this.cards[location1] = this.cards[location2];
            this.cards[location2] = tmp;
        }
    }

    draw(number){
        var result = []
        if (Number.isInteger(number) && (this.cards.length <= number)){
            for (var i=0; i<=number;i++)
                result.push(this.cards.pop());
        }else{
            console.log("cant draw that many cards, deck is empty!")
        }
    }
}
