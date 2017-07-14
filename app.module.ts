import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { PlayersListComponent } from './players/players-list.component';
import {PlayerFilterPipe} from './players/players-filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    PlayersListComponent,
    PlayerFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
