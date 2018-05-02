"use strict";
var field_1 = require('./field');
var GameBoard = (function () {
    function GameBoard() {
    }
    GameBoard.prototype.initializeBoard = function () {
        this.board = create2DArray();
    };
    GameBoard.prototype.distributeMines = function () {
        for (var i = 0; i < 10; i++) {
            var x = Math.floor(Math.random() * 100);
            var y = Math.floor(Math.random() * 100);
            this.board[x][y] = new field_1.Field(true);
            console.log('x ' + x);
            console.log('y ' + y);
            console.log(this.board[2][4]);
        }
    };
    return GameBoard;
}());
exports.GameBoard = GameBoard;
function create2DArray() {
    var array = new Array(10);
    for (var i = 0; i < 10; i++) {
        array[i] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
    return array;
}
