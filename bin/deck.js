"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _card = _interopRequireDefault(require("./card"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Deck = /*#__PURE__*/function () {
  function Deck() {
    _classCallCheck(this, Deck);

    this.cards = [];
  }

  _createClass(Deck, [{
    key: "createDeck",
    value: function createDeck() {
      var suites = ['clubs', 'spades', 'hearts', 'diamonds'];
      var names = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
      var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

      for (var i = 0; i < suites.length; i++) {
        for (var j = 0; j < names.length; j++) {
          this.cards.push(new _card["default"](suites[i], names[j], values[j]));
        }
      }
    }
  }, {
    key: "shuffleDeck",
    value: function shuffleDeck() {
      var location1, location2, tmp;

      for (var i = 0; i < 1000; i++) {
        location1 = Math.floor(Math.random() * this.cards.length);
        location2 = Math.floor(Math.random() * this.cards.length);
        tmp = this.cards[location1];
        this.cards[location1] = this.cards[location2];
        this.cards[location2] = tmp;
      }
    }
  }, {
    key: "draw",
    value: function draw(number) {
      var result = [];

      if (Number.isInteger(number) && this.cards.length <= number) {
        for (var i = 0; i <= number; i++) {
          result.push(this.cards.pop());
        }
      } else {
        console.log("cant draw that many cards, deck is empty!");
      }
    }
  }]);

  return Deck;
}();

exports["default"] = Deck;