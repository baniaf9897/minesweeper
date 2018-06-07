"use strict";
var field_1 = require('./field');
module.exports = (function () {
    function GameBoard(length) {
        this.length = length;
        this.board = [];
    }
    GameBoard.prototype.distributeMines = function (amountMines) {
        //distributes mines
        for (var i = 0; i < amountMines; i++) {
            var x = Math.floor(Math.random() * 10) + 1;
            var y = Math.floor(Math.random() * 10) + 1;
            if (checkIfFieldAlreadyExist(x, y, this.board)) {
                var mine = new field_1.Field(true, x, y);
                mine.value = 'X';
                this.board.push(mine);
            }
        }
        //distribute fields
        var filteredEl;
        for (var x = 1; x <= this.length; x++) {
            for (var y = 1; y <= this.length; y++) {
                if (checkIfFieldAlreadyExist(x, y, this.board)) {
                    var field = new field_1.Field(false, x, y);
                    this.board.push(field);
                }
            }
        }
    };
    GameBoard.prototype.getLength = function () {
        return this.length * this.length;
    };
    return GameBoard;
}());
function checkIfFieldAlreadyExist(x, y, board) {
    var filteredEl = board.find(function (el) {
        return el.x === x && el.y === y;
    });
    return filteredEl === undefined;
}
function calculateValueOfFields(board, x, y) {
    //              
    //     (x-1,y-1)    (x,y-1)     (x+1,y-1)
    //     (x-1,y)      (x,y)       (x+1,y)
    //     (x-1,y+1)    (x,y+1)     (x+1,y+1)
    //
    for (var x_1 = 1; x_1 <= this.board.length; x_1++) {
        for (var y_1 = 1; y_1 <= this.board.length; y_1++) {
        }
    }
}
