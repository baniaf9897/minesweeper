import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./game.component";
import { Tile } from "./tile/tile.component";
import { Row } from "./row/row.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent,Tile,Row],
    bootstrap: [AppComponent]
})
export class AppModule { }
