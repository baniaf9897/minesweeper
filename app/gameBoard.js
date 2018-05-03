"use strict";
var field_1 = require('./field');
var GameBoard = (function () {
    function GameBoard() {
    }
    GameBoard.prototype.initializeBoard = function (length) {
        this.board = create2DArray(length);
    };
    GameBoard.prototype.distributeMines = function (amountMines) {
        //distributes mines
        for (var i = 0; i < amountMines; i++) {
            var x = Math.floor(Math.random() * this.board.length);
            var y = Math.floor(Math.random() * this.board.length);
            this.board[x][y] = new field_1.Field(true);
        }
    };
    return GameBoard;
}());
exports.GameBoard = GameBoard;
function create2DArray(length) {
    var array = new Array(length);
    var row = new Array(length);
    for (var i = 0; i < length; i++) {
        row[i] = new field_1.Field(false);
    }
    for (var i = 0; i < length; i++) {
        array[i] = row;
    }
    return array;
}
