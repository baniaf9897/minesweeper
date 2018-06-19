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
        while(amountMines > 0){
             let x = Math.floor(Math.random() * 10) +1 
             let y = Math.floor(Math.random() * 10) +1
             if(checkIfFieldAlreadyExist(x,y,this.board)){
                let mine = new Field(true,x,y)
                mine.value = 'X'
                this.board.push(mine)
                amountMines--
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
      //  calculateValueOfFields(this.board)

        let mines = this.board.filter( el => el.isMine === true) 
        let fields = this.board.filter( el => el.isMine === false)

        let neighbors: Field[] =  new Array()
        mines.forEach(mine => {
            neighbors.push(fields.find(el =>  el.x === (mine.x + 1) && el.y === mine.y ))
            neighbors.push(fields.find(el =>  el.x === (mine.x - 1) && el.y === mine.y ))
            neighbors.push(fields.find(el =>  el.x === (mine.x - 1) && el.y === (mine.y - 1)))
            neighbors.push(fields.find(el =>  el.x === mine.x && el.y === (mine.y - 1) ))
            neighbors.push(fields.find(el =>  el.x === (mine.x + 1) && el.y === (mine.y - 1)))
            neighbors.push(fields.find(el =>  el.x === mine.x  && el.y === (mine.y + 1)))
            neighbors.push(fields.find(el =>  el.x === (mine.x + 1) && el.y === (mine.y + 1)))
        })

        neighbors.forEach(el => {
           if(this.board.includes(el)){
           this.board[this.board.indexOf(el)].value ++
        }
         })
         

    }

    getLength(){
        return this.length * this.length
    }
}

function checkIfFieldAlreadyExist(x,y,board){
   let filteredEl =  board.find(el =>
         el.x === x && el.y === y
    )
    return filteredEl === undefined
}
