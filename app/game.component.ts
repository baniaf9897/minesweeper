import {Component} from "@angular/core"
import {GameBoard} from "./gameBoard"

@Component({
    selector: "minesweeper",
    templateUrl: "app/game.component.html"
})
export class AppComponent{
    gameBoard
 
    ngOnInit(){
        this.gameBoard = new GameBoard(10)
        this.gameBoard.distributeMines(20)  
        
    }
    startGame(){
        //Output
        this.gameBoard = new GameBoard(10)
        this.gameBoard.distributeMines(20)  

        let string = ""
        for(let i = 0; i < this.gameBoard.board.length; i ++){ 
                 string = string + (String(this.gameBoard.board[i].x)) +"/"+(String(this.gameBoard.board[i].y))+"/"+(String(this.gameBoard.board[i].value)) + "   "
        }
        console.log(string)

    }
}