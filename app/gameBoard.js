"use strict";
var field_1 = require('./field');
var GameBoard = (function () {
    function GameBoard(length) {
        this.board = create2DArray(length);
    }
    GameBoard.prototype.distributeMines = function (amountMines) {
        var mineCoord = [];
        //distributes mines
        for (var i = 0; i < amountMines; i++) {
            var x = Math.floor(Math.random() * 8) + 1;
            var y = Math.floor(Math.random() * 8) + 1;
            var mine = new field_1.Field(true);
            mine.value = 'X';
            this.board[x][y] = mine;
            mineCoord.push([x, y]);
        }
        //value calulation
        for (var i_1 = 0; i_1 < mineCoord.length; i_1++) {
            var tupl = mineCoord[i_1];
            var x = tupl[0];
            var y = tupl[1];
            var neighbors = [];
            if (x !== 0) {
                var neighbor7 = this.board[x - 1][y];
                neighbors.push(neighbor7);
                if (y !== 0) {
                    var neighbor6 = this.board[x - 1][y - 1];
                    neighbors.push(neighbor6);
                }
                if (y !== this.board.length) {
                    var neighbor8 = this.board[x - 1][y + 1];
                    neighbors.push(neighbor8);
                }
            }
            if (x !== this.board.length) {
                var neighbor3 = this.board[x + 1][y];
                neighbors.push(neighbor3);
                if (y !== this.board.length) {
                    var neighbor2 = this.board[x + 1][y + 1];
                    neighbors.push(neighbor2);
                }
                if (y !== 0) {
                    var neighbor4 = this.board[x + 1][y - 1];
                    neighbors.push(neighbor4);
                }
            }
            if (y !== this.board.length) {
                var neighbor1 = this.board[x][y + 1];
                neighbors.push(neighbor1);
            }
            if (y !== 0) {
                var neighbor5 = this.board[x][y - 1];
                neighbors.push(neighbor5);
            }
            //   neighbors.push(neighbor1,neighbor2,neighbor3,neighbor4,neighbor5,neighbor6,neighbor7,neighbor8)
            for (var i_2 = 0; i_2 < neighbors.length; i_2++) {
                if (!neighbors[i_2].isMine)
                    neighbors[i_2].value = neighbors[i_2].value + 1;
            }
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
