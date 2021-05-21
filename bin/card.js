"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Card = function Card(suite, name, value) {
  _classCallCheck(this, Card);

  this.suite = suite;
  this.name = name;
  this.value = value;
};

exports["default"] = Card;