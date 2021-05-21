import Deck from './deck';
import Player from './player';

export default class Game{
    constructor(name){
        this.name = name;
        this.players = [];
    }

    addPlayer(name){
        var player = new Player(name);
        this.players.push(player);
    }

    start(){
        var d = new Deck();
        var d2 = new Deck();
        d.createDeck();
        //d.draw(1)
        console.log(d)
        //this.players.forEach(d.draw())
    }
}
