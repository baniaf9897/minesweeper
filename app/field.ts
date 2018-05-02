export class Field {
    isMine:boolean
    constructor(isMine:boolean){
        this.isMine = isMine
    }
}
export class Mine extends Field{
}
export class FreeField extends Field{
    surroundingMines:number
} 