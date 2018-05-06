import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { METHODS } from "http";

export class Field {
    isMine:boolean
    value
    constructor(isMine:boolean){
        this.isMine = isMine
        this.value = 0
    }
}
