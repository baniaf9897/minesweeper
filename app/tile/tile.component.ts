import { Component } from "@angular/core";
import { Field } from "../models/field.model";

@Component({
    selector: "tile",
    templateUrl: "./tile.component.html"
})
export class Tile{
    tile:Field

    constructor(field: Field){
        this.tile = field
    }
}