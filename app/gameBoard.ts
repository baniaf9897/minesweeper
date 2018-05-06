import {Field} from './field'

export class GameBoard{
    board

    constructor(length){
        this.board = create2DArray(length)
    }
    distributeMines(amountMines:number){
        let mineCoord = []

        //distributes mines
        for(var i = 0; i < amountMines; i++){
             let x = Math.floor(Math.random() * 8) +1 
             let y = Math.floor(Math.random() * 8) +1
             let mine = new Field(true)
             mine.value = 'X'
             this.board[x][y] = mine
             mineCoord.push([x,y])
        }

         //value calulation
        for(let i = 0; i < mineCoord.length; i++){
            let tupl = mineCoord[i]
            let x = tupl[0]
            let y = tupl[1]
            let neighbors = []

            if(x !== 0){
                let neighbor7 = this.board[x-1][y]
                neighbors.push(neighbor7)
                if(y !== 0){
                    let neighbor6 = this.board[x-1][y-1]
                    neighbors.push(neighbor6)
                }
                if(y !== this.board.length){
                    let neighbor8 = this.board[x-1][y+1]
                    neighbors.push(neighbor8)
                 }
            }
            if(x !== this.board.length){
                let neighbor3 = this.board[x+1][y]
                neighbors.push(neighbor3)
                if(y !== this.board.length){
                    let neighbor2 = this.board[x+1][y+1]
                    neighbors.push(neighbor2)
                }
                if(y !== 0){
                    let neighbor4 = this.board[x+1][y-1]
                    neighbors.push(neighbor4)
                }
            }

            if(y !== this.board.length){
                let neighbor1 = this.board[x][y+1]
                neighbors.push(neighbor1)
            }
            if(y !== 0){
                let neighbor5 = this.board[x][y-1]
                neighbors.push(neighbor5)
            }
            

         //   neighbors.push(neighbor1,neighbor2,neighbor3,neighbor4,neighbor5,neighbor6,neighbor7,neighbor8)
           
            for(let i = 0; i < neighbors.length; i++){
            if(!neighbors[i].isMine) neighbors[i].value = neighbors[i].value + 1
            }
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