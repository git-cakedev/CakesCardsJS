"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _deck = _interopRequireDefault(require("./deck"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function Game(name, players) {
  _classCallCheck(this, Game);

  this.name = name;
  this.players = players;
  var d = new _deck["default"]();
  d.createDeck();
};

exports["default"] = Game;