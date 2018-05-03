import {Field} from './field'

export class GameBoard{
    board:Field[]

    initializeBoard(length:number){ 
        this.board = create2DArray(length)
    }
    distributeMines(amountMines:number){
        //distributes mines
         for(let i = 0; i < amountMines; i++){
             let x = Math.floor(Math.random() * this.board.length) 
             let y = Math.floor(Math.random() * this.board.length) 
             this.board[x][y] = new Field(true)
         }
    }
}
function create2DArray(length:number){
    let array = new Array(length)
    let row = new Array(length)
    for(let i = 0; i < length; i++){
        row[i] = new Field(false)
    }
    for(let i = 0; i < length; i ++ ){
        array[i] = row
    }
    return array
}
