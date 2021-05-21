import Deck from './deck';

export default class Game{
    constructor(name, players){
        this.name = name;
        this.players = players;

        var d = new Deck();
        d.createDeck();
    }
}
