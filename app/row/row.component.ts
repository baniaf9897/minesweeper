import { Component } from "@angular/core";
import { Field } from "../field"
import { Tile } from "../tile/tile.component";
@Component({
    selector: "row",
    templateUrl: "./row.component.html"
})
export class Row{
  row: Tile[] 

  constructor(tiles: Array<Field>){
    this.row = new Array(tiles.length)
    
    tiles.map((_tile)=>{
      _tile = new Tile(_tile)
    })
    this.row = tiles
  }
    
}