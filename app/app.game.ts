import {Component} from "@angular/core"
import { METHODS } from "http";
import {GameBoard} from './gameBoard'

@Component({
    selector: "minesweeper",
    templateUrl: "app/app.game.html"
})
export class AppComponent{
     board

     startGame(){
        this.board = new GameBoard(10)
        this.board.distributeMines(10)    
        console.log(this.board.board)
    }
    getGameArray(){
        return this.board.board
    }
}