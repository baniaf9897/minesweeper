"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var gameBoard_1 = require("./gameBoard");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        this.gameBoard = new gameBoard_1.GameBoard(10);
        this.gameBoard.distributeMines(20);
        this.rows = new Array(this.gameBoard.getLength());
        for (var i = 0; i < this.gameBoard.getLength(); i++) {
        }
    };
    AppComponent.prototype.startGame = function () {
        //Output
        this.gameBoard = new gameBoard_1.GameBoard(10);
        this.gameBoard.distributeMines(20);
        var string = "";
        for (var i = 0; i < this.gameBoard.board.length; i++) {
            string = string + (String(this.gameBoard.board[i].x)) + "/" + (String(this.gameBoard.board[i].y)) + "/" + (String(this.gameBoard.board[i].value)) + "   ";
        }
        console.log(string);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "minesweeper",
            templateUrl: "app/game.component.html"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
