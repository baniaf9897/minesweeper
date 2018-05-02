import {Field} from './field'
export class GameBoard{
    board
    initializeBoard(){
        this.board = create2DArray()
    }
    distributeMines(){
         for(let i = 0; i < 10; i++){
             let x = Math.floor(Math.random() * 100) 
             let y = Math.floor(Math.random() * 100) 
             this.board[x][y] = new Field(true)
             console.log('x '+ x)
             console.log('y '+ y)
             console.log(this.board[2][4])
         }
    }
}
function create2DArray(){
    let array = new Array(10)

    for(let i = 0; i < 10; i ++ ){
        array[i] = new Array(0,0,0,0,0,0,0,0,0,0)
    }
    return array
}