import {Component} from "@angular/core"
import { METHODS } from "http";
import {GameBoard} from './gameBoard'

@Component({
    selector: "minesweeper",
    templateUrl: "app/app.game.html"
})
export class AppComponent{
     gameBoard

     startGame(){
        this.gameBoard = new GameBoard(10)
        this.gameBoard.distributeMines(10)    

        console.log("HIER IST EIN FELD", this.gameBoard.board[1][1])
        for(let i = 0; i < this.gameBoard.board.length; i ++){
            let string = ""
            for(let j = 0; j < this.gameBoard.board.length; j ++){
                string = string + (String(this.gameBoard.board[i][j].value)) 
            }
            console.log(string)
        }
    }
    getGameArray(){
        return this.gameBoard.board
    }
}