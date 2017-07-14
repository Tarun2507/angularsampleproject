import { Component } from '@angular/core';
import {PlayersService} from './players/players.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PlayersService]
})
export class AppComponent {
  title = 'PlayersListManagement';
}
