import {Field} from './field'

module.exports = class GameBoard{
    board:Field[]
    length:number

    constructor(length){
       this.length = length
       this.board = []
    }
    distributeMines(amountMines:number){       
        //distributes mines
        for(let i = 0; i < amountMines; i++){
             let x = Math.floor(Math.random() * 10) +1 
             let y = Math.floor(Math.random() * 10) +1
             if(checkIfFieldAlreadyExist(x,y,this.board)){
                let mine = new Field(true,x,y)
                mine.value = 'X'
                this.board.push(mine)
             }
        }
        
        //distribute fields
        let filteredEl
        for(let x = 1; x <= this.length; x++){
            for(let y = 1; y <= this.length; y++){
                if(checkIfFieldAlreadyExist(x,y,this.board)){
                    let field = new Field(false,x,y)
                    this.board.push(field)
                }
            }
        }
    }
    getLength(){
        return this.length * this.length
    }
}
function checkIfFieldAlreadyExist(x,y,board){
   let filteredEl =  board.find((el) =>{
        return el.x === x && el.y === y
    })
    return filteredEl === undefined
}

function calculateValueOfFields(board,x,y){
    //              
    //     (x-1,y-1)    (x,y-1)     (x+1,y-1)
    //     (x-1,y)      (x,y)       (x+1,y)
    //     (x-1,y+1)    (x,y+1)     (x+1,y+1)
    //
    for(let x = 1; x <= this.board.length;x++){
        for(let y =1; y <= this.board.length;y++){

        }
    }
}