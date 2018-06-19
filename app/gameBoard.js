"use strict";
var field_1 = require('./field');
var GameBoard = (function () {
    function GameBoard(length) {
        this.length = length;
        this.board = [];
    }
    GameBoard.prototype.distributeMines = function (amountMines) {
        var _this = this;
        //distributes mines
        while (amountMines > 0) {
            var x = Math.floor(Math.random() * 10) + 1;
            var y = Math.floor(Math.random() * 10) + 1;
            if (checkIfFieldAlreadyExist(x, y, this.board)) {
                var mine = new field_1.Field(true, x, y);
                mine.value = 'X';
                this.board.push(mine);
                amountMines--;
            }
        }
        //distribute fields
        for (var x = 1; x <= this.length; x++) {
            for (var y = 1; y <= this.length; y++) {
                if (checkIfFieldAlreadyExist(x, y, this.board)) {
                    var field = new field_1.Field(false, x, y);
                    this.board.push(field);
                }
            }
        }
        //  calculateValueOfFields(this.board)
        var mines = this.board.filter(function (el) { return el.isMine === true; });
        var fields = this.board.filter(function (el) { return el.isMine === false; });
        var neighbors = new Array();
        mines.forEach(function (mine) {
            neighbors.push(fields.find(function (el) { return el.x === (mine.x + 1) && el.y === mine.y; }));
            neighbors.push(fields.find(function (el) { return el.x === (mine.x - 1) && el.y === mine.y; }));
            neighbors.push(fields.find(function (el) { return el.x === (mine.x - 1) && el.y === (mine.y - 1); }));
            neighbors.push(fields.find(function (el) { return el.x === mine.x && el.y === (mine.y - 1); }));
            neighbors.push(fields.find(function (el) { return el.x === (mine.x + 1) && el.y === (mine.y - 1); }));
            neighbors.push(fields.find(function (el) { return el.x === mine.x && el.y === (mine.y + 1); }));
            neighbors.push(fields.find(function (el) { return el.x === (mine.x + 1) && el.y === (mine.y + 1); }));
        });
        neighbors.forEach(function (el) {
            _this.board.map(function (el) { return el.value++; });
        });
    };
    GameBoard.prototype.getLength = function () {
        return this.length * this.length;
    };
    return GameBoard;
}());
exports.GameBoard = GameBoard;
function checkIfFieldAlreadyExist(x, y, board) {
    var filteredEl = board.find(function (el) {
        return el.x === x && el.y === y;
    });
    return filteredEl === undefined;
}
