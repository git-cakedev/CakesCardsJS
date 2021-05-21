"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _deck = _interopRequireDefault(require("./deck"));

var _player = _interopRequireDefault(require("./player"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Game = /*#__PURE__*/function () {
  function Game(name) {
    _classCallCheck(this, Game);

    this.name = name;
    this.players = [];
  }

  _createClass(Game, [{
    key: "addPlayer",
    value: function addPlayer(name) {
      var player = new _player["default"](name);
      this.players.push(player);
    }
  }, {
    key: "start",
    value: function start() {
      var d = new _deck["default"]();
      var d2 = new _deck["default"]();
      d.createDeck(); //d.draw(1)

      console.log(d); //this.players.forEach(d.draw())
    }
  }]);

  return Game;
}();

exports["default"] = Game;