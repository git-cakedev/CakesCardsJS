"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function Player(name) {
  _classCallCheck(this, Player);

  this.name = name;
  this.playerCards = [];
  this.score = 0;
};

exports["default"] = Player;