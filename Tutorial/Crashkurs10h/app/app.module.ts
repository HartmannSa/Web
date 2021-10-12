import { BrowserModule } from '@angular/platform-browser';
import { ngModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@ngModule({
    declarations:[
        AppComponent
    ],
    imports: [
        BrowserModule
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }