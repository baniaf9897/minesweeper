import {Component} from "@angular/core"
import { METHODS } from "http";
import {GameBoard} from './gameBoard'

@Component({
    selector: "minesweeper",
    templateUrl: "app/app.game.html"
})
export class AppComponent{
     board = new GameBoard()
     
     initializeGame(){
        this.board.initializeBoard()
        this.board.distributeMines()
     }
}