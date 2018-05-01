import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppGame } from "./app.game";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppGame],
    bootstrap: [AppGame]
})
export class AppModule { }
