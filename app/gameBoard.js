"use strict";
var field_1 = require('./field');
var GameBoard = (function () {
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
        for (var x = 1; x <= this.length; x++) {
            for (var y = 1; y <= this.length; y++) {
                if (checkIfFieldAlreadyExist(x, y, this.board)) {
                    var field = new field_1.Field(false, x, y);
                    this.board.push(field);
                }
            }
        }
        calculateValueOfFields(this.board);
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
function calculateValueOfFields(board) {
    var _this = this;
    //              
    //     (x-1,y-1)    (x,y-1)     (x+1,y-1)
    //     (x-1,y)      (x,y)MINE       (x+1,y)
    //     (x-1,y+1)    (x,y+1)     (x+1,y+1)
    //
    var field;
    var minesArray = board.filter(function (el) {
        el.isMine === true;
    });
    var fieldArray = new Array();
    minesArray.forEach(function (mine) {
        field = board.find(function (el) {
            el.x === (mine.x + 1) && el.y === mine.y;
        });
        fieldArray.push(field);
        field = _this.board.find(function (el) {
            el.x === (mine.x - 1) && el.y === mine.y;
        });
        fieldArray.push(field);
        field = _this.board.find(function (el) {
            el.x === (mine.x - 1) && el.y === (mine.y - 1);
        });
        fieldArray.push(field);
        field = _this.board.find(function (el) {
            el.x === mine.x && el.y === (mine.y - 1);
        });
        fieldArray.push(field);
        field = _this.board.find(function (el) {
            el.x === (mine.x + 1) && el.y === (mine.y - 1);
        });
        fieldArray.push(field);
        field = _this.board.find(function (el) {
            el.x === (mine.x - 1) && el.y === (mine.y + 1);
        });
        fieldArray.push(field);
        field = _this.board.find(function (el) {
            el.x === mine.x && el.y === (mine.y + 1);
        });
        fieldArray.push(field);
        field = _this.board.find(function (el) {
            el.x === (mine.x + 1) && el.y === (mine.y + 1);
        });
        fieldArray.push(field);
    });
    fieldArray.forEach(function (mine) {
        if (mine !== undefined) {
            mine.value = mine.value + 1;
        }
    });
}
