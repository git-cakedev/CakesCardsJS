"use strict";

var _game = _interopRequireDefault(require("./game"));

var _player = _interopRequireDefault(require("./player"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var dealer = new _player["default"]();
var game = new _game["default"]("pee");