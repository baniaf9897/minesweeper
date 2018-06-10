import {Field} from './field'

 export class GameBoard{
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
        for(let x = 1; x <= this.length; x++){
            for(let y = 1; y <= this.length; y++){
                if(checkIfFieldAlreadyExist(x,y,this.board)){
                    let field = new Field(false,x,y)
                    this.board.push(field)
                }
            }
        }
        calculateValueOfFields(this.board)
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

function calculateValueOfFields(board){
    //              
    //     (x-1,y-1)    (x,y-1)     (x+1,y-1)
    //     (x-1,y)      (x,y)MINE       (x+1,y)
    //     (x-1,y+1)    (x,y+1)     (x+1,y+1)
    //
    let field :Field
    
    let minesArray = board.filter((el) => {
        el.isMine === true
    })

    let fieldArray = new Array()

    minesArray.forEach(mine => {
        field = board.find((el) =>{
            el.x === (mine.x + 1) && el.y === mine.y
        })
        fieldArray.push(field)
        field = this.board.find((el) =>{
            el.x === (mine.x - 1) && el.y === mine.y
        })
        fieldArray.push(field)
        field = this.board.find((el) =>{
            el.x === (mine.x - 1) && el.y === (mine.y - 1)
        })
        fieldArray.push(field)
        field = this.board.find((el) =>{
            el.x === mine.x && el.y === (mine.y - 1)
        }) 
        fieldArray.push(field)
        field = this.board.find((el) =>{
            el.x === (mine.x + 1) && el.y === (mine.y - 1)
        })
        fieldArray.push(field)
        field = this.board.find((el) =>{
            el.x === (mine.x - 1) && el.y === (mine.y + 1)
        }) 
        fieldArray.push(field)
        field = this.board.find((el) =>{
            el.x === mine.x  && el.y === (mine.y + 1)
        })
        fieldArray.push(field)
        field = this.board.find((el) =>{
            el.x === (mine.x + 1) && el.y === (mine.y + 1)
        })
        fieldArray.push(field)
    })

    fieldArray.forEach(mine =>{
        if(mine !== undefined){
            mine.value = mine.value + 1
        }
    })
}