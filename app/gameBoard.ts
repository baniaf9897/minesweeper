import {Field} from './field'

export class GameBoard{
    board

    constructor(length){
        this.board = create2DArray(length)
    }

    distributeMines(amountMines:number){
        //distributes mines
         for(var i = 0; i < amountMines; i++){
             let x = Math.floor(Math.random() * 10) 
             let y = Math.floor(Math.random() * 10) 
             this.board[x][y] = new Field(true)
         }
    }
}
function create2DArray(length:number){
    let array = new Array(length)
    for(var i = 0; i < length; i ++ ){
        array[i] = new Array(length)
    }
    for(var i = 0; i < length; i++){
        for(var j = 0; j < length; j++){
            array[i][j] = new Field(false)
        }
    }
    return array
}
