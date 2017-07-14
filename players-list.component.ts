import { Component,OnInit } from '@angular/core';
import {PlayersInterface} from './playersschema'
import {PlayersService} from './players.service'
@Component({
  selector: 'players-root',
  templateUrl: './players-list.component.html',
})
export class PlayersListComponent implements OnInit {
  pageTitle:String="Players List"
  showImage=false
  imageWidth:number=50;
  imageMargin:number=2;
  players: PlayersInterface[]
  constructor(private _playersservice:PlayersService){
  }
  ngOnInit():void{
    this.players=this._playersservice.getPlayers()
  }
manipulateImage():void
{
  this.showImage=!this.showImage
}
}