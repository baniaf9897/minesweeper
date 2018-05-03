import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { METHODS } from "http";

export class Field {
    isMine:boolean
    value:string
    constructor(isMine:boolean){
        this.isMine = isMine
    }
}
