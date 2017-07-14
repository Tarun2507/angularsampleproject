import {  PipeTransform, Pipe } from '@angular/core';
import { PlayersInterface } from './playersschema';

@Pipe({
    name: 'playerFilter'
})
export class PlayerFilterPipe implements PipeTransform {

    transform(value: PlayersInterface[], filterBy: string): PlayersInterface[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((player:PlayersInterface) =>
            player.playername.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}