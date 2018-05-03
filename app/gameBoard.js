"use strict";
var field_1 = require('./field');
var GameBoard = (function () {
    function GameBoard(length) {
        this.board = create2DArray(length);
    }
    GameBoard.prototype.distributeMines = function (amountMines) {
        //distributes mines
        for (var i = 0; i < amountMines; i++) {
            var x = Math.floor(Math.random() * 10);
            var y = Math.floor(Math.random() * 10);
            this.board[x][y] = new field_1.Field(true);
        }
    };
    return GameBoard;
}());
exports.GameBoard = GameBoard;
function create2DArray(length) {
    var array = new Array(length);
    for (var i = 0; i < length; i++) {
        array[i] = new Array(length);
    }
    for (var i = 0; i < length; i++) {
        for (var j = 0; j < length; j++) {
            array[i][j] = new field_1.Field(false);
        }
    }
    return array;
}
