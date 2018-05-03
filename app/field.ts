import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { METHODS } from "http";

export class Field {
    isMine:boolean
    value:string
    x:number
    y:number
    constructor(isMine:boolean){
        this.isMine = isMine
    }
}
export class Mine extends Field{
}
export class FreeField extends Field{
    surroundingMines:number
} 