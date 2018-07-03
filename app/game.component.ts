import {Component} from "@angular/core"
import {GameBoard} from "./models/gameBoard.model"
import { Row } from "./row/row.component";

@Component({
    selector: "minesweeper",
    templateUrl: "app/game.component.html"
})
export class AppComponent{
    gameBoard
    rows: Row[]
 
    ngOnInit(){
        this.startGame()
    }
    startGame(){
        //Output
        this.gameBoard = new GameBoard(10)
        this.gameBoard.distributeMines(20)  
        this.rows = new Array(this.gameBoard.getLength())

        for(let i = 1; i <= this.gameBoard.getLength(); i++){
            this.rows[i - 1] = new Row(this.gameBoard.getAllFieldsOfARow(i))
        }
        
        
        
        let string = ""
        for(let i = 0; i < this.gameBoard.board.length; i ++){ 
                 string = string + (String(this.gameBoard.board[i].x)) +"/"+(String(this.gameBoard.board[i].y))+"/"+(String(this.gameBoard.board[i].value)) + "   "
        }
        console.log(string)
    }
}