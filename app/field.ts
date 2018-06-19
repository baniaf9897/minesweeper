import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { METHODS } from "http";

export class Field {
    isMine:boolean
    value:any
    x:number
    y:number
    constructor(isMine:boolean, xCoordinate:number, yCoordinate:number ){
        this.isMine = isMine
        this.value = 0
        this.x = xCoordinate
        this.y = yCoordinate
    }
}
