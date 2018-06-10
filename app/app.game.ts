import {Component} from "@angular/core"
import {GameBoard} from "./gameBoard"

@Component({
    selector: "minesweeper",
    templateUrl: "app/app.game.html"
})
export class AppComponent{
     gameBoard

     startGame(){
        this.gameBoard = new GameBoard(10)
        this.gameBoard.distributeMines(10)    
        let string = ""
        console.log('Länge',this.gameBoard.board.length)
     
        for(let i = 0; i < this.gameBoard.board.length; i ++){ 
                 string = string + (String(this.gameBoard.board[i].x)) +"/"+(String(this.gameBoard.board[i].y))+"/"+(String(this.gameBoard.board[i].value)) + "  "
        }
        
        console.log(string)

    }
    getGameArray(){
        return this.gameBoard.board
    }
}